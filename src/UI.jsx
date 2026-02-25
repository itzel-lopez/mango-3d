import React, { useEffect, useRef, useState } from 'react';
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
const PencilIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 1.5L10.5 3.5L4 10H2V8L8.5 1.5Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
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

const CaretIcon = ({ open }) => (
  <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.15s ease' }}>
    <path d="M3 2L7 5L3 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UngroupIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M7 4h2M4 7v2M9 12h2M12 9v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
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
    {/* Rings behind planet */}
    <ellipse cx="30" cy="30" rx="27" ry="7" stroke="#C4B896" strokeWidth="5.5" fill="none" transform="rotate(-18 30 30)" opacity="0.6"/>
    <ellipse cx="30" cy="30" rx="20" ry="5.2" stroke="#EAD9B0" strokeWidth="5" fill="none" transform="rotate(-18 30 30)" opacity="0.88"/>
    {/* Planet — warm golden, slightly oblate */}
    <ellipse cx="30" cy="30" rx="12" ry="11.5" fill="#C9A96E"/>
    {/* Atmospheric banding */}
    <path d="M19 28 Q30 27 41 28" stroke="#DDB87A" strokeWidth="2" fill="none" opacity="0.55"/>
    <path d="M19.5 33 Q30 34 40.5 33" stroke="#A87840" strokeWidth="1.2" fill="none" opacity="0.45"/>
    {/* Rings in front of planet (lower opacity) */}
    <ellipse cx="30" cy="30" rx="27" ry="7" stroke="#C4B896" strokeWidth="5.5" fill="none" transform="rotate(-18 30 30)" opacity="0.28"/>
    <ellipse cx="30" cy="30" rx="20" ry="5.2" stroke="#EAD9B0" strokeWidth="5" fill="none" transform="rotate(-18 30 30)" opacity="0.4"/>
    {/* Titan — orange, right side */}
    <circle cx="50" cy="27" r="3.2" fill="#CC8840"/>
    {/* Small moon — left side, elevated */}
    <circle cx="9" cy="21" r="2" fill="#8090A0"/>
  </svg>
);
const RobotThumb = () => (
  <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="70" width="17" height="6" rx="2" fill="#455A64"/>
    <rect x="28" y="70" width="17" height="6" rx="2" fill="#455A64"/>
    <rect x="20" y="57" width="8" height="15" rx="2" fill="#546E7A"/>
    <rect x="32" y="57" width="8" height="15" rx="2" fill="#546E7A"/>
    <rect x="15" y="30" width="30" height="27" rx="5" fill="#607D8B"/>
    <rect x="18" y="38" width="24" height="14" rx="3" fill="#37474F" opacity="0.55"/>
    <rect x="5" y="31" width="10" height="7" rx="2.5" fill="#78909C" transform="rotate(12 5 31)"/>
    <rect x="45" y="31" width="10" height="7" rx="2.5" fill="#78909C" transform="rotate(-12 55 31)"/>
    <rect x="18" y="11" width="24" height="21" rx="4" fill="#90A4AE"/>
    <circle cx="25" cy="22" r="3.5" fill="#0D47A1"/>
    <circle cx="35" cy="22" r="3.5" fill="#0D47A1"/>
    <circle cx="25.8" cy="21" r="1" fill="white" opacity="0.5"/>
    <circle cx="35.8" cy="21" r="1" fill="white" opacity="0.5"/>
    <line x1="30" y1="11" x2="30" y2="4" stroke="#78909C" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="30" cy="3.5" r="2.5" fill="#00E5FF"/>
  </svg>
);
const TrophyThumb = () => (
  <svg viewBox="0 0 60 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="63" width="32" height="7" rx="1.5" fill="#B8860B"/>
    <rect x="19" y="57" width="22" height="7" rx="1.2" fill="#C8960C"/>
    <rect x="27" y="43" width="6" height="16" rx="1" fill="#DAA520"/>
    <path d="M18 43 L22 12 L38 12 L42 43 Z" fill="#FFD700"/>
    <path d="M21 20 Q10 27 21 35" stroke="#FFD700" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
    <path d="M39 20 Q50 27 39 35" stroke="#FFD700" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
    <ellipse cx="30" cy="12" rx="10" ry="3" fill="#FFCA28"/>
    <circle cx="30" cy="28" r="4.5" fill="#FFC107" opacity="0.88"/>
    <ellipse cx="25" cy="26" rx="2.5" ry="7" fill="white" opacity="0.18"/>
  </svg>
);
const RocketThumb = () => (
  <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="24" y="68" width="12" height="8" rx="2" fill="#37474F"/>
    <path d="M24 66 L12 76 L24 52 Z" fill="#E53935"/>
    <path d="M36 66 L48 76 L36 52 Z" fill="#E53935"/>
    <rect x="23" y="14" width="14" height="54" rx="6" fill="#ECEFF1"/>
    <rect x="22" y="60" width="16" height="5" rx="1" fill="#E53935"/>
    <rect x="22" y="17" width="16" height="4" rx="1" fill="#E53935"/>
    <path d="M23 14 L30 3 L37 14 Z" fill="#E53935"/>
    <circle cx="30" cy="36" r="5.5" fill="#1565C0"/>
    <circle cx="31.5" cy="34.5" r="1.5" fill="white" opacity="0.35"/>
  </svg>
);
const CrystalThumb = () => (
  <svg viewBox="0 0 60 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="63" width="44" height="8" rx="2" fill="#0D0020"/>
    <path d="M14 63 L10 22 L22 63 Z" fill="#7B1FA2" opacity="0.9"/>
    <path d="M38 63 L47 30 L52 63 Z" fill="#880E4F" opacity="0.85"/>
    <path d="M7 63 L5 52 L13 63 Z" fill="#EA80FC" opacity="0.88"/>
    <path d="M24 63 L30 4 L36 63 Z" fill="#4527A0"/>
    <path d="M34 63 L40 42 L44 63 Z" fill="#F8BBD9" opacity="0.9"/>
    <path d="M29 6 L27 30 L30 23 Z" fill="white" opacity="0.28"/>
  </svg>
);
const BlobThumb = () => (
  <svg viewBox="0 0 60 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="8" cy="40" rx="7" ry="5" fill="#FFCC80" transform="rotate(-20 8 40)"/>
    <ellipse cx="52" cy="40" rx="7" ry="5" fill="#FFCC80" transform="rotate(20 52 40)"/>
    <ellipse cx="30" cy="40" rx="22" ry="20" fill="#FFCC80"/>
    <circle cx="23" cy="35" r="4" fill="#3E2723"/>
    <circle cx="37" cy="35" r="4" fill="#3E2723"/>
    <ellipse cx="16" cy="41" rx="4" ry="2.8" fill="#FF8A80" opacity="0.82"/>
    <ellipse cx="44" cy="41" rx="4" ry="2.8" fill="#FF8A80" opacity="0.82"/>
    <circle cx="24.2" cy="33.5" r="1.2" fill="white"/>
    <circle cx="38.2" cy="33.5" r="1.2" fill="white"/>
    <circle cx="21" cy="46" r="2" fill="#E65100"/>
    <circle cx="30" cy="49" r="2" fill="#E65100"/>
    <circle cx="39" cy="46" r="2" fill="#E65100"/>
  </svg>
);
const GhostThumb = () => (
  <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="30" cy="8" rx="14" ry="4.5" stroke="#FFD700" strokeWidth="2.5" fill="none"/>
    <path d="M14 36 Q14 14 30 14 Q46 14 46 36 L46 62 Q42 54 38 62 Q34 54 30 62 Q26 54 22 62 Q18 54 14 62 Z" fill="#FFF8E1" opacity="0.94"/>
    <ellipse cx="18" cy="63" rx="5.5" ry="4.5" fill="#FFE0B2" opacity="0.75"/>
    <ellipse cx="42" cy="63" rx="5.5" ry="4.5" fill="#FFE0B2" opacity="0.75"/>
    <circle cx="24" cy="36" r="4" fill="#4E342E"/>
    <circle cx="36" cy="36" r="4" fill="#4E342E"/>
    <ellipse cx="18" cy="42" rx="4" ry="2.8" fill="#FFAB91" opacity="0.85"/>
    <ellipse cx="42" cy="42" rx="4" ry="2.8" fill="#FFAB91" opacity="0.85"/>
    <circle cx="25.5" cy="34.5" r="1.3" fill="white"/>
    <circle cx="37.5" cy="34.5" r="1.3" fill="white"/>
    <circle cx="22" cy="46" r="1.8" fill="#4E342E" opacity="0.8"/>
    <circle cx="30" cy="48.5" r="1.8" fill="#4E342E" opacity="0.8"/>
    <circle cx="38" cy="46" r="1.8" fill="#4E342E" opacity="0.8"/>
  </svg>
);

