import { Suspense } from "react";
import "./App.scss";
import { Canvas } from "@react-three/fiber";
import Earth from "./Components/Earth";

function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
