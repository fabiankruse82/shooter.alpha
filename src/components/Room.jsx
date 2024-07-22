import React from 'react';
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier';
import { Box } from '@react-three/drei';

const Room = () => {
  return (
    <>
      {/* Physics wrapper to handle collisions and gravity */}
      <Physics>
        {/* Floor */}
        <RigidBody type="fixed">
          <CuboidCollider args={[10, 0.5, 20]} position={[0, -0.5, 0]} />
          <Box args={[20, 1, 40]} position={[0, -0.5, 0]}>
            <meshStandardMaterial color="gray" />
          </Box>
        </RigidBody>

        {/* Walls */}
        {/* Front wall */}
        <RigidBody type="fixed">
          <CuboidCollider args={[10, 15, 0.5]} position={[0, 15, -20]} />
          <Box args={[20, 30, 1]} position={[0, 15, -20]}>
            <meshStandardMaterial color="red" />
          </Box>
        </RigidBody>
        
        {/* Back wall */}
        <RigidBody type="fixed">
          <CuboidCollider args={[10, 15, 0.5]} position={[0, 15, 20]} />
          <Box args={[20, 30, 1]} position={[0, 15, 20]}>
            <meshStandardMaterial color="blue" />
          </Box>
        </RigidBody>

        {/* Left wall */}
        <RigidBody type="fixed">
          <CuboidCollider args={[0.5, 15, 20]} position={[-10, 15, 0]} />
          <Box args={[1, 30, 40]} position={[-10, 15, 0]}>
            <meshStandardMaterial color="green" />
          </Box>
        </RigidBody>

        {/* Right wall */}
        <RigidBody type="fixed">
          <CuboidCollider args={[0.5, 15, 20]} position={[10, 15, 0]} />
          <Box args={[1, 30, 40]} position={[10, 15, 0]}>
            <meshStandardMaterial color="yellow" />
          </Box>
        </RigidBody>

        {/* Ceiling */}
        <RigidBody type="fixed">
          <CuboidCollider args={[10, 0.5, 20]} position={[0, 31, 0]} />
          <Box args={[20, 1, 40]} position={[0, 31, 0]}>
            <meshStandardMaterial color="orange" />
          </Box>
        </RigidBody>
      </Physics>
    </>
  );
};

export default Room;
