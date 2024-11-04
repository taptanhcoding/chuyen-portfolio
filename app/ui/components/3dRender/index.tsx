// components/ModelViewer.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


type ModelPtopsType = { modelPath: string, scale:number[] }
function Model({ modelPath, scale }:ModelPtopsType) {
  const gltf = useGLTF(modelPath, true);
  return <primitive object={gltf.scene} scale={scale} position={[0, 0, 0]}/>;
}

export default function ModelViewer({ modelPath, scale = [1, 1, 1] }:ModelPtopsType) {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model modelPath={modelPath} scale={scale} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
