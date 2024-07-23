import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const FirstPersonControls = ({ cubeRef }) => {
  const { camera } = useThree(); // Access the camera from the Three.js context
  const moveSpeed = 0.2; // Speed of movement
  const keys = useRef({}); // Object to keep track of pressed keys

  useEffect(() => {
    // Event listeners to update the keys object on key down and up
    const handleKeyDown = (e) => (keys.current[e.code] = true);
    const handleKeyUp = (e) => (keys.current[e.code] = false);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame(() => {
    if (cubeRef.current) {
      const { x, y, z } = cubeRef.current.translation();

      // Move the cube
      if (keys.current['KeyW']) cubeRef.current.setTranslation({ x, y, z: z - moveSpeed }, true);
      if (keys.current['KeyS']) cubeRef.current.setTranslation({ x, y, z: z + moveSpeed }, true);
      if (keys.current['KeyA']) cubeRef.current.setTranslation({ x: x - moveSpeed, y, z }, true);
      if (keys.current['KeyD']) cubeRef.current.setTranslation({ x: x + moveSpeed, y, z }, true);
      if (keys.current['Space']) cubeRef.current.setTranslation({ x, y: y + moveSpeed, z }, true);

      // Attach the camera to the cube
      camera.position.set(x, y + 0.5, z);
      camera.lookAt(x, y + 0.5, z + 1);
    }
  });

  return null; // This component doesn't render anything
};

export default FirstPersonControls;