const TEMPLATES = [
  {
    id: 'christmas-tree', name: 'Christmas Tree', Thumb: ChristmasTreeThumb,
    idea: 'Three cones stacked on top of each other, each one smaller than the last — just like a real tree. A cylinder forms the trunk, and a tiny sphere sits at the very top as the star.',
    trick: "Overlap the cone bottoms slightly so there are no visible gaps between layers. The star uses high Metalness to give it that shiny gold look rather than a flat matte finish.",
    shapes: [
      {t:'cylinder',s:0,c:0x5D4037,n:'Trunk',      tag:'rough wood',    p:{x:0,y:0.4, z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:0.3, y:0.8, z:0.3}, rgh:0.8, met:0,   opa:1},
      {t:'cone',    s:0,c:0x1B5E20,n:'Base Layer',  tag:'biggest',       p:{x:0,y:1.4, z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:2.4, y:2.0, z:2.4}, rgh:0.7, met:0,   opa:1},
      {t:'cone',    s:0,c:0x2E7D32,n:'Mid Layer',   tag:'medium',        p:{x:0,y:2.6, z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:1.8, y:1.6, z:1.8}, rgh:0.7, met:0,   opa:1},
      {t:'cone',    s:0,c:0x388E3C,n:'Top Layer',   tag:'smallest',      p:{x:0,y:3.6, z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:1.2, y:1.4, z:1.2}, rgh:0.7, met:0,   opa:1},
      {t:'sphere',  s:0,c:0xFFD700,n:'Star',        tag:'metallic',      p:{x:0,y:4.55,z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:0.32,y:0.32,z:0.32},rgh:0.05,met:0.9, opa:1},
    ]
  },
  {
    id: 'snowman', name: 'Snowman', Thumb: SnowmanThumb,
    idea: 'Three white spheres stacked vertically, each smaller than the one below. Two cylinders build the hat — a wide flat brim and a taller top.',
    trick: "The hat brim is just a regular cylinder with its Y scale set very low to flatten it out. You don't need any special shapes — stacking and sizing spheres is all it takes.",
    shapes: [
      {t:'sphere',  s:0,c:0xECEFF1,n:'Body',      tag:'largest',       p:{x:0,y:0.85,z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:1.7, y:1.7, z:1.7}, rgh:0.9, met:0,   opa:1},
      {t:'sphere',  s:0,c:0xECEFF1,n:'Torso',     tag:'medium',        p:{x:0,y:2.2, z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:1.25,y:1.25,z:1.25},rgh:0.9, met:0,   opa:1},
      {t:'sphere',  s:0,c:0xECEFF1,n:'Head',      tag:'smallest',      p:{x:0,y:3.2, z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:0.9, y:0.9, z:0.9}, rgh:0.9, met:0,   opa:1},
      {t:'cylinder',s:0,c:0x212121,n:'Hat Brim',  tag:'flat in Y',     p:{x:0,y:3.72,z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:0.92,y:0.09,z:0.92},rgh:0.7, met:0,   opa:1},
      {t:'cylinder',s:0,c:0x212121,n:'Hat Top',   tag:'taller',        p:{x:0,y:4.24,z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:0.55,y:0.62,z:0.55},rgh:0.7, met:0,   opa:1},
    ]
  },
  {
    id: 'arch', name: 'Arch', Thumb: ArchThumb,
    idea: 'Just three boxes — two tall thin pillars and one wide flat beam across the top. Simple geometry, strong silhouette. Sometimes the most recognizable shapes are the simplest.',
    trick: 'Adding a small Corner Radius to each box softens the edges and gives it a stone or concrete feel. The lintel is lighter in color to read as a separate material from the pillars.',
    shapes: [
      {t:'box',s:0.08,c:0x9E9E9E,n:'Left Pillar',  tag:'tall · rounded', p:{x:-1.8,y:1.5, z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:0.8,y:3.0,z:0.8},rgh:0.8, met:0.1, opa:1},
      {t:'box',s:0.08,c:0x9E9E9E,n:'Right Pillar', tag:'tall · rounded', p:{x:1.8, y:1.5, z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:0.8,y:3.0,z:0.8},rgh:0.8, met:0.1, opa:1},
      {t:'box',s:0.08,c:0xBDBDBD,n:'Lintel',       tag:'wide · lighter', p:{x:0,   y:3.35,z:0},r:{_x:0,_y:0,_z:0,_order:'XYZ'},sc:{x:4.4,y:0.7,z:0.8},rgh:0.75,met:0.1, opa:1},
    ]
  },
  {
    id: 'saturn', name: 'Saturn', Thumb: SaturnThumb,
    idea: 'Five shapes that are instantly recognisable as the solar system\'s most beautiful planet. A warm golden oblate sphere, two layered ring bands at the same tilt, Saturn\'s iconic orange moon Titan, and a small distant moon on the far side.',
    trick: 'Saturn is actually flattened at the poles — scale Y to 1.85 instead of 2.0 to get that subtle oblateness. Two torus shapes at the exact same position and rotation create a bright compact inner band and a wider faded outer band. Titan\'s distinct orange colour sets it apart from the generic grey moon and anchors the composition.',
    shapes: [
      {t:'sphere',s:0,c:0xC9A96E,n:'Saturn',     tag:'golden · oblate',     p:{x:0,    y:2.0,z:0},r:{_x:0,  _y:0,  _z:0,_order:'XYZ'},sc:{x:2.0, y:1.85,z:2.0},  rgh:0.6, met:0.05,opa:1},
      {t:'torus', s:0,c:0xEAD9B0,n:'Inner Ring', tag:'bright · compact',    p:{x:0,    y:2.0,z:0},r:{_x:1.1,_y:0.3,_z:0,_order:'XYZ'},sc:{x:3.0, y:3.0, z:0.24}, rgh:0.5, met:0.15,opa:0.9},
      {t:'torus', s:0,c:0xC4B896,n:'Outer Ring', tag:'wide · faded',        p:{x:0,    y:2.0,z:0},r:{_x:1.1,_y:0.3,_z:0,_order:'XYZ'},sc:{x:4.2, y:4.2, z:0.15}, rgh:0.55,met:0.1, opa:0.58},
      {t:'sphere',s:0,c:0xCC8840,n:'Titan',       tag:'orange · large moon', p:{x:5.0,  y:2.0,z:0},r:{_x:0,  _y:0,  _z:0,_order:'XYZ'},sc:{x:0.42,y:0.42,z:0.42}, rgh:0.65,met:0,   opa:1},
      {t:'sphere',s:0,c:0x8090A0,n:'Moon',        tag:'small · distant',     p:{x:-4.5, y:2.6,z:0},r:{_x:0,  _y:0,  _z:0,_order:'XYZ'},sc:{x:0.2, y:0.2, z:0.2},  rgh:0.8, met:0,   opa:1},
    ]
  },
  {
    id: 'robot', name: 'Robot', Thumb: RobotThumb,
    idea: 'A twelve-shape robot with grounded feet, glowing blue eyes, and a classic antenna. Arms tilt outward so it reads as welcoming rather than stiff, and wide feet planted past the leg edge give it a stable, weighted stance.',
    trick: 'Feet are just boxes wider and longer than the leg cylinders — shift them forward in Z so they poke out from the front. The antenna ball pairs near-zero roughness with high metalness and a bright cyan tint to read as electronic and glowing without any actual light source.',
    shapes: [
      {t:'cylinder',s:0,   c:0x546E7A,n:'Left Leg',     tag:'mirrored',        p:{x:-0.3,  y:0.55,z:0},    r:{_x:0,_y:0,_z:0,    _order:'XYZ'},sc:{x:0.28,y:1.1, z:0.28},rgh:0.6, met:0.1, opa:1},
      {t:'cylinder',s:0,   c:0x546E7A,n:'Right Leg',    tag:'mirrored',        p:{x:0.3,   y:0.55,z:0},    r:{_x:0,_y:0,_z:0,    _order:'XYZ'},sc:{x:0.28,y:1.1, z:0.28},rgh:0.6, met:0.1, opa:1},
      {t:'box',     s:0.1, c:0x455A64,n:'Left Foot',    tag:'flat · grounded', p:{x:-0.3,  y:0.08,z:0.12}, r:{_x:0,_y:0,_z:0,    _order:'XYZ'},sc:{x:0.42,y:0.16,z:0.58},rgh:0.65,met:0.1, opa:1},
      {t:'box',     s:0.1, c:0x455A64,n:'Right Foot',   tag:'flat · grounded', p:{x:0.3,   y:0.08,z:0.12}, r:{_x:0,_y:0,_z:0,    _order:'XYZ'},sc:{x:0.42,y:0.16,z:0.58},rgh:0.65,met:0.1, opa:1},
      {t:'capsule', s:0,   c:0x607D8B,n:'Body',         tag:'rounded core',    p:{x:0,     y:2.1, z:0},    r:{_x:0,_y:0,_z:0,    _order:'XYZ'},sc:{x:1.1, y:1.5, z:1.1}, rgh:0.55,met:0.1, opa:1},
      {t:'box',     s:0.06,c:0x37474F,n:'Chest Panel',  tag:'dark inset',      p:{x:0,     y:2.1, z:0.56}, r:{_x:0,_y:0,_z:0,    _order:'XYZ'},sc:{x:0.55,y:0.45,z:0.06},rgh:0.4, met:0.3, opa:1},
      {t:'cylinder',s:0,   c:0x78909C,n:'Left Arm',     tag:'tilted in Z',     p:{x:-0.95, y:2.2, z:0},    r:{_x:0,_y:0,_z:0.3,  _order:'XYZ'},sc:{x:0.22,y:0.9, z:0.22},rgh:0.5, met:0.15,opa:1},
      {t:'cylinder',s:0,   c:0x78909C,n:'Right Arm',    tag:'tilted in Z',     p:{x:0.95,  y:2.2, z:0},    r:{_x:0,_y:0,_z:-0.3, _order:'XYZ'},sc:{x:0.22,y:0.9, z:0.22},rgh:0.5, met:0.15,opa:1},
      {t:'box',     s:0.15,c:0x90A4AE,n:'Head',         tag:'soft corners',    p:{x:0,     y:3.5, z:0},    r:{_x:0,_y:0,_z:0,    _order:'XYZ'},sc:{x:0.9, y:0.9, z:0.9}, rgh:0.5, met:0.15,opa:1},
      {t:'sphere',  s:0,   c:0x0D47A1,n:'Left Eye',     tag:'deep blue',       p:{x:-0.24, y:3.52,z:0.46}, r:{_x:0,_y:0,_z:0,    _order:'XYZ'},sc:{x:0.18,y:0.18,z:0.12},rgh:0.05,met:0.7, opa:1},
      {t:'sphere',  s:0,   c:0x0D47A1,n:'Right Eye',    tag:'deep blue',       p:{x:0.24,  y:3.52,z:0.46}, r:{_x:0,_y:0,_z:0,    _order:'XYZ'},sc:{x:0.18,y:0.18,z:0.12},rgh:0.05,met:0.7, opa:1},
      {t:'cylinder',s:0,   c:0x78909C,n:'Antenna',      tag:'thin · tall',     p:{x:0,     y:4.18,z:0},    r:{_x:0,_y:0,_z:0,    _order:'XYZ'},sc:{x:0.06,y:0.46,z:0.06},rgh:0.5, met:0.2, opa:1},
      {t:'sphere',  s:0,   c:0x00E5FF,n:'Antenna Ball', tag:'glowing cyan',    p:{x:0,     y:4.48,z:0},    r:{_x:0,_y:0,_z:0,    _order:'XYZ'},sc:{x:0.14,y:0.14,z:0.14},rgh:0.02,met:0.85,opa:1},
    ]
  },
  {
    id: 'trophy', name: 'Trophy', Thumb: TrophyThumb,
    idea: 'An eight-shape trophy with a stepped two-tier base, a polished cup, vertical torus handles on each side, and a small emblem disc on the front face. The stepped base adds gravitas and the handles make it instantly readable as a sports cup.',
    trick: 'Handles are a torus rotated 90° in Z — this tilts the ring vertical so it stands beside the cup like an ear. Position the center just outside the cup edge (x = ±0.55) so it reads as attached. All gold parts share the same high-met / low-rough material so they read as one unified surface.',
    shapes: [
      {t:'cylinder',s:0,c:0xB8860B,n:'Base',         tag:'wide · grounded',  p:{x:0,    y:0.09, z:0},    r:{_x:0,     _y:0,_z:0,     _order:'XYZ'},sc:{x:1.4, y:0.18,z:1.4}, rgh:0.3, met:0.7,  opa:1},
      {t:'cylinder',s:0,c:0xC8960C,n:'Base Tier',    tag:'stepped · middle', p:{x:0,    y:0.255,z:0},    r:{_x:0,     _y:0,_z:0,     _order:'XYZ'},sc:{x:1.05,y:0.15,z:1.05},rgh:0.28,met:0.72, opa:1},
      {t:'cylinder',s:0,c:0xDAA520,n:'Stem',         tag:'narrow · tall',    p:{x:0,    y:0.98, z:0},    r:{_x:0,     _y:0,_z:0,     _order:'XYZ'},sc:{x:0.22,y:1.6, z:0.22},rgh:0.2, met:0.8,  opa:1},
      {t:'cylinder',s:0,c:0xFFD700,n:'Cup',          tag:'polished gold',    p:{x:0,    y:2.28, z:0},    r:{_x:0,     _y:0,_z:0,     _order:'XYZ'},sc:{x:1.0, y:1.0, z:1.0}, rgh:0.15,met:0.85, opa:1},
      {t:'torus',   s:0,c:0xFFD700,n:'Left Handle',  tag:'ear · vertical',   p:{x:-0.55,y:2.28, z:0},    r:{_x:0,     _y:0,_z:1.5708,_order:'XYZ'},sc:{x:0.5, y:0.22,z:0.5}, rgh:0.15,met:0.85, opa:1},
      {t:'torus',   s:0,c:0xFFD700,n:'Right Handle', tag:'ear · vertical',   p:{x:0.55, y:2.28, z:0},    r:{_x:0,     _y:0,_z:1.5708,_order:'XYZ'},sc:{x:0.5, y:0.22,z:0.5}, rgh:0.15,met:0.85, opa:1},
      {t:'torus',   s:0,c:0xFFD700,n:'Rim',          tag:'flat crown',       p:{x:0,    y:2.78, z:0},    r:{_x:1.5708,_y:0,_z:0,     _order:'XYZ'},sc:{x:1.0, y:1.0, z:0.3}, rgh:0.1, met:0.9,  opa:1},
      {t:'cylinder',s:0,c:0xFFC107,n:'Emblem',       tag:'front disc',       p:{x:0,    y:2.38, z:0.51}, r:{_x:1.5708,_y:0,_z:0,     _order:'XYZ'},sc:{x:0.22,y:0.05,z:0.22},rgh:0.1, met:0.9,  opa:1},
    ]
  },
  {
    id: 'rocket', name: 'Rocket', Thumb: RocketThumb,
    idea: "A refined rocket with eight shapes. Two painted ring stripes break up the white body, a deep-blue porthole adds a focal point, fins are swept slightly back for an aerodynamic look, and a wide engine bell at the base gives it a grounded, powerful stance.",
    trick: "Move fins inward (x=±0.35) so they sit flush against the body rather than floating beside it. The ring stripes are just thin cylinders slightly wider than the body — they wrap it naturally. The window sphere sits just in front of the body's curved Z surface.",
    shapes: [
      {t:'cylinder',s:0,c:0x37474F,n:'Engine Bell', tag:'wide nozzle',   p:{x:0,    y:0.14,z:0},   r:{_x:0,_y:0,   _z:0,_order:'XYZ'},sc:{x:0.72,y:0.28,z:0.72},rgh:0.5, met:0.5, opa:1},
      {t:'cylinder',s:0,c:0xECEFF1,n:'Body',        tag:'main hull',    p:{x:0,    y:2.0, z:0},    r:{_x:0,_y:0,   _z:0,_order:'XYZ'},sc:{x:0.6, y:3.5, z:0.6}, rgh:0.35,met:0.05,opa:1},
      {t:'cylinder',s:0,c:0xE53935,n:'Bottom Ring', tag:'accent stripe', p:{x:0,    y:0.9, z:0},    r:{_x:0,_y:0,   _z:0,_order:'XYZ'},sc:{x:0.62,y:0.2, z:0.62},rgh:0.4, met:0.05,opa:1},
      {t:'box',     s:0,c:0xE53935,n:'Left Fin',    tag:'swept back',   p:{x:-0.35,y:0.82,z:0},    r:{_x:0,_y:0.15,_z:0,_order:'XYZ'},sc:{x:0.08,y:1.0, z:0.65},rgh:0.4, met:0.05,opa:1},
      {t:'box',     s:0,c:0xE53935,n:'Right Fin',   tag:'swept back',   p:{x:0.35, y:0.82,z:0},    r:{_x:0,_y:-0.15,_z:0,_order:'XYZ'},sc:{x:0.08,y:1.0, z:0.65},rgh:0.4, met:0.05,opa:1},
      {t:'sphere',  s:0,c:0x1565C0,n:'Window',      tag:'deep blue',    p:{x:0,    y:2.5, z:0.32},  r:{_x:0,_y:0,   _z:0,_order:'XYZ'},sc:{x:0.25,y:0.25,z:0.12},rgh:0.05,met:0.9, opa:1},
      {t:'cylinder',s:0,c:0xE53935,n:'Top Ring',    tag:'accent stripe', p:{x:0,    y:3.52,z:0},    r:{_x:0,_y:0,   _z:0,_order:'XYZ'},sc:{x:0.62,y:0.14,z:0.62},rgh:0.4, met:0.05,opa:1},
      {t:'cone',    s:0,c:0xE53935,n:'Nose',        tag:'tip',          p:{x:0,    y:4.525,z:0},   r:{_x:0,_y:0,   _z:0,_order:'XYZ'},sc:{x:0.6, y:1.55,z:0.6}, rgh:0.4, met:0.05,opa:1},
    ]
  },
  {
    id: 'crystal', name: 'Crystal', Thumb: CrystalThumb,
    idea: "Seven spikes in an amethyst geode formation. A tall central spike of deep indigo is flanked by secondary crystals in amethyst purple and rose-violet, with a pale rose accent and a tiny bright lavender shard — as if each crystal grew in a slightly different mineral pocket.",
    trick: "Pair very low Roughness (0.03) with high Metalness (0.72–0.82) for the glassy gem effect. No two spikes share the same lean angle — vary Z and X rotation on each one. The tiny bright #EA80FC shard breaks symmetry and makes the cluster feel organic rather than placed.",
    shapes: [
      {t:'box',  s:0.12,c:0x0D0020,n:'Base',        tag:'near-black',     p:{x:0,    y:0.15,z:0},    r:{_x:0,    _y:0,_z:0,    _order:'XYZ'},sc:{x:2.0, y:0.3, z:1.8}, rgh:0.85,met:0.05,opa:1},
      {t:'cone',     s:0,c:0x4527A0,n:'Main Spike',  tag:'deep indigo',    p:{x:0,    y:2.2, z:0},    r:{_x:0,    _y:0,_z:0,    _order:'XYZ'},sc:{x:0.3, y:3.8, z:0.3}, rgh:0.03,met:0.82,opa:1},
      {t:'cone',     s:0,c:0x7B1FA2,n:'Left Spike',  tag:'amethyst',       p:{x:-0.55,y:1.6, z:0},    r:{_x:0,    _y:0,_z:0.32, _order:'XYZ'},sc:{x:0.22,y:2.6, z:0.22},rgh:0.04,met:0.72,opa:1},
      {t:'cone',     s:0,c:0x880E4F,n:'Right Spike', tag:'rose-violet',    p:{x:0.45, y:1.15,z:0.15}, r:{_x:-0.12,_y:0,_z:-0.24,_order:'XYZ'},sc:{x:0.18,y:2.0, z:0.18},rgh:0.04,met:0.70,opa:1},
      {t:'cone',     s:0,c:0x6A1B9A,n:'Back Spike',  tag:'mid-violet',     p:{x:-0.08,y:1.05,z:-0.42},r:{_x:0.28, _y:0,_z:0,    _order:'XYZ'},sc:{x:0.2, y:1.8, z:0.2}, rgh:0.04,met:0.68,opa:1},
      {t:'cone',     s:0,c:0xF8BBD9,n:'Pale Accent', tag:'rose-quartz',    p:{x:0.18, y:0.7, z:0.5},  r:{_x:-0.4, _y:0,_z:0,    _order:'XYZ'},sc:{x:0.14,y:1.2, z:0.14},rgh:0.05,met:0.55,opa:1},
      {t:'cone',     s:0,c:0xEA80FC,n:'Mini Shard',  tag:'bright · accent',p:{x:0.48, y:0.42,z:-0.28},r:{_x:0,    _y:0,_z:-0.18,_order:'XYZ'},sc:{x:0.1, y:0.62,z:0.1}, rgh:0.03,met:0.78,opa:1},
    ]
  },
  {
    id: 'blob', name: "Lil' Blob", Thumb: BlobThumb,
    idea: "A warm, pudgy character made from seven shapes. Rosy cheek spheres squashed flat against the face give it an instantly friendly expression. Arms are positioned higher up to read as a welcoming reach rather than dangling sides.",
    trick: "The cheeks are just spheres scaled very thin in Z (0.18) and placed flush with the face surface — that one detail completely transforms the personality. Warm peach tones feel much more approachable than saturated reds.",
    shapes: [
      {t:'sphere', s:0,c:0xFFCC80,n:'Body',        tag:'warm · round',   p:{x:0,    y:0.82,z:0},   r:{_x:0,_y:0,_z:0,    _order:'XYZ'},sc:{x:1.7, y:1.65,z:1.7}, rgh:0.65,met:0,opa:1},
      {t:'sphere', s:0,c:0x3E2723,n:'Left Eye',    tag:'warm dark',      p:{x:-0.38,y:1.65,z:0.9}, r:{_x:0,_y:0,_z:0,    _order:'XYZ'},sc:{x:0.38,y:0.38,z:0.38},rgh:0.2, met:0,opa:1},
      {t:'sphere', s:0,c:0x3E2723,n:'Right Eye',   tag:'warm dark',      p:{x:0.38, y:1.65,z:0.9}, r:{_x:0,_y:0,_z:0,    _order:'XYZ'},sc:{x:0.38,y:0.38,z:0.38},rgh:0.2, met:0,opa:1},
      {t:'sphere', s:0,c:0xFF8A80,n:'Left Cheek',  tag:'rosy · squashed',p:{x:-0.7, y:1.42,z:0.88},r:{_x:0,_y:0,_z:0,    _order:'XYZ'},sc:{x:0.32,y:0.24,z:0.18},rgh:0.7, met:0,opa:0.9},
      {t:'sphere', s:0,c:0xFF8A80,n:'Right Cheek', tag:'rosy · squashed',p:{x:0.7,  y:1.42,z:0.88},r:{_x:0,_y:0,_z:0,    _order:'XYZ'},sc:{x:0.32,y:0.24,z:0.18},rgh:0.7, met:0,opa:0.9},
      {t:'capsule',s:0,c:0xFFCC80,n:'Left Arm',    tag:'reaching up',    p:{x:-1.18,y:1.0, z:0},   r:{_x:0,_y:0,_z:0.38, _order:'XYZ'},sc:{x:0.22,y:0.62,z:0.22},rgh:0.65,met:0,opa:1},
      {t:'capsule',s:0,c:0xFFCC80,n:'Right Arm',   tag:'reaching up',    p:{x:1.18, y:1.0, z:0},   r:{_x:0,_y:0,_z:-0.38,_order:'XYZ'},sc:{x:0.22,y:0.62,z:0.22},rgh:0.65,met:0,opa:1},
      {t:'sphere', s:0,c:0x3E2723,n:'Smile Left',  tag:'dot · arc',      p:{x:-0.22,y:1.35,z:0.93},r:{_x:0,_y:0,_z:0,    _order:'XYZ'},sc:{x:0.08,y:0.08,z:0.08},rgh:0.2, met:0,opa:1},
      {t:'sphere', s:0,c:0x3E2723,n:'Smile Mid',   tag:'dot · arc',      p:{x:0,    y:1.28,z:0.94},r:{_x:0,_y:0,_z:0,    _order:'XYZ'},sc:{x:0.08,y:0.08,z:0.08},rgh:0.2, met:0,opa:1},
      {t:'sphere', s:0,c:0x3E2723,n:'Smile Right', tag:'dot · arc',      p:{x:0.22, y:1.35,z:0.93},r:{_x:0,_y:0,_z:0,    _order:'XYZ'},sc:{x:0.08,y:0.08,z:0.08},rgh:0.2, met:0,opa:1},
    ]
  },
  {
    id: 'ghost', name: 'Ghost', Thumb: GhostThumb,
    idea: "A cozy, warm-toned ghost floating in place. Swapping the cold blue-white for a cream body, adding rosy cheeks, and warming the wisp tails turns a spooky shape into an inviting character. The golden halo seals the friendly vibe.",
    trick: "Color temperature is character — cold blue-white reads as eerie, warm cream reads as huggable, even with the exact same shape. Cheeks are spheres squashed thin in Z and placed flush with the face. Warm wisps match the body's peachy undertone.",
    shapes: [
      {t:'capsule',s:0,c:0xFFF8E1,n:'Body',        tag:'warm cream',    p:{x:0,    y:1.43,z:0},   r:{_x:0,     _y:0,_z:0,_order:'XYZ'},sc:{x:1.6, y:2.2, z:1.6}, rgh:0.7,met:0,   opa:0.92},
      {t:'sphere', s:0,c:0x4E342E,n:'Left Eye',    tag:'warm dark',     p:{x:-0.32,y:2.1, z:0.74}, r:{_x:0,     _y:0,_z:0,_order:'XYZ'},sc:{x:0.3, y:0.35,z:0.3}, rgh:0.2,met:0,   opa:1},
      {t:'sphere', s:0,c:0x4E342E,n:'Right Eye',   tag:'warm dark',     p:{x:0.32, y:2.1, z:0.74}, r:{_x:0,     _y:0,_z:0,_order:'XYZ'},sc:{x:0.3, y:0.35,z:0.3}, rgh:0.2,met:0,   opa:1},
      {t:'sphere', s:0,c:0xFFAB91,n:'Left Cheek',  tag:'rosy · warm',   p:{x:-0.55,y:1.88,z:0.73}, r:{_x:0,     _y:0,_z:0,_order:'XYZ'},sc:{x:0.28,y:0.2, z:0.14},rgh:0.7,met:0,   opa:0.88},
      {t:'sphere', s:0,c:0xFFAB91,n:'Right Cheek', tag:'rosy · warm',   p:{x:0.55, y:1.88,z:0.73}, r:{_x:0,     _y:0,_z:0,_order:'XYZ'},sc:{x:0.28,y:0.2, z:0.14},rgh:0.7,met:0,   opa:0.88},
      {t:'sphere', s:0,c:0xFFE0B2,n:'Left Wisp',   tag:'warm · faded',  p:{x:-0.52,y:0.28,z:0},   r:{_x:0,     _y:0,_z:0,_order:'XYZ'},sc:{x:0.5, y:0.55,z:0.5}, rgh:0.7,met:0,   opa:0.75},
      {t:'sphere', s:0,c:0xFFE0B2,n:'Right Wisp',  tag:'warm · faded',  p:{x:0.52, y:0.28,z:0},   r:{_x:0,     _y:0,_z:0,_order:'XYZ'},sc:{x:0.5, y:0.55,z:0.5}, rgh:0.7,met:0,   opa:0.75},
      {t:'sphere', s:0,c:0x4E342E,n:'Smile Left',  tag:'dot · arc',     p:{x:-0.2, y:1.84,z:0.76}, r:{_x:0,     _y:0,_z:0,_order:'XYZ'},sc:{x:0.07,y:0.07,z:0.07},rgh:0.2,met:0,   opa:1},
      {t:'sphere', s:0,c:0x4E342E,n:'Smile Mid',   tag:'dot · arc',     p:{x:0,    y:1.78,z:0.77}, r:{_x:0,     _y:0,_z:0,_order:'XYZ'},sc:{x:0.07,y:0.07,z:0.07},rgh:0.2,met:0,   opa:1},
      {t:'sphere', s:0,c:0x4E342E,n:'Smile Right', tag:'dot · arc',     p:{x:0.2,  y:1.84,z:0.76}, r:{_x:0,     _y:0,_z:0,_order:'XYZ'},sc:{x:0.07,y:0.07,z:0.07},rgh:0.2,met:0,   opa:1},
      {t:'torus',  s:0,c:0xFFD700,n:'Halo',         tag:'flat · golden', p:{x:0,    y:3.2, z:0},    r:{_x:1.5708,_y:0,_z:0,_order:'XYZ'},sc:{x:0.65,y:0.65,z:0.12},rgh:0.1,met:0.85,opa:1},
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

const TOUR_STEPS = [
  {
    title: 'Add a shape',
    body: 'Click any shape to drop it onto the canvas. Mix and match — all 3D is just primitives stacked together.',
    arrowDir: 'left',
    style: { left: 284, top: 150 },
  },
  {
    title: 'Scene & layers',
    body: 'Every object in your scene appears here. Click to select, tick checkboxes to pick multiples, then group them together.',
    arrowDir: 'right',
    style: { right: 228, top: 190 },
  },
  {
    title: 'Move, rotate, scale',
    body: 'Select any object to reveal the transform toolbar at the top. Shortcuts: G (move) · R (rotate) · S (scale).',
    arrowDir: 'none',
    style: { left: '50%', top: 90, transform: 'translateX(-110px)' },
  },
  {
    title: 'Templates',
    body: 'Browse pre-built scenes to see how complex shapes are assembled from simple primitives — great for learning and inspiration.',
    arrowDir: 'left',
    style: { left: 284, bottom: 155 },
  },
];

const UI = () => {
  const {
    objects,
    selected,
    secondary,
    groups,
    ungroup,
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
    loadTemplate,
    addTemplate,
    updateMinimap,
    currentMode,
    undoStack,
    alignObjects,
    setCameraView,
    updateShapeRadius,
    renameShape,
    renameGroup,
    lockObjects,
  } = useThreeDSceneContext();

  const [showTemplates, setShowTemplates] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isRenaming, setIsRenaming] = useState(false);
  const [renameValue, setRenameValue] = useState('');
  const [checked, setChecked] = useState(new Set());
  const [color, setColor] = useState('#007AFF');
  const [roughness, setRoughness] = useState(0.15);
  const [metalness, setMetalness] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [cornerRadius, setCornerRadius] = useState(0);
  const [collapsedGroups, setCollapsedGroups] = useState(new Set());
  const [renamingGroupId, setRenamingGroupId] = useState(null);
  const [groupRenameValue, setGroupRenameValue] = useState('');
  const [showWelcome, setShowWelcome] = useState(() => !localStorage.getItem('mango_onboarded'));
  const [tourStep, setTourStep] = useState(null);

  useEffect(() => {
    setIsRenaming(false);
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

  // ── Canvas cursor: grab / grabbing ──────────────────
  const isDraggingCanvas = useRef(false);
  useEffect(() => {
    const container = document.getElementById('canvas-container');
    if (!container) return;
    container.style.cursor = 'grab';
    const onDown = () => { isDraggingCanvas.current = true;  container.style.cursor = 'grabbing'; };
    const onUp   = () => { isDraggingCanvas.current = false; container.style.cursor = 'grab'; };
    container.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    return () => {
      container.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

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

  const startRename = () => {
    if (!selected) return;
    setRenameValue(selected.userData.name);
    setIsRenaming(true);
  };
  const commitRename = () => {
    if (selected && renameValue.trim()) renameShape(selected, renameValue);
    setIsRenaming(false);
  };
  const cancelRename = () => setIsRenaming(false);

  // Clean up checked UUIDs when objects leave the scene
  useEffect(() => {
    if (checked.size === 0) return;
    const uuids = new Set(objects.map(o => o.uuid));
    const hasStale = [...checked].some(id => !uuids.has(id));
    if (hasStale) setChecked(prev => new Set([...prev].filter(id => uuids.has(id))));
  }, [objects]);

  useEffect(() => {
    if (collapsedGroups.size === 0) return;
    const ids = new Set(groups.map(g => g.id));
    const hasStale = [...collapsedGroups].some(id => !ids.has(id));
    if (hasStale) setCollapsedGroups(prev => new Set([...prev].filter(id => ids.has(id))));
  }, [groups]);

  const dismissWelcome = () => { setShowWelcome(false); localStorage.setItem('mango_onboarded', '1'); };
  const startTour = () => { setShowWelcome(false); setTourStep(0); localStorage.setItem('mango_onboarded', '1'); };
  const nextTourStep = () => setTourStep(t => (t < 3 ? t + 1 : null));
  const skipTour = () => setTourStep(null);
  const replayTour = () => {
    localStorage.removeItem('mango_onboarded');
    setTourStep(null);
    setShowWelcome(true);
  };

  const handleGroupChecked = () => {
    const objs = objects.filter(o => checked.has(o.uuid));
    if (objs.length >= 2) {
      lockObjects(objs);
      setChecked(new Set());
    }
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
      {/* ── Welcome Overlay ──────────────────────────── */}
      {showWelcome && (
        <div className="welcome-overlay">
          <div className="welcome-modal">
            <div className="welcome-logo">
              <MangoMark />
            </div>
            <div className="welcome-app-name">Mango</div>
            <div className="welcome-tagline">3D Shape Explorer</div>
            <p className="welcome-body">
              Build anything from simple primitives — no experience needed.
              Just click, drag, and create something beautiful.
            </p>
            <div className="welcome-actions">
              <button className="welcome-tour-btn" onClick={startTour}>
                Quick Tour →
              </button>
              <button className="welcome-start-btn" onClick={dismissWelcome}>
                Start Creating
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Left Panel ───────────────────────────────── */}
      <div id="ui-left" className={`panel${(tourStep === 0 || tourStep === 3) ? ' tour-highlight-panel' : ''}`}>
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
          <section className={tourStep === 0 ? 'tour-highlight-section' : ''}>
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
                      onClick={() => { setSelectedTemplate(tpl); setShowTemplates(true); }}
                      title={`Learn about ${tpl.name}`}
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
                  {isRenaming ? (
                    <input
                      className="name-input"
                      value={renameValue}
                      onChange={e => setRenameValue(e.target.value)}
                      onBlur={commitRename}
                      onKeyDown={e => {
                        if (e.key === 'Enter') { e.preventDefault(); commitRename(); }
                        if (e.key === 'Escape') cancelRename();
                      }}
                      autoFocus
                      onFocus={e => e.target.select()}
                    />
                  ) : (
                    <div
                      className="section-label name-editable"
                      style={{ marginBottom: 0 }}
                      onClick={startRename}
                      title="Click to rename"
                    >
                      {selected.userData.name}
                      <span className="rename-hint"><PencilIcon /></span>
                    </div>
                  )}
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

                  {(() => {
                    const selInGroup = groups.some(g => g.members.has(selected));
                    const secInGroup = groups.some(g => g.members.has(secondary));
                    return (!selInGroup && !secInGroup)
                      ? <button className="lock-btn" onClick={lockGroup}><LinkIcon /> Lock Together</button>
                      : <button className="unlock-btn" onClick={unlockAll}><UnlockIcon /> Unlock All</button>;
                  })()}

                  <button id="btnGround" onClick={groundShape}>
                    <GroundIcon /> Snap to Floor
                  </button>
                </div>
              </section>
            </>
          )}

        </div>

        <div className={`panel-footer${tourStep === 3 ? ' tour-highlight-footer' : ''}`}>
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
          <button className="btn-replay-tour" onClick={replayTour} title="Replay the quick tour">↩ Replay Tour</button>
        </div>

        {/* Templates overlay — grid or detail view */}
        {showTemplates && (
          <div className="templates-overlay">
            {selectedTemplate ? (
              /* ── Detail view ── */
              <>
                <div className="templates-overlay-header">
                  <button
                    className="detail-back-btn"
                    onClick={() => {
                      setSelectedTemplate(null);
                      if (objects.length === 0) setShowTemplates(false);
                    }}
                  >
                    ← Back
                  </button>
                  <button
                    className="icon-btn"
                    onClick={() => { setShowTemplates(false); setSelectedTemplate(null); }}
                    title="Close"
                    style={{ fontSize: 18, lineHeight: 1 }}
                  >
                    ×
                  </button>
                </div>
                <div className="templates-overlay-body">
                  {/* Thumbnail */}
                  <div className="detail-thumb-wrap">
                    <selectedTemplate.Thumb />
                  </div>
                  <div className="detail-name">{selectedTemplate.name}</div>
                  <p className="detail-idea">{selectedTemplate.idea}</p>

                  {/* Ingredient list */}
                  <div className="detail-section-label">Made From</div>
                  <div className="ingredient-list">
                    {selectedTemplate.shapes.map((shape, i) => (
                      <div key={i} className="ingredient-row">
                        <span
                          className="color-swatch"
                          style={{ background: '#' + shape.c.toString(16).padStart(6, '0') }}
                        />
                        <span className="ingredient-icon">{typeIcons[shape.t] ?? '◻'}</span>
                        <span className="ingredient-name">{shape.n}</span>
                        {shape.tag && <span className="ingredient-tag">{shape.tag}</span>}
                      </div>
                    ))}
                  </div>

                  {/* The trick */}
                  <div className="detail-section-label" style={{ marginTop: 14 }}>The Trick</div>
                  <div className="detail-trick">{selectedTemplate.trick}</div>

                  {/* Action buttons */}
                  <div className="template-action-row">
                    <button
                      className="load-template-btn"
                      onClick={() => {
                        addTemplate(selectedTemplate.shapes, selectedTemplate.name);
                        setShowTemplates(false);
                        setSelectedTemplate(null);
                      }}
                    >
                      Add to Scene
                    </button>
                    <button
                      className="replace-template-btn"
                      onClick={() => {
                        loadTemplate(selectedTemplate.shapes, selectedTemplate.name);
                        setShowTemplates(false);
                        setSelectedTemplate(null);
                      }}
                    >
                      Replace Scene
                    </button>
                  </div>
                </div>
              </>
            ) : (
              /* ── Grid view ── */
              <>
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
                    Tap a template to see how it's built.
                  </div>
                  <div className="template-grid">
                    {TEMPLATES.map(tpl => (
                      <button
                        key={tpl.id}
                        className="template-card"
                        onClick={() => setSelectedTemplate(tpl)}
                        title={`Learn about ${tpl.name}`}
                      >
                        <tpl.Thumb />
                        <span className="template-card-name">{tpl.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
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
      <div id="ui-right" className={`panel${tourStep === 1 ? ' tour-highlight-panel' : ''}`}>
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
          {checked.size >= 2 && (
            <button className="group-checked-btn group-checked-top" onClick={handleGroupChecked}>
              <LinkIcon /> Group {checked.size} Objects
            </button>
          )}
          {objects.length === 0 ? (
            <div className="outliner-empty" id="outlinerEmpty">
              No objects yet.<br />Add a shape to begin.
            </div>
          ) : (() => {
            // Build group membership lookup
            const uuidToGroup = new Map();
            groups.forEach(grp => grp.members.forEach(m => uuidToGroup.set(m.uuid, grp)));

            const items = [];
            const renderedGroupIds = new Set();

            objects.forEach(obj => {
              const grp = uuidToGroup.get(obj.uuid);
              if (grp) {
                if (!renderedGroupIds.has(grp.id)) {
                  renderedGroupIds.add(grp.id);
                  const isOpen = !collapsedGroups.has(grp.id);
                  items.push(
                    <div key={`group-${grp.id}`} className="layer layer-group-header">
                      <button
                        className="layer-caret"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCollapsedGroups(prev => {
                            const next = new Set(prev);
                            if (next.has(grp.id)) next.delete(grp.id);
                            else next.add(grp.id);
                            return next;
                          });
                        }}
                      >
                        <CaretIcon open={isOpen} />
                      </button>
                      <span className="layer-group-icon">⬡</span>
                      {renamingGroupId === grp.id ? (
                        <input
                          className="group-name-input"
                          value={groupRenameValue}
                          autoFocus
                          onFocus={e => e.target.select()}
                          onChange={e => setGroupRenameValue(e.target.value)}
                          onBlur={() => {
                            if (groupRenameValue.trim()) renameGroup(grp.id, groupRenameValue);
                            setRenamingGroupId(null);
                          }}
                          onKeyDown={e => {
                            if (e.key === 'Enter') { e.preventDefault(); if (groupRenameValue.trim()) renameGroup(grp.id, groupRenameValue); setRenamingGroupId(null); }
                            if (e.key === 'Escape') setRenamingGroupId(null);
                          }}
                          onClick={e => e.stopPropagation()}
                        />
                      ) : (
                        <span
                          className="layer-name layer-group-name"
                          onDoubleClick={e => { e.stopPropagation(); setGroupRenameValue(grp.name); setRenamingGroupId(grp.id); }}
                          title="Double-click to rename"
                        >{grp.name}</span>
                      )}
                      <span className="layer-group-count">{grp.members.size}</span>
                      <button
                        className="layer-ungroup-btn"
                        title="Ungroup"
                        onClick={(e) => { e.stopPropagation(); ungroup(grp.id); }}
                      >
                        <UngroupIcon />
                      </button>
                    </div>
                  );
                }
                if (!collapsedGroups.has(grp.id)) {
                  items.push(
                    <div
                      key={obj.uuid}
                      className={`layer layer-child ${obj === selected ? 'selected' : ''} ${obj === secondary ? 'secondary' : ''}`}
                      onClick={() => handleOutlinerClick(obj)}
                    >
                      <label
                        className={`layer-check-wrap ${checked.has(obj.uuid) ? 'is-checked' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setChecked(prev => {
                            const next = new Set(prev);
                            if (next.has(obj.uuid)) next.delete(obj.uuid);
                            else next.add(obj.uuid);
                            return next;
                          });
                        }}
                      >
                        <span className="layer-check-box" />
                      </label>
                      <span className="layer-icon">{typeIcons[obj.userData.type] ?? '◻'}</span>
                      <span className="layer-name">{obj.userData.name}</span>
                      <span className="layer-lock"><LockPadlockIcon /></span>
                    </div>
                  );
                }
              } else {
                items.push(
                  <div
                    key={obj.uuid}
                    className={`layer ${obj === selected ? 'selected' : ''} ${obj === secondary ? 'secondary' : ''}`}
                    onClick={() => handleOutlinerClick(obj)}
                  >
                    <label
                      className={`layer-check-wrap ${checked.has(obj.uuid) ? 'is-checked' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setChecked(prev => {
                          const next = new Set(prev);
                          if (next.has(obj.uuid)) next.delete(obj.uuid);
                          else next.add(obj.uuid);
                          return next;
                        });
                      }}
                    >
                      <span className="layer-check-box" />
                    </label>
                    <span className="layer-icon">{typeIcons[obj.userData.type] ?? '◻'}</span>
                    <span className="layer-name">{obj.userData.name}</span>
                  </div>
                );
              }
            });
            return items;
          })()}
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

      {/* ── Tour Overlay ─────────────────────────────── */}
      {tourStep !== null && (
        <>
          <div className="tour-dim" style={{ background: tourStep === 2 ? 'rgba(8,7,12,0.22)' : 'rgba(8,7,12,0.58)' }} />
          <div className="tour-tooltip" style={TOUR_STEPS[tourStep].style}>
            {TOUR_STEPS[tourStep].arrowDir === 'left'  && <div className="tour-arrow tour-arrow-left" />}
            {TOUR_STEPS[tourStep].arrowDir === 'right' && <div className="tour-arrow tour-arrow-right" />}
            {TOUR_STEPS[tourStep].arrowDir === 'up'    && <div className="tour-arrow tour-arrow-up" />}
            <div className="tour-dots">
              {TOUR_STEPS.map((_, i) => (
                <span key={i} className={`tour-dot${i === tourStep ? ' active' : ''}`} />
              ))}
            </div>
            <div className="tour-title">{TOUR_STEPS[tourStep].title}</div>
            <div className="tour-body">{TOUR_STEPS[tourStep].body}</div>
            <div className="tour-actions">
              <button className="tour-skip-btn" onClick={skipTour}>Skip</button>
              <button className="tour-next-btn" onClick={nextTourStep}>
                {tourStep < 3 ? 'Next →' : 'Done ✓'}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UI;
