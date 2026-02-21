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
      shadows
      camera={{ position: [6, 6, 6], fov: 50 }}
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
