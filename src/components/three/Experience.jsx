import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CameraRig from "./core/CameraRig";
import Lighting from "./core/Lighting";
import Controls from "./core/Controls";
import SceneManager from "./systems/SceneManager";
import WorldRenderer from "./world/WorldRenderer";

const Experience = () => {
  return (
    <Canvas
      orthographic
      shadows
      camera={{ position: [10, 10, 10], zoom: 60, near: 0.1, far: 1000 }}
      gl={{ physicallyCorrectLights: true }}
      dpr={2}
      className="absolute inset-0"
    >
      <Suspense fallback={null}>
        <CameraRig />
        <Lighting />
        <Controls />
        {/* <SceneManager /> */}
        <WorldRenderer />
      </Suspense>
    </Canvas>
  );
};

export default Experience;
