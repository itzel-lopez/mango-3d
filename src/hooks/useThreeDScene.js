import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// Grid slots ordered by distance from center — shapes fill outward, never overlap.
const STEP = 2.4;
const GRID_SLOTS = [
    [0, 0],
    [STEP, 0], [-STEP, 0], [0, STEP], [0, -STEP],
    [STEP, STEP], [-STEP, STEP], [STEP, -STEP], [-STEP, -STEP],
    [STEP * 2, 0], [-STEP * 2, 0], [0, STEP * 2], [0, -STEP * 2],
    [STEP * 2, STEP], [-STEP * 2, STEP], [STEP * 2, -STEP], [-STEP * 2, -STEP],
    [STEP, STEP * 2], [-STEP, STEP * 2], [STEP, -STEP * 2], [-STEP, -STEP * 2],
    [STEP * 2, STEP * 2], [-STEP * 2, STEP * 2], [STEP * 2, -STEP * 2], [-STEP * 2, -STEP * 2],
    [STEP * 3, 0], [-STEP * 3, 0], [0, STEP * 3], [0, -STEP * 3],
];

const useThreeDScene = (canvasRef) => {
    // State management for UI interaction
    const [objects, setObjects] = useState([]);
    const [selected, setSelected] = useState(null);
    const [secondary, setSecondary] = useState(null);
    const [hovered, setHovered] = useState(null);
    const [currentMode, setCurrentMode] = useState('translate');
    const [groups, setGroups] = useState([]);
    const [placementMode, setPlacementMode] = useState(null);
    const [undoStack, setUndoStack] = useState([]);
    const [preDragState, setPreDragState] = useState(null);

    // Refs for Three.js core elements and constants
    const scene = useRef(new THREE.Scene());
    const camera = useRef(new THREE.PerspectiveCamera(45, 1, 0.1, 1000));
    const renderer = useRef(null);
    const orbitControls = useRef(null);
    const transformControls = useRef(null);
    const raycaster = useRef(new THREE.Raycaster());
    const minimapCanvasRef = useRef(null); // Ref for the minimap canvas
    const minimapCtxRef = useRef(null);    // Ref for the minimap context
    const tcInteracting = useRef(false);   // True while TransformControls owns the pointer

    const THREE_CONSTS = useRef({
        FLOOR_PLANE: new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
        typeIcons: {
            box: '▪', sphere: '●', cylinder: '⬭',
            cone: '▲', torus: '◎', capsule: '▬'
        }
    });

    // Mutable ref to hold the latest state for callbacks
    const objectState = useRef({
        objects: [],
        selected: null,
        secondary: null,
        hovered: null,
        currentMode: 'translate',
        groups: [],
        placementMode: null,
        preDragState: null,
        undoStack: []
    });

    // --- Helper Functions ---
    const addOutline = useCallback((obj, color) => {
        if (!obj) return;
        removeOutline(obj);
        // 0xff9f0a = secondary (orange), 0xFFB800 = locked-primary (gold), else = single-primary (white)
        const isSecondary = color === 0xff9f0a;
        const isLocked   = color === 0xFFB800;
        const mat = new THREE.MeshBasicMaterial({
            color,
            side: THREE.BackSide,
            depthWrite: false,
            transparent: true,
            opacity: isSecondary ? 0.72 : isLocked ? 0.65 : 0.5,
        });
        const mesh = new THREE.Mesh(obj.geometry, mat);
        mesh.scale.setScalar(isSecondary ? 1.055 : 1.035);
        mesh.name = '__outline__';
        obj.add(mesh);
    }, []);

    const removeOutline = useCallback((obj) => {
        if (!obj) return;
        const o = obj.getObjectByName('__outline__');
        if (o) {
            o.material.dispose();
            obj.remove(o);
        }
    }, []);

    const setHoverEmissive = useCallback((obj, on) => {
        if (!obj || !obj.material) return;
        obj.material.emissive.setHex(on ? 0x888888 : 0x000000);
        obj.material.emissiveIntensity = on ? 0.12 : 0;
    }, []);

    const buildGeo = useCallback((type, s) => {
        // s = corner radius for box (0–0.45); all other shapes are always high-res
        switch (type) {
            case 'box':      return new RoundedBoxGeometry(1, 1, 1, 6, Math.max(0.001, s || 0.001));
            case 'sphere':   return new THREE.SphereGeometry(0.5, 32, 24);
            case 'cylinder': return new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
            case 'cone':     return new THREE.ConeGeometry(0.5, 1, 32);
            case 'torus':    return new THREE.TorusGeometry(0.38, 0.15, 16, 48);
            case 'capsule':  return new THREE.CapsuleGeometry(0.35, 0.6, 8, 24);
            default:         return new THREE.BoxGeometry(1, 1, 1);
        }
    }, []);

    const createMesh = useCallback((type, s = 0, c = 0x007AFF) => {
        const geo = buildGeo(type, s);
        const m = new THREE.Mesh(geo, new THREE.MeshPhysicalMaterial({ color: c, roughness: 0.15 }));
        m.castShadow = m.receiveShadow = true;
        m.userData = { type, smoothness: s, name: `${type.charAt(0).toUpperCase() + type.slice(1)} ${objectState.current.objects.length + 1}` };
        return m;
    }, [buildGeo]);

    const floorY = useCallback((mesh) => {
        mesh.geometry.computeBoundingBox();
        const b = mesh.geometry.boundingBox;
        return (b.max.y - b.min.y) / 2;
    }, []);

    const getObjectBox = useCallback((obj) => {
        obj.geometry.computeBoundingBox();
        const box = obj.geometry.boundingBox.clone();
        box.applyMatrix4(obj.matrixWorld);
        return box;
    }, []);

    const saveState = useCallback(() => {
        const snap = objectState.current.objects.map(o => ({
            t: o.userData.type, s: o.userData.smoothness,
            c: o.material.color.getHex(),
            rgh: o.material.roughness, met: o.material.metalness ?? 0, opa: o.material.opacity ?? 1,
            p: (o.userData.targetPos || o.position).clone(),
            r: o.rotation.clone(), sc: o.scale.clone(), n: o.userData.name
        }));
        setUndoStack(prev => {
            const newStack = [...prev, JSON.stringify(snap)];
            return newStack.length > 40 ? newStack.slice(1) : newStack;
        });
    }, []);

    const restoreState = useCallback((str) => {
        const state = JSON.parse(str);
        objectState.current.objects.forEach(o => { removeOutline(o); scene.current.remove(o); });
        const newObjects = state.map(s => {
            const m = createMesh(s.t, s.s, s.c);
            m.material.roughness = s.rgh !== undefined ? s.rgh : 0.15;
            m.material.metalness = s.met !== undefined ? s.met : 0;
            m.material.opacity   = s.opa !== undefined ? s.opa : 1;
            m.material.transparent = (s.opa !== undefined ? s.opa : 1) < 1;
            m.position.set(s.p.x, s.p.y, s.p.z);
            m.userData.targetPos = new THREE.Vector3(s.p.x, s.p.y, s.p.z);
            m.rotation.copy(s.r);
            m.scale.copy(s.sc);
            m.userData.name = s.n;
            scene.current.add(m);
            return m;
        });
        setObjects(newObjects);
        setSelected(null);
        setSecondary(null);
        setGroups([]);
        transformControls.current.detach();
    }, [createMesh, removeOutline, setObjects, setSelected, setSecondary]);

    // --- Minimap Logic ---
    // Reads entirely from refs so this callback is stable (no deps).
    // This prevents the main Three.js setup effect from re-running on every selection change.
    const updateMinimap = useCallback(() => {
        if (!minimapCtxRef.current || objectState.current.objects.length === 0) return;
        const mmCtx = minimapCtxRef.current;
        const W = minimapCanvasRef.current.width;
        const H = minimapCanvasRef.current.height;
        mmCtx.clearRect(0, 0, W, H);
        mmCtx.fillStyle = '#06060a';
        mmCtx.fillRect(0, 0, W, H);

        const sel = objectState.current.selected;
        const sec = objectState.current.secondary;

        const worldBoxes = objectState.current.objects.map(obj => {
            obj.geometry.computeBoundingBox();
            return obj.geometry.boundingBox.clone().applyMatrix4(obj.matrixWorld);
        });

        let range = 6;
        worldBoxes.forEach(b => {
            range = Math.max(range,
                Math.abs(b.max.x) + 1, Math.abs(b.min.x) + 1,
                Math.abs(b.max.z) + 1, Math.abs(b.min.z) + 1);
        });
        const sc = Math.min(W, H) / 2 / range;
        const cx = W / 2, cy = H / 2;

        // Grid
        mmCtx.strokeStyle = 'rgba(255,255,255,0.055)';
        mmCtx.lineWidth = 0.5;
        for (let i = -range; i <= range; i += 2.5) {
            mmCtx.beginPath(); mmCtx.moveTo(cx + i * sc, 0); mmCtx.lineTo(cx + i * sc, H); mmCtx.stroke();
            mmCtx.beginPath(); mmCtx.moveTo(0, cy + i * sc); mmCtx.lineTo(W, cy + i * sc); mmCtx.stroke();
        }
        // Center axes
        mmCtx.strokeStyle = 'rgba(255,255,255,0.14)';
        mmCtx.lineWidth = 0.8;
        mmCtx.beginPath(); mmCtx.moveTo(cx, 0); mmCtx.lineTo(cx, H); mmCtx.stroke();
        mmCtx.beginPath(); mmCtx.moveTo(0, cy); mmCtx.lineTo(W, cy); mmCtx.stroke();

        // Camera dot
        const camPx = cx + camera.current.position.x * sc;
        const camPy = cy + camera.current.position.z * sc;
        mmCtx.fillStyle = 'rgba(255,255,255,0.2)';
        mmCtx.beginPath(); mmCtx.arc(camPx, camPy, 2.5, 0, Math.PI * 2); mmCtx.fill();

        // Shapes
        objectState.current.objects.forEach((obj, i) => {
            const box = worldBoxes[i];
            const footW  = Math.max((box.max.x - box.min.x) * sc, 3);
            const footD  = Math.max((box.max.z - box.min.z) * sc, 3);
            const px = cx + ((box.min.x + box.max.x) / 2) * sc;
            const py = cy + ((box.min.z + box.max.z) / 2) * sc;
            const hex = '#' + obj.material.color.getHexString();
            const round = ['sphere','cylinder','torus','capsule','cone'].includes(obj.userData.type);

            mmCtx.beginPath();
            if (round) mmCtx.ellipse(px, py, footW / 2, footD / 2, 0, 0, Math.PI * 2);
            else mmCtx.rect(px - footW / 2, py - footD / 2, footW, footD);
            mmCtx.fillStyle = hex + 'bb';
            mmCtx.fill();
            mmCtx.strokeStyle = hex;
            mmCtx.lineWidth = 1;
            mmCtx.stroke();

            if (obj === sel) {
                const pad = 3;
                mmCtx.setLineDash([3, 2]);
                mmCtx.beginPath(); mmCtx.rect(px - footW / 2 - pad, py - footD / 2 - pad, footW + pad * 2, footD + pad * 2);
                mmCtx.strokeStyle = 'rgba(215,215,215,0.88)'; mmCtx.lineWidth = 1.5; mmCtx.stroke();
                mmCtx.setLineDash([]);
            } else if (obj === sec) {
                const pad = 3;
                mmCtx.beginPath(); mmCtx.rect(px - footW / 2 - pad, py - footD / 2 - pad, footW + pad * 2, footD + pad * 2);
                mmCtx.strokeStyle = '#ff9f0a'; mmCtx.lineWidth = 1.5; mmCtx.stroke();
            }
        });
    }, []); // Stable — reads selected/secondary from objectState ref, never needs to change

    // --- Outliner Logic ---
    const updateOutliner = useCallback(() => {
        // This logic will be handled in the UI component by mapping over the 'objects' state.
        // The hook provides the 'objects', 'selected', 'secondary', 'groups' states and related functions.
    }, []);

    // --- Core Three.js Setup and Effects ---
    useEffect(() => {
        const currentCanvas = canvasRef.current;
        if (!currentCanvas) return;

        // Renderer
        renderer.current = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
        renderer.current.setClearColor(0x07070D);
        renderer.current.setPixelRatio(window.devicePixelRatio);
        renderer.current.shadowMap.enabled = true;
        renderer.current.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.current.setSize(currentCanvas.clientWidth, currentCanvas.clientHeight);
        currentCanvas.appendChild(renderer.current.domElement);

        // Camera setup is done in the hook itself
        camera.current.aspect = currentCanvas.clientWidth / currentCanvas.clientHeight;
        camera.current.updateProjectionMatrix();
        camera.current.position.set(12, 12, 12);

        // Lights
        scene.current.add(new THREE.AmbientLight(0xffffff, 1.2));
        const sun = new THREE.DirectionalLight(0xffffff, 2.5);
        sun.position.set(10, 25, 15);
        sun.castShadow = true;
        scene.current.add(sun);

        // Floor and Grid
        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(100, 100),
            new THREE.MeshStandardMaterial({ color: 0x090910, roughness: 1 })
        );
        floor.rotation.x = -Math.PI / 2;
        floor.receiveShadow = true;
        scene.current.add(floor);

        // Subtle full grid for spatial context
        const grid = new THREE.GridHelper(50, 50, 0x242430, 0x1A1A24);
        grid.position.y = 0.01;
        scene.current.add(grid);

        // Center axis lines — red = X, blue = Z (matches transform gizmo convention)
        const axisX = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(-25, 0, 0), new THREE.Vector3(25, 0, 0)
            ]),
            new THREE.LineBasicMaterial({ color: 0x0A84FF, opacity: 0.55, transparent: true })
        );
        const axisZ = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(0, 0, -25), new THREE.Vector3(0, 0, 25)
            ]),
            new THREE.LineBasicMaterial({ color: 0x0A84FF, opacity: 0.55, transparent: true })
        );
        axisX.position.y = 0.02;
        axisZ.position.y = 0.02;
        scene.current.add(axisX, axisZ);

        // Orbit Controls
        orbitControls.current = new OrbitControls(camera.current, renderer.current.domElement);
        orbitControls.current.enableDamping = true;
        orbitControls.current.zoomToCursor = true;

        // Transform Controls
        transformControls.current = new TransformControls(camera.current, renderer.current.domElement);
        transformControls.current.setColors('#FF453A', '#34C759', '#0A84FF');
        transformControls.current.setSize(1.1);
        transformControls.current.addEventListener('dragging-changed', e => {
            if (orbitControls.current) orbitControls.current.enabled = !e.value;
        });
        // Set flag so our window pointerdown handler knows TC owns this click
        transformControls.current.addEventListener('mouseDown', () => { tcInteracting.current = true; });
        transformControls.current.addEventListener('mouseUp',   () => { tcInteracting.current = false; });
        // In r183, TransformControls is not an Object3D — add its visual helper instead
        scene.current.add(transformControls.current.getHelper());

        // Minimap context initialization
        if (minimapCanvasRef.current) {
            minimapCtxRef.current = minimapCanvasRef.current.getContext('2d');
        }

        // Resize handling
        const onResize = () => {
            if (!currentCanvas || !renderer.current || !camera.current) return;
            const w = currentCanvas.clientWidth;
            const h = currentCanvas.clientHeight;
            camera.current.aspect = w / h;
            camera.current.updateProjectionMatrix();
            renderer.current.setSize(w, h);
            // Trigger minimap redraw on resize as well
            updateMinimap();
        };
        window.addEventListener('resize', onResize);
        onResize(); // Initial resize call

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            if (orbitControls.current) orbitControls.current.update();
            // Smoothly lerp each object toward its target position.
            // While TransformControls is actively dragging an object, sync targetPos
            // to the live position so the lerp never fights the drag.
            objectState.current.objects.forEach(obj => {
                if (obj.userData.targetPos) {
                    const isDragged = transformControls.current?.object === obj
                        && transformControls.current?.dragging;
                    if (isDragged) {
                        obj.userData.targetPos.copy(obj.position);
                    } else if (obj.position.distanceTo(obj.userData.targetPos) > 0.001) {
                        obj.position.lerp(obj.userData.targetPos, 0.1);
                    } else {
                        obj.position.copy(obj.userData.targetPos);
                    }
                }
            });
            if (renderer.current) renderer.current.render(scene.current, camera.current);
            updateMinimap();
        };
        animate();

        return () => {
            window.removeEventListener('resize', onResize);
            if (renderer.current) {
                currentCanvas.removeChild(renderer.current.domElement);
                renderer.current.dispose();
            }
            if (orbitControls.current) orbitControls.current.dispose();
            if (transformControls.current) {
                // Remove the visual helper from the scene before disposing
                scene.current.remove(transformControls.current.getHelper());
                transformControls.current.dispose();
            }
        };
    }, [canvasRef]); // Only runs once on mount — updateMinimap is now stable

    // --- State Management Functions ---

    const selectObject = useCallback((obj) => {
        // Always clean up secondary outline
        removeOutline(objectState.current.secondary);

        // Remove outlines from all members of the previously selected object's group
        const prevGroup = objectState.current.groups.find(g => g.members.has(selected));
        if (prevGroup && selected !== obj) {
            prevGroup.members.forEach(m => removeOutline(m));
        }

        if (!obj) {
            if (!prevGroup) removeOutline(selected); // ungrouped single object
            setHoverEmissive(selected, false);
            setSelected(null);
            setSecondary(null);
            if (transformControls.current) transformControls.current.detach();
            return;
        }
        if (selected !== obj) {
            if (!prevGroup) removeOutline(selected);
            setHoverEmissive(selected, false);
        }
        setSelected(obj);
        setSecondary(null);
        if (transformControls.current) transformControls.current.attach(obj);

        // Outline the entire group, or just the single object
        const activeGroup = objectState.current.groups.find(g => g.members.has(obj));
        if (activeGroup) {
            activeGroup.members.forEach(m => addOutline(m, 0xFFB800));
        } else {
            addOutline(obj, 0xffffff);
        }
        setHoverEmissive(obj, false);
        saveState();
    }, [selected, removeOutline, setHoverEmissive, addOutline, saveState]);

    const deselectObject = useCallback(() => {
        selectObject(null);
    }, [selectObject]);

    const setSecondaryObject = useCallback((obj) => {
        if (secondary) removeOutline(secondary);
        setSecondary(obj);
        if (obj) {
            addOutline(obj, 0xff9f0a);
            setHoverEmissive(obj, false);
        }
    }, [secondary, removeOutline, addOutline, setHoverEmissive]);

    const clearSecondaryObject = useCallback(() => {
        setSecondaryObject(null);
    }, [setSecondaryObject]);

    const deleteSelectedObject = useCallback(() => {
        if (!selected) return;
        scene.current.remove(selected);
        setObjects(prev => prev.filter(obj => obj !== selected));
        setGroups(prev => prev
            .map(g => { const m = new Set(g.members); m.delete(selected); return { ...g, members: m }; })
            .filter(g => g.members.size >= 2)
        );
        deselectObject();
        saveState();
    }, [selected, setObjects, deselectObject, saveState]);

    const groundShape = useCallback(() => {
        if (!selected) return;
        const activeGroup = objectState.current.groups.find(g => g.members.has(selected));
        const toGround = activeGroup ? [...activeGroup.members] : [selected];

        // Find the lowest point across all objects in the group
        let lowestMinY = Infinity;
        toGround.forEach(obj => {
            obj.updateMatrixWorld(true);
            const box = getObjectBox(obj);
            lowestMinY = Math.min(lowestMinY, box.min.y);
        });

        // Shift all objects by the same delta so they stay in formation
        const dy = -lowestMinY;
        toGround.forEach(obj => {
            obj.position.y += dy;
            obj.userData.targetPos = obj.position.clone();
        });
        saveState();
    }, [selected, getObjectBox, saveState]);

    const lockGroupAction = useCallback(() => {
        if (!selected || !secondary) return;
        const existingGroup = objectState.current.groups.find(
            g => g.members.has(selected) || g.members.has(secondary)
        );
        if (existingGroup) {
            setGroups(prev => prev.map(g => {
                if (g.id !== existingGroup.id) return g;
                const newMembers = new Set(g.members);
                newMembers.add(selected);
                newMembers.add(secondary);
                return { ...g, members: newMembers };
            }));
        } else {
            const newGroup = {
                id: THREE.MathUtils.generateUUID(),
                name: `Group ${objectState.current.groups.length + 1}`,
                members: new Set([selected, secondary])
            };
            setGroups(prev => [...prev, newGroup]);
        }
        // Outline all members of the group (existing or new)
        const updatedGroup = objectState.current.groups.find(
            g => g.members.has(selected) || g.members.has(secondary)
        );
        if (updatedGroup) updatedGroup.members.forEach(m => addOutline(m, 0xFFB800));
        else { addOutline(selected, 0xFFB800); addOutline(secondary, 0xFFB800); }
        saveState();
    }, [selected, secondary, addOutline, saveState]);

    const lockObjects = useCallback((objs) => {
        if (!objs || objs.length < 2) return;
        const newGroup = {
            id: THREE.MathUtils.generateUUID(),
            name: `Group ${objectState.current.groups.length + 1}`,
            members: new Set(objs)
        };
        setGroups(prev => [...prev, newGroup]);
        objs.forEach(o => addOutline(o, 0xFFB800));
        saveState();
    }, [addOutline, saveState]);

    const unlockAllAction = useCallback(() => {
        // Remove group outlines from every grouped member
        objectState.current.groups.forEach(g => g.members.forEach(m => removeOutline(m)));
        setGroups([]);
        setPreDragState(null);
        if (objectState.current.selected) addOutline(objectState.current.selected, 0xffffff);
        saveState();
    }, [addOutline, removeOutline, saveState]);

    const ungroup = useCallback((groupId) => {
        // Remove outlines from all members of the disbanded group
        const target = objectState.current.groups.find(g => g.id === groupId);
        if (target) target.members.forEach(m => removeOutline(m));
        setGroups(prev => prev.filter(g => g.id !== groupId));
        const sel = objectState.current.selected;
        if (sel) {
            const stillInGroup = objectState.current.groups
                .filter(g => g.id !== groupId)
                .some(g => g.members.has(sel));
            addOutline(sel, stillInGroup ? 0xFFB800 : 0xffffff);
        }
        saveState();
    }, [addOutline, removeOutline, saveState]);

    const duplicateShape = useCallback(() => {
        const src = objectState.current.selected;
        if (!src) return;
        const geo = buildGeo(src.userData.type, src.userData.smoothness);
        const mat = new THREE.MeshPhysicalMaterial({
            color: src.material.color.getHex(),
            roughness: src.material.roughness,
            metalness: src.material.metalness ?? 0,
            opacity: src.material.opacity,
            transparent: src.material.opacity < 1,
        });
        const m = new THREE.Mesh(geo, mat);
        m.castShadow = m.receiveShadow = true;
        m.scale.copy(src.scale);
        m.rotation.copy(src.rotation);
        m.userData = {
            type: src.userData.type,
            smoothness: src.userData.smoothness,
            name: src.userData.name + ' Copy',
        };
        const tx = (src.userData.targetPos || src.position).x + 1.1;
        const ty = (src.userData.targetPos || src.position).y;
        const tz = (src.userData.targetPos || src.position).z + 1.1;
        m.userData.targetPos = new THREE.Vector3(tx, ty, tz);
        m.position.set(tx, ty + 3, tz);
        scene.current.add(m);
        setObjects(prev => [...prev, m]);
        selectObject(m);
        saveState();
    }, [buildGeo, selectObject, saveState]);

    const renameShape = useCallback((obj, name) => {
        if (!obj || !name.trim()) return;
        obj.userData.name = name.trim();
        setObjects(prev => [...prev]); // trigger re-render so outliner + panel update
    }, []);

    const renameGroup = useCallback((groupId, name) => {
        if (!groupId || !name.trim()) return;
        setGroups(prev => prev.map(g => g.id === groupId ? { ...g, name: name.trim() } : g));
    }, []);

    const setCameraView = useCallback((view) => {
        if (!camera.current || !orbitControls.current) return;
        const d = 18;
        switch (view) {
            case 'front': camera.current.position.set(0, 5, d);      break;
            case 'top':   camera.current.position.set(0.001, d, 0.001); break;
            case 'side':  camera.current.position.set(d, 5, 0);      break;
            default:      camera.current.position.set(12, 12, 12);   break; // iso
        }
        orbitControls.current.target.set(0, 0, 0);
        orbitControls.current.update();
    }, []);

    const loadTemplate = useCallback((shapes, name) => {
        // Reset camera first so the whole assembly is visible from a good angle
        setCameraView('iso');

        // Clear existing scene and groups
        objectState.current.objects.forEach(o => { removeOutline(o); scene.current.remove(o); });
        setObjects([]);
        setSelected(null);
        setSecondary(null);
        setGroups([]);
        if (transformControls.current) transformControls.current.detach();

        // Collect mesh refs so we can group them after the last one is added
        const addedMeshes = [];

        // Add shapes one by one — each drops in from above using the existing lerp animation
        shapes.forEach((s, i) => {
            setTimeout(() => {
                const m = createMesh(s.t, s.s, s.c);
                m.material.roughness = s.rgh !== undefined ? s.rgh : 0.15;
                m.material.metalness = s.met !== undefined ? s.met : 0;
                m.material.opacity   = s.opa !== undefined ? s.opa : 1;
                m.material.transparent = (s.opa !== undefined ? s.opa : 1) < 1;
                m.position.set(s.p.x, s.p.y + 5, s.p.z); // start above target
                m.userData.targetPos = new THREE.Vector3(s.p.x, s.p.y, s.p.z);
                m.rotation.copy(s.r);
                m.scale.copy(s.sc);
                m.userData.name = s.n;
                scene.current.add(m);
                addedMeshes.push(m);
                setObjects(prev => [...prev, m]);

                // After the last shape lands, register all as a named group
                if (i === shapes.length - 1 && addedMeshes.length >= 2) {
                    setGroups([{
                        id: THREE.MathUtils.generateUUID(),
                        name: name || 'Template',
                        members: new Set(addedMeshes),
                    }]);
                    addedMeshes.forEach(o => addOutline(o, 0xFFB800));
                }
            }, i * 160);
        });
    }, [createMesh, removeOutline, setCameraView, addOutline]);

    const addTemplate = useCallback((shapes, name) => {
        // Find the rightmost world-space X edge of whatever is already in the scene
        let existingRightEdge = 0;
        objectState.current.objects.forEach(obj => {
            const tx = (obj.userData.targetPos || obj.position).x;
            obj.geometry.computeBoundingBox();
            const halfW = (obj.geometry.boundingBox.max.x - obj.geometry.boundingBox.min.x) / 2 * obj.scale.x;
            existingRightEdge = Math.max(existingRightEdge, tx + halfW);
        });

        // Find the leftmost X edge of the incoming template shapes
        let templateLeftEdge = 0;
        shapes.forEach(s => {
            templateLeftEdge = Math.min(templateLeftEdge, s.p.x - (s.sc.x * 0.5));
        });

        // Shift the template so its left edge starts 2.5 units past the existing right edge
        const GAP = 2.5;
        const xOffset = objectState.current.objects.length > 0
            ? existingRightEdge + GAP - templateLeftEdge
            : 0;

        // Collect mesh refs so we can group them after the last one is added
        const addedMeshes = [];

        // Add shapes one by one with the same stagger drop-in — camera stays where it is
        shapes.forEach((s, i) => {
            setTimeout(() => {
                const m = createMesh(s.t, s.s, s.c);
                m.material.roughness = s.rgh !== undefined ? s.rgh : 0.15;
                m.material.metalness = s.met !== undefined ? s.met : 0;
                m.material.opacity   = s.opa !== undefined ? s.opa : 1;
                m.material.transparent = (s.opa !== undefined ? s.opa : 1) < 1;
                const tx = s.p.x + xOffset;
                m.position.set(tx, s.p.y + 5, s.p.z);
                m.userData.targetPos = new THREE.Vector3(tx, s.p.y, s.p.z);
                m.rotation.copy(s.r);
                m.scale.copy(s.sc);
                m.userData.name = s.n;
                scene.current.add(m);
                addedMeshes.push(m);
                setObjects(prev => [...prev, m]);

                // After the last shape lands, register all as a named group
                if (i === shapes.length - 1 && addedMeshes.length >= 2) {
                    const newGroup = {
                        id: THREE.MathUtils.generateUUID(),
                        name: name || 'Template',
                        members: new Set(addedMeshes),
                    };
                    setGroups(prev => [...prev, newGroup]);
                    addedMeshes.forEach(o => addOutline(o, 0xFFB800));
                }
            }, i * 160);
        });
    }, [createMesh, addOutline]);

    const updateShapeRadius = useCallback((radius) => {
        const obj = objectState.current.selected;
        if (!obj || obj.userData.type !== 'box') return;
        obj.userData.smoothness = radius;
        const newGeo = buildGeo('box', radius);
        obj.geometry.dispose();
        obj.geometry = newGeo;
        removeOutline(obj);
        const isInGroup = objectState.current.groups.some(g => g.members.has(obj));
        addOutline(obj, isInGroup ? 0xFFB800 : 0xffffff);
    }, [buildGeo, removeOutline, addOutline]);

    const addShape = useCallback((type) => {
        const mesh = createMesh(type);
        const y = floorY(mesh);

        // Find the first grid slot not occupied by any existing shape.
        // Slots are ordered closest-to-center first, so shapes always spread
        // outward and never overlap or pile up in the same direction.
        const occupied = objectState.current.objects.map(o => o.userData.targetPos || o.position);
        const slot = GRID_SLOTS.find(([sx, sz]) =>
            !occupied.some(tp => Math.abs(tp.x - sx) < STEP * 0.5 && Math.abs(tp.z - sz) < STEP * 0.5)
        ) ?? [GRID_SLOTS.length * STEP, 0]; // safety fallback beyond the grid

        // Drop-in animation: start above the slot, lerp down
        mesh.position.set(slot[0], y + 3, slot[1]);
        mesh.userData.targetPos = new THREE.Vector3(slot[0], y, slot[1]);
        scene.current.add(mesh);
        setObjects(prev => [...prev, mesh]);
        selectObject(mesh);
        saveState();
    }, [createMesh, floorY, selectObject, saveState]);

    const setTransformMode = useCallback((mode) => {
        if (transformControls.current) {
            transformControls.current.setMode(mode);
            setCurrentMode(mode);
            // Update axis focus based on mode - this logic needs to be in UI component
        }
    }, []);

    const alignObjects = useCallback((axis, align) => {
        if (!selected || !secondary) return;

        const selTarget = selected.userData.targetPos || selected.position;
        const movTarget = secondary.userData.targetPos || secondary.position;

        const savedSel = selected.position.clone();
        const savedMov = secondary.position.clone();
        selected.position.copy(selTarget);
        secondary.position.copy(movTarget);
        selected.updateMatrixWorld(true);
        secondary.updateMatrixWorld(true);

        const baseBox = getObjectBox(selected);
        const movingBox = getObjectBox(secondary);

        selected.position.copy(savedSel);
        secondary.position.copy(savedMov);
        selected.updateMatrixWorld(true);
        secondary.updateMatrixWorld(true);

        let delta;
        if (align === 'flush-min') {
            delta = baseBox.min[axis] - movingBox.max[axis];
        } else if (align === 'center') {
            const baseCenter = (baseBox.min[axis] + baseBox.max[axis]) / 2;
            const movingCenter = (movingBox.min[axis] + movingBox.max[axis]) / 2;
            delta = baseCenter - movingCenter;
        } else {
            delta = baseBox.max[axis] - movingBox.min[axis];
        }

        const newPos = movTarget.clone();
        newPos[axis] += delta;
        secondary.userData.targetPos = newPos;
        secondary.position.copy(newPos);
        saveState();
    }, [selected, secondary, saveState]);

    // Propagate transform in real-time to every other locked member.
    const handleObjectChange = useCallback(() => {
        if (!selected || !preDragState) return;
        const activeGroup = objectState.current.groups.find(g => g.members.has(selected));
        if (!activeGroup) return;
        if (currentMode === 'translate') {
            const dx = selected.position.x - preDragState.selPos.x;
            const dy = selected.position.y - preDragState.selPos.y;
            const dz = selected.position.z - preDragState.selPos.z;
            activeGroup.members.forEach(obj => {
                if (obj !== selected) {
                    obj.position.set(preDragState.members[obj.uuid].pos.x + dx, preDragState.members[obj.uuid].pos.y + dy, preDragState.members[obj.uuid].pos.z + dz);
                    obj.userData.targetPos = obj.position.clone();
                }
            });
        } else if (currentMode === 'scale') {
            const rx = selected.scale.x / preDragState.selScale.x;
            const ry = selected.scale.y / preDragState.selScale.y;
            const rz = selected.scale.z / preDragState.selScale.z;
            activeGroup.members.forEach(obj => {
                if (obj !== selected) {
                    obj.scale.set(
                        preDragState.members[obj.uuid].scale.x * rx,
                        preDragState.members[obj.uuid].scale.y * ry,
                        preDragState.members[obj.uuid].scale.z * rz
                    );
                }
            });
        } else if (currentMode === 'rotate') {
            const qCurrent = new THREE.Quaternion().setFromEuler(selected.rotation);
            const qInitial = new THREE.Quaternion().setFromEuler(preDragState.selRot);
            const qDelta = qCurrent.clone().multiply(qInitial.clone().invert());
            const pivot = preDragState.selPos;
            activeGroup.members.forEach(obj => {
                if (obj !== selected) {
                    const relVec = preDragState.members[obj.uuid].pos.clone().sub(pivot);
                    relVec.applyQuaternion(qDelta);
                    obj.position.copy(pivot).add(relVec);
                    obj.userData.targetPos = obj.position.clone();
                    const memberQ = new THREE.Quaternion().setFromEuler(preDragState.members[obj.uuid].rot);
                    obj.quaternion.copy(qDelta).multiply(memberQ);
                }
            });
        }
    }, [selected, preDragState, currentMode]);

    // Handle mouse down for drag operations (for locked groups)
    const handleMouseDown = useCallback(() => {
        if (!selected) return;
        const activeGroup = objectState.current.groups.find(g => g.members.has(selected));
        if (!activeGroup) return;
        const members = {};
        activeGroup.members.forEach(obj => {
            if (obj !== selected) members[obj.uuid] = {
                obj,
                pos: obj.position.clone(),
                scale: obj.scale.clone(),
                rot: obj.rotation.clone()
            };
        });
        setPreDragState({
            selPos: selected.position.clone(),
            selScale: selected.scale.clone(),
            selRot: selected.rotation.clone(),
            members
        });
    }, [selected, setPreDragState]);

    // Handle mouse up after drag operations
    const handleMouseUp = useCallback(() => {
        if (preDragState) {
            saveState();
            setPreDragState(null);
        }
    }, [preDragState, saveState]);

    // Attach listeners to transformControls
    useEffect(() => {
        if (transformControls.current) {
            transformControls.current.addEventListener('objectChange', handleObjectChange);
            transformControls.current.addEventListener('mouseDown', handleMouseDown);
            transformControls.current.addEventListener('mouseUp', handleMouseUp);
        }
        return () => {
            if (transformControls.current) {
                transformControls.current.removeEventListener('objectChange', handleObjectChange);
                transformControls.current.removeEventListener('mouseDown', handleMouseDown);
                transformControls.current.removeEventListener('mouseUp', handleMouseUp);
            }
        };
    }, [handleObjectChange, handleMouseDown, handleMouseUp]);

    // Pointer down listener for selecting objects and placing shapes
    const handlePointerDown = useCallback((e) => {
        if (e.target.closest('#ui-left') || e.target.closest('#ui-right') || e.target.closest('#transform-bar')) return;
        // TC's own mouseDown fires first (canvas event) and sets this flag,
        // so we know not to touch selection when the user clicked a gizmo handle.
        if (tcInteracting.current) return;

        const rect = renderer.current.domElement.getBoundingClientRect();
        const pointer = new THREE.Vector2(
            ((e.clientX - rect.left) / rect.width) * 2 - 1,
            -((e.clientY - rect.top) / rect.height) * 2 + 1
        );
        raycaster.current.setFromCamera(pointer, camera.current);

        const hits = raycaster.current.intersectObjects(objectState.current.objects);
        const hit = hits[0]?.object ?? null;
        // Read current selection from the always-up-to-date ref (avoids stale closure)
        const currentSelected  = objectState.current.selected;
        const currentSecondary = objectState.current.secondary;

        if (hit) {
            if (hit === currentSelected) {
                // Clicking the primary again → clear secondary
                clearSecondaryObject();
            } else if (hit === currentSecondary) {
                // Clicking the secondary → promote it to primary
                selectObject(hit);
            } else if (currentSelected !== null) {
                // Something else selected → make this the secondary snap target
                setSecondaryObject(hit);
            } else {
                // Nothing selected → select this as primary
                selectObject(hit);
            }
        } else {
            deselectObject();
        }
    }, [selectObject, deselectObject, setSecondaryObject, clearSecondaryObject]);

    useEffect(() => {
        window.addEventListener('pointerdown', handlePointerDown);
        return () => window.removeEventListener('pointerdown', handlePointerDown);
    }, [handlePointerDown]);

    // --- Synchronizing state with objectState ref ---
    useEffect(() => {
        objectState.current.objects = objects;
    }, [objects]);
    useEffect(() => {
        objectState.current.selected = selected;
    }, [selected]);
    useEffect(() => {
        objectState.current.secondary = secondary;
    }, [secondary]);
    useEffect(() => {
        objectState.current.currentMode = currentMode;
    }, [currentMode]);
    useEffect(() => {
        objectState.current.groups = groups;
    }, [groups]);
    useEffect(() => {
        objectState.current.placementMode = placementMode;
    }, [placementMode]);
    useEffect(() => {
        objectState.current.preDragState = preDragState;
    }, [preDragState]);
    // undoStack is less critical for direct ref access in callbacks, but could be synced if needed

    // Expose state and functions
    return {
        objects,
        selected,
        secondary,
        hovered,
        currentMode,
        groups,
        placementMode,
        undoStack,
        preDragState,
        minimapCanvasRef,
        addShape,
        deleteShape: deleteSelectedObject,
        setTransformMode,
        selectObject,
        deselectObject,
        setSecondaryObject,
        clearSecondaryObject,
        groundShape,
        lockGroup: lockGroupAction,
        lockObjects,
        unlockAll: unlockAllAction,
        ungroup,
        saveState,
        restoreState,
        updateMinimap, // Expose for UI to use
        updateOutliner: () => {}, // Outliner handled by UI component mapping
        setPlacementMode,
        alignObjects,
        duplicateShape,
        setCameraView,
        updateShapeRadius,
        renameShape,
        renameGroup,
        loadTemplate,
        addTemplate,
    };
};

export default useThreeDScene;