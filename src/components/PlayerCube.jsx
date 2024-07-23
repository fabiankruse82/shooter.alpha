import React, { forwardRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Box } from '@react-three/drei';

const PlayerCube = forwardRef((props, ref) => (
  <RigidBody ref={ref} position={[0, 0.5, 0]}>
    <Box args={[1, 1, 1]}>
      <meshStandardMaterial color="white" />
    </Box>
  </RigidBody>
));

export default PlayerCube;
