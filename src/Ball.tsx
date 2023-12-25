// @ts-nocheck
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ChristmasBall(props) {
  const { nodes, materials } = useGLTF("/ball.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.christmass_ball_inside_0.geometry}
          material={materials.inside}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.christmass_ball_ouline_0.geometry}
          material={materials.ouline}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass_glass_0.geometry}
        material={materials.glass}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/christmas-ball.glb");
