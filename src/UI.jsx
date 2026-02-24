import React, { useEffect, useState } from 'react';
import { useThreeDSceneContext } from './context/ThreeDSceneContext';

const SHAPES = ['box', 'sphere', 'cylinder', 'cone', 'torus', 'capsule'];
const typeIcons = { box: '▪', sphere: '●', cylinder: '⬭', cone: '▲', torus: '◎', capsule: '▬' };

// ── Mango logo mark ──────────────────────────────────────────────────────────
const MangoMark = () => (
  <svg width="20" height="24" viewBox="0 0 20 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mg-u" x1="0.8" y1="0.05" x2="0.2" y2="0.95">
        <stop offset="0%"   stopColor="#B71C1C"/>
        <stop offset="35%"  stopColor="#E64A19"/>
        <stop offset="70%"  stopColor="#FF8F00"/>
        <stop offset="100%" stopColor="#FFD600"/>
      </linearGradient>
    </defs>
    <path d="M10 4C13.5 4 16 7.5 16 12C16 17 13.5 20 10 20.5C6.5 20 4 17 4 12C4 7.5 6.5 4 10 4Z" fill="url(#mg-u)"/>
    <ellipse cx="8.5" cy="9.5" rx="1.8" ry="2.5" fill="white" opacity="0.18"/>
    <path d="M10 4C10 2.5 11 1.8 12.5 2.2" stroke="#2D7A3A" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
    <path d="M10 4C9.2 2 6.5 0.5 4.5 1.5C5.5 3.5 7.5 3.8 10 4Z" fill="#2D7A3A"/>
  </svg>
);

// ── Shape icons ───────────────────────────────────────────────────────────────
const ShapeSVG = ({ type }) => {
  switch (type) {
    case 'box': return (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 9.5L14 5.5L23 9.5V18.5L14 22.5L5 18.5V9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 5.5V22.5M5 9.5L14 13.5L23 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    );
    case 'sphere': return (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="14" cy="14" rx="4.5" ry="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 14H23" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    );
    case 'cylinder': return (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="14" cy="8.5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="14" cy="19.5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 8.5V19.5M22 8.5V19.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    );
    case 'cone': return (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 5L22 21H6L14 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <ellipse cx="14" cy="21" rx="8" ry="2.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    );
    case 'torus': return (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="14" cy="14" rx="9" ry="5.5" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="14" cy="14" rx="4" ry="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    );
    case 'capsule': return (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 10.5C9 7.74 11.24 5.5 14 5.5C16.76 5.5 19 7.74 19 10.5V17.5C19 20.26 16.76 22.5 14 22.5C11.24 22.5 9 20.26 9 17.5V10.5Z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    );
    default: return null;
  }
};

// ── Transform mode icons ──────────────────────────────────────────────────────
const MoveIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 3L8 5.5M10 3L12 5.5M10 17L8 14.5M10 17L12 14.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 10L5.5 8M3 10L5.5 12M17 10L14.5 8M17 10L14.5 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const RotateIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 10A5.5 5.5 0 1 1 10 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 2v5l3.5-2.5L10 2Z" fill="currentColor"/>
  </svg>
);
const ScaleIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 13v4h4M17 7V3h-4M3 17l5.5-5.5M17 3l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── Action icons ──────────────────────────────────────────────────────────────
const TrashIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4h10M6 4V3h4v1M5 4v8a1 1 0 001 1h4a1 1 0 001-1V4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const DuplicateIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M3 11V3h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const LinkIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 5H5a3 3 0 000 6h2M9 11h2a3 3 0 000-6H9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M6 8h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const GroundIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2v9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M5 8.5l3 3.5 3-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 14h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const UnlockIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="8" width="12" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M5 8V6a3 3 0 016 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 1.5"/>
  </svg>
);
const LockPadlockIcon = () => (
  <svg viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y="6" width="9" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M4 6V4a2 2 0 014 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// ── Template thumbnails ───────────────────────────────────────────────────────
const ChristmasTreeThumb = () => (
  <svg viewBox="0 0 60 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="27" y="60" width="6" height="8" rx="1" fill="#5D4037"/>
    <polygon points="30,8 48,38 12,38" fill="#1B5E20"/>
    <polygon points="30,22 46,48 14,48" fill="#2E7D32"/>
    <polygon points="30,36 44,60 16,60" fill="#388E3C"/>
    <circle cx="30" cy="6" r="4.5" fill="#FFD700"/>
  </svg>
);
const SnowmanThumb = () => (
  <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="64" r="13" fill="#ECEFF1" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
    <circle cx="30" cy="41" r="10" fill="#ECEFF1" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
    <circle cx="30" cy="24" r="8" fill="#ECEFF1" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
    <rect x="20" y="14" width="20" height="2.5" rx="1.2" fill="#212121"/>
    <rect x="22" y="5" width="16" height="11" rx="1.5" fill="#212121"/>
  </svg>
);
const ArchThumb = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="14" width="12" height="42" rx="2" fill="#9E9E9E"/>
    <rect x="41" y="14" width="12" height="42" rx="2" fill="#9E9E9E"/>
    <rect x="5" y="8" width="50" height="10" rx="2" fill="#BDBDBD"/>
  </svg>
);
const SaturnThumb = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="30" cy="30" rx="27" ry="7" stroke="#B0BEC5" strokeWidth="3.5" fill="none" transform="rotate(-18 30 30)" opacity="0.8"/>
    <circle cx="30" cy="30" r="13" fill="#5C6BC0"/>
    <ellipse cx="30" cy="30" rx="27" ry="7" stroke="#B0BEC5" strokeWidth="3.5" fill="none" transform="rotate(-18 30 30)" opacity="0.4" clipPath="url(#sp)"/>
    <circle cx="50" cy="18" r="3.5" fill="#78909C"/>
  </svg>
);

