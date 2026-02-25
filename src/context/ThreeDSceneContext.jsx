import React, { createContext, useContext, useRef } from 'react';
import useThreeDScene from '../hooks/useThreeDScene';

const ThreeDSceneContext = createContext(null);

export const ThreeDSceneProvider = ({ children }) => {
    const canvasRef = useRef(null);
    const scene = useThreeDScene(canvasRef);

    return (
        <ThreeDSceneContext.Provider value={{
            objects: scene.objects,
            selected: scene.selected,
            secondary: scene.secondary,
            hovered: scene.hovered,
            currentMode: scene.currentMode,
            groups: scene.groups,
            ungroup: scene.ungroup,
            placementMode: scene.placementMode,
            undoStack: scene.undoStack,
            preDragState: scene.preDragState,
            minimapCanvasRef: scene.minimapCanvasRef,
            addShape: scene.addShape,
            deleteShape: scene.deleteShape,
            setTransformMode: scene.setTransformMode,
            selectObject: scene.selectObject,
            deselectObject: scene.deselectObject,
            setSecondaryObject: scene.setSecondaryObject,
            clearSecondaryObject: scene.clearSecondaryObject,
            groundShape: scene.groundShape,
            lockGroup: scene.lockGroup,
            lockObjects: scene.lockObjects,
            unlockAll: scene.unlockAll,
            saveState: scene.saveState,
            restoreState: scene.restoreState,
            updateMinimap: scene.updateMinimap,
            updateOutliner: scene.updateOutliner,
            setPlacementMode: scene.setPlacementMode,
            alignObjects: scene.alignObjects,
            duplicateShape: scene.duplicateShape,
            setCameraView: scene.setCameraView,
            updateShapeRadius: scene.updateShapeRadius,
            renameShape: scene.renameShape,
            renameGroup: scene.renameGroup,
            loadTemplate: scene.loadTemplate,
            addTemplate: scene.addTemplate,
            canvasRef: canvasRef // The ref created in this provider
        }}>
            {children}
        </ThreeDSceneContext.Provider>
    );
};

export const useThreeDSceneContext = () => {
    const context = useContext(ThreeDSceneContext);
    if (!context) {
        throw new Error('useThreeDSceneContext must be used within a ThreeDSceneProvider');
    }
    return context;
};