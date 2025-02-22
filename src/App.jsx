import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Room from './components/Room';
import FirstPersonControls from './components/FirstPersonControls';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  const cubeRef = useRef();
  
  return (
    <>
      {/* Background music component */}
      <BackgroundMusic />
      <Canvas>
        {/* Set up a perspective camera */}
        <PerspectiveCamera makeDefault position={[0, 1.5, 5]} />
        {/* Add ambient light for general illumination */}
        <ambientLight intensity={0.5} />
        {/* Add a point light for dynamic lighting */}
        <pointLight position={[10, 10, 10]} />
        
        {/* Render the Room component */}
        <Room cubeRef={cubeRef} />
        {/* Render the FirstPersonControls component */}
        <FirstPersonControls cubeRef={cubeRef} />
      </Canvas>
    </>
  );
}

export default App;
