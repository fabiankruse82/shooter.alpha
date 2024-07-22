import React, { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const FirstPersonControls = () => {
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

  useEffect(() => {
    // Function to handle movement based on pressed keys
    const handleMove = () => {
      if (keys.current['KeyW']) camera.position.z -= moveSpeed;
      if (keys.current['KeyS']) camera.position.z += moveSpeed;
      if (keys.current['KeyA']) camera.position.x -= moveSpeed;
      if (keys.current['KeyD']) camera.position.x += moveSpeed;
      if (keys.current['Space']) camera.position.y += moveSpeed;
    };

    // Set an interval to continuously check for key presses and move the camera
    const interval = setInterval(handleMove, 10);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return null; // This component doesn't render anything
};

export default FirstPersonControls;
