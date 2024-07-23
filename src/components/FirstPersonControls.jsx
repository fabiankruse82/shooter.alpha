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
      const translation = cubeRef.current.translation();

      // Move the cube with correct direction
      if (keys.current['KeyW']) translation.z -= moveSpeed;
      if (keys.current['KeyS']) translation.z += moveSpeed;
      if (keys.current['KeyA']) translation.x -= moveSpeed;
      if (keys.current['KeyD']) translation.x += moveSpeed;
      if (keys.current['Space']) translation.y += moveSpeed;

      cubeRef.current.setTranslation(translation, true);

      // Attach the camera to the cube
      camera.position.set(translation.x, translation.y + 0.5, translation.z);
      camera.lookAt(translation.x, translation.y + 0.5, translation.z - 1);
    }
  });

  return null; // This component doesn't render anything
};

export default FirstPersonControls;
