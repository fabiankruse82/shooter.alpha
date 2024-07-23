import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Room from './components/Room';
import FirstPersonControls from './components/FirstPersonControls';

function App() {
  const cubeRef = useRef();
  
  return (
    <Canvas>
      {/* Set up a perspective camera */}
      <PerspectiveCamera makeDefault position={[0, 10, 30]} />
      {/* Add orbit controls to allow mouse interaction */}
      <OrbitControls />
      {/* Add ambient light for general illumination */}
      <ambientLight intensity={0.5} />
      {/* Add a point light for dynamic lighting */}
      <pointLight position={[10, 10, 10]} />
      
      {/* Render the Room component */}
      <Room cubeRef={cubeRef} />
      {/* Render the FirstPersonControls component */}
      <FirstPersonControls cubeRef={cubeRef} />
    </Canvas>
  );
}

export default App;