const TEMPLATES = [
  {
    id: 'christmas-tree', name: 'Christmas Tree', Thumb: ChristmasTreeThumb,
    shapes: [
      {t:'cylinder',s:0,c:0x5D4037,n:'Trunk',        p:{x:0,y:0.4, z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:0.3, y:0.8, z:0.3}, rgh:0.8,met:0,  opa:1},
      {t:'cone',    s:0,c:0x1B5E20,n:'Base Layer',   p:{x:0,y:1.4, z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:2.4, y:2.0, z:2.4}, rgh:0.7,met:0,  opa:1},
      {t:'cone',    s:0,c:0x2E7D32,n:'Mid Layer',    p:{x:0,y:2.6, z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:1.8, y:1.6, z:1.8}, rgh:0.7,met:0,  opa:1},
      {t:'cone',    s:0,c:0x388E3C,n:'Top Layer',    p:{x:0,y:3.6, z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:1.2, y:1.4, z:1.2}, rgh:0.7,met:0,  opa:1},
      {t:'sphere',  s:0,c:0xFFD700,n:'Star',         p:{x:0,y:4.55,z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:0.32,y:0.32,z:0.32},rgh:0.05,met:0.9,opa:1},
    ]
  },
  {
    id: 'snowman', name: 'Snowman', Thumb: SnowmanThumb,
    shapes: [
      {t:'sphere',  s:0,c:0xECEFF1,n:'Body',     p:{x:0,y:0.85,z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:1.7, y:1.7, z:1.7}, rgh:0.9,met:0,  opa:1},
      {t:'sphere',  s:0,c:0xECEFF1,n:'Torso',    p:{x:0,y:2.2, z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:1.25,y:1.25,z:1.25},rgh:0.9,met:0,  opa:1},
      {t:'sphere',  s:0,c:0xECEFF1,n:'Head',     p:{x:0,y:3.2, z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:0.9, y:0.9, z:0.9}, rgh:0.9,met:0,  opa:1},
      {t:'cylinder',s:0,c:0x212121,n:'Hat Brim', p:{x:0,y:3.72,z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:0.92,y:0.09,z:0.92},rgh:0.7,met:0,  opa:1},
      {t:'cylinder',s:0,c:0x212121,n:'Hat Top',  p:{x:0,y:4.24,z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:0.55,y:0.62,z:0.55},rgh:0.7,met:0,  opa:1},
    ]
  },
  {
    id: 'arch', name: 'Arch', Thumb: ArchThumb,
    shapes: [
      {t:'box',s:0.08,c:0x9E9E9E,n:'Left Pillar', p:{x:-1.8,y:1.5,z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:0.8,y:3.0,z:0.8},rgh:0.8,met:0.1,opa:1},
      {t:'box',s:0.08,c:0x9E9E9E,n:'Right Pillar',p:{x:1.8, y:1.5,z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:0.8,y:3.0,z:0.8},rgh:0.8,met:0.1,opa:1},
      {t:'box',s:0.08,c:0xBDBDBD,n:'Lintel',      p:{x:0,   y:3.35,z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:4.4,y:0.7,z:0.8},rgh:0.75,met:0.1,opa:1},
    ]
  },
  {
    id: 'saturn', name: 'Saturn', Thumb: SaturnThumb,
    shapes: [
      {t:'sphere',s:0,c:0x5C6BC0,n:'Planet',p:{x:0,   y:2.0,z:0},r:{_x:0,  _y:0,  _z:0,_order:'XYZ'},sc:{x:2.0,y:2.0,z:2.0},rgh:0.4,met:0.2,opa:1},
      {t:'torus', s:0,c:0xB0BEC5,n:'Rings', p:{x:0,   y:2.0,z:0},r:{_x:1.1,_y:0.3,_z:0,_order:'XYZ'},sc:{x:3.8,y:3.8,z:0.18},rgh:0.6,met:0.3,opa:0.82},
      {t:'sphere',s:0,c:0x78909C,n:'Moon',  p:{x:4.2, y:2.0,z:0},r:{_x:0,  _y:0,  _z:0,_order:'XYZ'},sc:{x:0.4,y:0.4,z:0.4}, rgh:0.7,met:0.1,opa:1},
    ]
  },
];

