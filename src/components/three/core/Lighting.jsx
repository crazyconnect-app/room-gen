import { Environment } from "@react-three/drei";
const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[8, 12, 6]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
        color="#ffe5b4"
      />

      {/* Soft Fill Light (Cool tone for vibrancy) */}
      <directionalLight
        position={[-5, 6, -5]}
        intensity={0.6}
        color="#b4d9ff"
      />

      {/* Subtle Rim Light */}
      <pointLight position={[0, 5, -10]} intensity={0.4} color="#ffffff" />

      {/* HDRI Environment for reflections */}
      <Environment preset="night" />
    </>
  );
};

export default Lighting;
