import React from 'react';
import { useThreeDSceneContext } from './context/ThreeDSceneContext';

const ThreeDCanvas = () => {
    const { canvasRef } = useThreeDSceneContext();

    return <div ref={canvasRef} id="canvas-container"></div>;
};

export default ThreeDCanvas;