// ── Camera view icons ─────────────────────────────────────────────────────────
const FrontViewIcon = () => (
  <svg viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="2" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M10 2v12M3 8h14" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 1.5" opacity="0.4"/>
  </svg>
);
const TopViewIcon = () => (
  <svg viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="10" cy="8" rx="7" ry="6" stroke="currentColor" strokeWidth="1.3"/>
    <ellipse cx="10" cy="8" rx="3" ry="2.5" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
    <path d="M3 8h14M10 2v12" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 1.5" opacity="0.35"/>
  </svg>
);
const SideViewIcon = () => (
  <svg viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="2" width="8" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M6 8h8" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 1.5" opacity="0.4"/>
  </svg>
);
const IsoViewIcon = () => (
  <svg viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2L17 5.5V10.5L10 14L3 10.5V5.5L10 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    <path d="M10 2v12M3 5.5L10 9L17 5.5" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 1.5" opacity="0.4"/>
  </svg>
);

// ── Alignment icons ───────────────────────────────────────────────────────────
const AlignLeftSVG = () => (
  <svg viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="2" y="2" width="11" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
    <line x1="1" y1="0" x2="1" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const AlignCenterHSVG = () => (
  <svg viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="4.5" y="2" width="13" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
    <line x1="11" y1="0" x2="11" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const AlignRightSVG = () => (
  <svg viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="9" y="2" width="11" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
    <line x1="21" y1="0" x2="21" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const AlignBottomSVG = () => (
  <svg viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="10" y="1" width="10" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
    <line x1="0" y1="13.5" x2="22" y2="13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const AlignMiddleSVG = () => (
  <svg viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="10" y="2" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
    <line x1="0" y1="7" x2="22" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const AlignTopSVG = () => (
  <svg viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="1" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="10" y="1" width="10" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
    <line x1="0" y1="0.5" x2="22" y2="0.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const AlignFrontSVG = () => (
  <svg viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="7" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="10" y="3" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
    <line x1="0" y1="13.5" x2="22" y2="13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2"/>
  </svg>
);
const AlignCenterDSVG = () => (
  <svg viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="10" y="2" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
    <line x1="0" y1="7" x2="22" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2"/>
  </svg>
);
const AlignBackSVG = () => (
  <svg viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="10" y="1" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
    <line x1="0" y1="0.5" x2="22" y2="0.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2"/>
  </svg>
);

const TRANSFORM_MODES = [
  { mode: 'translate', label: 'Move',   Icon: MoveIcon,   key: 'G' },
  { mode: 'rotate',   label: 'Rotate',  Icon: RotateIcon, key: 'R' },
  { mode: 'scale',    label: 'Scale',   Icon: ScaleIcon,  key: 'S' },
];

const CAMERA_VIEWS = [
  { view: 'front', label: 'Front', Icon: FrontViewIcon },
  { view: 'top',   label: 'Top',   Icon: TopViewIcon },
  { view: 'side',  label: 'Side',  Icon: SideViewIcon },
  { view: 'iso',   label: 'Iso',   Icon: IsoViewIcon },
];

const UI = () => {
  const {
    objects,
    selected,
    secondary,
    lockedGroup,
    minimapCanvasRef,
    addShape,
    deleteShape,
    duplicateShape,
    setTransformMode,
    selectObject,
    deselectObject,
    setSecondaryObject,
    groundShape,
    lockGroup,
    unlockAll,
    restoreState,
    updateMinimap,
    currentMode,
    undoStack,
    alignObjects,
    setCameraView,
    updateShapeRadius,
  } = useThreeDSceneContext();

  const [showTemplates, setShowTemplates] = useState(false);
  const [color, setColor] = useState('#007AFF');
  const [roughness, setRoughness] = useState(0.15);
  const [metalness, setMetalness] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [cornerRadius, setCornerRadius] = useState(0);

  useEffect(() => {
    if (selected) {
      setColor('#' + selected.material.color.getHexString());
      setRoughness(selected.material.roughness ?? 0.15);
      setMetalness(selected.material.metalness ?? 0);
      setOpacity(selected.material.opacity ?? 1);
      setCornerRadius(selected.userData.smoothness ?? 0);
    }
  }, [selected]);

  useEffect(() => {
    updateMinimap();
  }, [objects, selected, secondary, updateMinimap]);

  const handleColorChange = (e) => {
    setColor(e.target.value);
    if (selected) selected.material.color.set(e.target.value);
  };
  const handleRoughnessChange = (e) => {
    const val = parseFloat(e.target.value);
    setRoughness(val);
    if (selected) selected.material.roughness = val;
  };
  const handleMetalnessChange = (e) => {
    const val = parseFloat(e.target.value);
    setMetalness(val);
    if (selected) selected.material.metalness = val;
  };
  const handleOpacityChange = (e) => {
    const val = parseFloat(e.target.value);
    setOpacity(val);
    if (selected) {
      selected.material.opacity = val;
      selected.material.transparent = val < 0.999;
    }
  };
  const handleRadiusChange = (e) => {
    const val = parseFloat(e.target.value);
    setCornerRadius(val);
    updateShapeRadius(val);
  };

  const handleUndo = () => {
    if (undoStack.length > 1) restoreState(undoStack[undoStack.length - 2]);
  };
  const handleClearAll = () => restoreState('[]');
  const handleExport = () => {
    const canvas = document.querySelector('#canvas-container canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'mango-render.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const handleOutlinerClick = (obj) => {
    if (obj === selected) deselectObject();
    else if (selected !== null) setSecondaryObject(obj);
    else selectObject(obj);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT') return;
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') { e.preventDefault(); handleUndo(); return; }
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') { e.preventDefault(); duplicateShape(); return; }
      switch (e.key.toLowerCase()) {
        case 'g': setTransformMode('translate'); break;
        case 'r': if (!e.ctrlKey && !e.metaKey) setTransformMode('rotate'); break;
        case 's': if (!e.ctrlKey && !e.metaKey) setTransformMode('scale'); break;
        case 'delete': deleteShape(); break;
        default: break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setTransformMode, deleteShape, duplicateShape, handleUndo]);

  const hintText = selected && secondary
    ? 'Align or lock · Drag gizmo to transform'
    : selected
    ? 'Ctrl+D Duplicate · Click another shape to align'
    : 'Drag to orbit · Scroll to zoom · Click a shape to select';

  return (
    <>
      {/* ── Left Panel ───────────────────────────────── */}
      <div id="ui-left" className="panel">
        <div className="panel-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <MangoMark />
            <div>
              <div className="app-name">Mango</div>
              <div className="app-tagline">3D Shape Explorer</div>
            </div>
          </div>
        </div>

        <div className="panel-body">

          {/* Always visible: shape grid */}
          <section>
            <div className="section-label">Add Shape</div>
            <div className="btn-grid col-3">
              {SHAPES.map(type => (
                <button key={type} className="shape-btn" onClick={() => addShape(type)} title={`Add ${type}`}>
                  <ShapeSVG type={type} />
                  <span style={{ fontSize: '9px', fontWeight: 700, textTransform: 'capitalize', letterSpacing: '0.04em' }}>
                    {type}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* Empty state: show template gallery */}
          {objects.length === 0 && (
            <>
              <div className="panel-divider" />
              <section>
                <div className="section-label">Start from a Template</div>
                <div className="template-grid">
                  {TEMPLATES.map(tpl => (
                    <button
                      key={tpl.id}
                      className="template-card"
                      onClick={() => restoreState(JSON.stringify(tpl.shapes))}
                      title={`Load ${tpl.name}`}
                    >
                      <tpl.Thumb />
                      <span className="template-card-name">{tpl.name}</span>
                    </button>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* Single selection: name + material + snap */}
          {selected && !secondary && (
            <>
              <div className="panel-divider" />

              <section>
                <div className="section-header">
                  <div className="section-label" style={{ marginBottom: 0 }}>{selected.userData.name}</div>
                  <div style={{ display: 'flex', gap: 5 }}>
                    <button className="icon-btn" onClick={duplicateShape} title="Duplicate (Ctrl+D)">
                      <DuplicateIcon />
                    </button>
                    <button className="icon-btn danger" onClick={deleteShape} title="Delete">
                      <TrashIcon />
                    </button>
                  </div>
                </div>
              </section>

              <section>
                <div className="material-card">
                  <div className="section-label" style={{ marginBottom: 0 }}>Material</div>
                  <div className="mat-row">
                    <span className="mat-label">Color</span>
                    <div className="color-row">
                      <input type="color" value={color} onChange={handleColorChange} />
                      <span id="hexVal">{color.toUpperCase()}</span>
                    </div>
                  </div>
                  <div className="slider-group">
                    <div className="slider-meta"><span>Roughness</span><span>{roughness.toFixed(2)}</span></div>
                    <input type="range" min="0" max="1" step="0.01" value={roughness} onChange={handleRoughnessChange} />
                  </div>
                  <div className="slider-group">
                    <div className="slider-meta"><span>Metalness</span><span>{metalness.toFixed(2)}</span></div>
                    <input type="range" min="0" max="1" step="0.01" value={metalness} onChange={handleMetalnessChange} />
                  </div>
                  <div className="slider-group">
                    <div className="slider-meta"><span>Opacity</span><span>{opacity.toFixed(2)}</span></div>
                    <input type="range" min="0" max="1" step="0.01" value={opacity} onChange={handleOpacityChange} />
                  </div>
                  {selected.userData.type === 'box' && (
                    <div className="slider-group">
                      <div className="slider-meta"><span>Corner Radius</span><span>{cornerRadius.toFixed(2)}</span></div>
                      <input type="range" min="0" max="0.45" step="0.01" value={cornerRadius} onChange={handleRadiusChange} />
                    </div>
                  )}
                </div>
              </section>

              <button id="btnGround" onClick={groundShape}>
                <GroundIcon /> Snap to Floor
              </button>
            </>
          )}

          {/* Two shapes selected: align & lock */}
          {selected && secondary && (
            <>
              <div className="panel-divider" />

              <section>
                <div id="alignSection">
                  <div className="section-label" style={{ marginBottom: 8 }}>Align</div>

                  <div className="align-chip-row" style={{ marginBottom: 10 }}>
                    <span className="chip-base">{selected.userData.name}</span>
                    <span className="chip-role">base</span>
                    <span className="chip-move">{secondary.userData.name}</span>
                    <span className="chip-role">moves</span>
                  </div>

                  <div className="align-axis">
                    <div className="align-axis-label">Horizontal</div>
                    <div className="align-btn-row">
                      <button className="align-btn" onClick={() => alignObjects('x', 'flush-min')}><AlignLeftSVG /><span style={{ fontSize: '8px', fontWeight: 700 }}>Left</span></button>
                      <button className="align-btn" onClick={() => alignObjects('x', 'center')}><AlignCenterHSVG /><span style={{ fontSize: '8px', fontWeight: 700 }}>Center</span></button>
                      <button className="align-btn" onClick={() => alignObjects('x', 'flush-max')}><AlignRightSVG /><span style={{ fontSize: '8px', fontWeight: 700 }}>Right</span></button>
                    </div>
                  </div>

                  <div className="align-axis" style={{ marginTop: 6 }}>
                    <div className="align-axis-label">Vertical</div>
                    <div className="align-btn-row">
                      <button className="align-btn" onClick={() => alignObjects('y', 'flush-min')}><AlignBottomSVG /><span style={{ fontSize: '8px', fontWeight: 700 }}>Bottom</span></button>
                      <button className="align-btn" onClick={() => alignObjects('y', 'center')}><AlignMiddleSVG /><span style={{ fontSize: '8px', fontWeight: 700 }}>Middle</span></button>
                      <button className="align-btn" onClick={() => alignObjects('y', 'flush-max')}><AlignTopSVG /><span style={{ fontSize: '8px', fontWeight: 700 }}>Top</span></button>
                    </div>
                  </div>

                  <div className="align-axis" style={{ marginTop: 6 }}>
                    <div className="align-axis-label">Depth</div>
                    <div className="align-btn-row">
                      <button className="align-btn" onClick={() => alignObjects('z', 'flush-min')}><AlignFrontSVG /><span style={{ fontSize: '8px', fontWeight: 700 }}>Front</span></button>
                      <button className="align-btn" onClick={() => alignObjects('z', 'center')}><AlignCenterDSVG /><span style={{ fontSize: '8px', fontWeight: 700 }}>Center</span></button>
                      <button className="align-btn" onClick={() => alignObjects('z', 'flush-max')}><AlignBackSVG /><span style={{ fontSize: '8px', fontWeight: 700 }}>Back</span></button>
                    </div>
                  </div>

                  {lockedGroup.size === 0
                    ? <button className="lock-btn" onClick={lockGroup}><LinkIcon /> Lock Together</button>
                    : <button className="unlock-btn" onClick={unlockAll}><UnlockIcon /> Unlock All</button>
                  }

                  <button id="btnGround" onClick={groundShape}>
                    <GroundIcon /> Snap to Floor
                  </button>
                </div>
              </section>
            </>
          )}

        </div>

        <div className="panel-footer">
          {objects.length > 0 && (
            <button className="btn-templates-footer" onClick={() => setShowTemplates(true)}>
              Templates
            </button>
          )}
          <div className="btn-grid col-2">
            <button id="btnUndo" disabled={undoStack.length <= 1} onClick={handleUndo}>Undo</button>
            <button id="btnClear" className="danger" onClick={handleClearAll}>Clear All</button>
          </div>
          <button id="btnExport" className="export-btn" onClick={handleExport}>Save Render</button>
        </div>

        {/* Templates overlay — slides over the panel when scene has objects */}
        {showTemplates && (
          <div className="templates-overlay">
            <div className="templates-overlay-header">
              <div className="section-label" style={{ margin: 0 }}>Templates</div>
              <button
                className="icon-btn"
                onClick={() => setShowTemplates(false)}
                title="Close"
                style={{ fontSize: 18, lineHeight: 1 }}
              >
                ×
              </button>
            </div>
            <div className="templates-overlay-body">
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 12, lineHeight: 1.5 }}>
                Loading a template replaces the current scene.
              </div>
              <div className="template-grid">
                {TEMPLATES.map(tpl => (
                  <button
                    key={tpl.id}
                    className="template-card"
                    onClick={() => { restoreState(JSON.stringify(tpl.shapes)); setShowTemplates(false); }}
                    title={`Load ${tpl.name}`}
                  >
                    <tpl.Thumb />
                    <span className="template-card-name">{tpl.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Floating Transform Bar ────────────────────── */}
      {selected && (
        <div id="transform-bar">
          {TRANSFORM_MODES.map(({ mode, label, Icon, key }) => (
            <button
              key={mode}
              className={`tb-btn ${currentMode === mode ? 'active' : ''}`}
              onClick={() => setTransformMode(mode)}
              title={`${label} (${key})`}
            >
              <Icon />
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}

      {/* ── Right Panel ──────────────────────────────── */}
      <div id="ui-right" className="panel">
        <div id="right-header">
          <div className="section-label" style={{ margin: 0 }}>Scene</div>
          <span className="scene-badge">{objects.length}</span>
        </div>
        <div className="minimap-label">Top View</div>
        <div id="minimap-wrap">
          <canvas ref={minimapCanvasRef} id="minimap" width="172" height="110"></canvas>
        </div>

        <div className="cam-section">
          <div className="cam-label">Camera</div>
          <div className="cam-grid">
            {CAMERA_VIEWS.map(({ view, label, Icon }) => (
              <button key={view} className="cam-btn" onClick={() => setCameraView(view)} title={`${label} view`}>
                <Icon />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        <div id="outliner">
          {objects.length === 0 ? (
            <div className="outliner-empty" id="outlinerEmpty">
              No objects yet.<br />Add a shape to begin.
            </div>
          ) : (
            objects.map((obj) => (
              <div
                key={obj.uuid}
                className={`layer ${obj === selected ? 'selected' : ''} ${obj === secondary ? 'secondary' : ''}`}
                onClick={() => handleOutlinerClick(obj)}
              >
                <span className="layer-icon">{typeIcons[obj.userData.type] ?? '◻'}</span>
                <span className="layer-name">{obj.userData.name}</span>
                {lockedGroup.has(obj) && <span className="layer-lock"><LockPadlockIcon /></span>}
              </div>
            ))
          )}
        </div>
      </div>

      {/* ── Hint Bar ─────────────────────────────────── */}
      <div id="hint-bar">{hintText}</div>

      {/* ── Resize Handles ───────────────────────────── */}
      <div id="rh-overlay">
        <div className="rh" id="rh-yp" data-axis="y" data-dir="1"  title="Height — drag up to make taller"></div>
        <div className="rh" id="rh-yn" data-axis="y" data-dir="-1" title="Height — drag down to make shorter"></div>
        <div className="rh" id="rh-xp" data-axis="x" data-dir="1"  title="Width — drag right to make wider"></div>
        <div className="rh" id="rh-xn" data-axis="x" data-dir="-1" title="Width — drag left to make wider"></div>
        <div className="rh" id="rh-zp" data-axis="z" data-dir="1"  title="Depth — drag to change depth"></div>
        <div className="rh" id="rh-zn" data-axis="z" data-dir="-1" title="Depth — drag to change depth"></div>
      </div>
    </>
  );
};

export default UI;
