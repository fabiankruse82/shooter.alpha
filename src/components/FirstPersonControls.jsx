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
      const position = cubeRef.current.translation();
      if (keys.current['KeyW']) position.z -= moveSpeed;
      if (keys.current['KeyS']) position.z += moveSpeed;
      if (keys.current['KeyA']) position.x -= moveSpeed;
      if (keys.current['KeyD']) position.x += moveSpeed;
      if (keys.current['Space']) position.y += moveSpeed;

      cubeRef.current.setTranslation(position, true);

      // Update camera position to follow the cube
      camera.position.set(position.x, position.y + 1, position.z - 3);
      camera.lookAt(position.x, position.y, position.z);
    }
  });

  return null; // This component doesn't render anything
};

export default FirstPersonControls;
