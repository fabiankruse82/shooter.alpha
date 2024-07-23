import React, { useRef } from 'react';
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier';
import { Box } from '@react-three/drei';

const Room = ({ cubeRef }) => {
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

        {/* Center Cube */}
        <RigidBody ref={cubeRef} position={[0, 0.5, 0]}>
          <Box args={[1, 1, 1]}>
            <meshStandardMaterial color="white" />
            <TextMesh position={[0, 0.6, 0]} text="U" />
            <TextMesh position={[-0.6, 0, 0]} text="L" rotation={[0, 0, Math.PI / 2]} />
            <TextMesh position={[0, 0, 0.6]} text="F" rotation={[Math.PI / 2, 0, 0]} />
            <TextMesh position={[0.6, 0, 0]} text="R" rotation={[0, 0, -Math.PI / 2]} />
            <TextMesh position={[0, 0, -0.6]} text="B" rotation={[-Math.PI / 2, 0, 0]} />
            <TextMesh position={[0, -0.6, 0]} text="D" />
          </Box>
        </RigidBody>
      </Physics>
    </>
  );
};

const TextMesh = ({ position, text, rotation = [0, 0, 0] }) => (
  <mesh position={position} rotation={rotation}>
    <planeGeometry args={[1, 1]} />
    <meshStandardMaterial>
      <canvasTexture attach="map" image={createTextCanvas(text)} />
    </meshStandardMaterial>
  </mesh>
);

const createTextCanvas = (text) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = 256;
  canvas.height = 256;
  context.font = 'bold 200px sans-serif';
  context.fillStyle = 'black';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, canvas.width / 2, canvas.height / 2);
  return canvas;
};

export default Room;
