import { Environment, Float, Lightformer, Sparkles } from "@react-three/drei";
import { ChristmasBall } from "./Ball";
import { useFrame } from "@react-three/fiber";

export default function Scene() {
  useFrame(({ camera, clock }) => {
    const nx = Math.cos(clock.getElapsedTime()) * 0.2;
    const ny = Math.sin(clock.getElapsedTime()) * 0.2;
    camera.position.x = nx;
    camera.position.y = ny + 2;
  });
  return (
    <>
      <color args={["#708CC2"]} attach="background" />

      <Sparkles
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
      <directionalLight position={[1, 2, 3]} intensity={4} />

      <Float speed={2}>
        <ChristmasBall scale={2} position={[0, -0.5, -4]} />
      </Float>
    </>
  );
}
