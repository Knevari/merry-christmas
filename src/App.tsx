import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

function App() {
  return (
    <>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 2, 8] }}>
        <Scene />
      </Canvas>
      <div className="christmas-card">
        <small>have yourself a</small>
        <h1>Merry Little</h1>
        <h1>Christmas</h1>
      </div>
    </>
  );
}

export default App;
