import { Environment, Float, Lightformer, Sparkles } from "@react-three/drei";
import { ChristmasBall } from "./Ball";
import { useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

export default function Scene() {
  const sparklesRef = useRef();

  useFrame(({ camera, clock }, delta) => {
    // const nx = Math.cos(clock.getElapsedTime()) * 0.2;
    // const ny = Math.sin(clock.getElapsedTime()) * 0.2;
    // camera.position.x = nx;
    // camera.position.y = ny + 2;
    sparklesRef.current.rotation.x += delta * 0.01;
  });
  return (
    <>
      <color args={["#708CC2"]} attach="background" />

      <Sparkles
        ref={sparklesRef}
        color="snow"
        count={2000}
        noise={1}
        opacity={1}
        speed={0.3}
        size={3}
        scale={18}
      />

      <Environment background={false} preset="sunset">
        <Lightformer
          position={[0, 0, -5]}
          scale={10}
          color="#88A4DA"
          intensity={10}
        />
      </Environment>

      <ambientLight intensity={4} />
      <directionalLight position={[0, 5, 0]} intensity={2} />

      <Float speed={2}>
        <Suspense fallback={null}>
          <ChristmasBall scale={3} position={[0, 2.8, -4]} />
        </Suspense>
      </Float>

      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.7}
          bokehScale={2}
          height={480}
        />
        <Noise opacity={0.02} />
      </EffectComposer>
    </>
  );
}
