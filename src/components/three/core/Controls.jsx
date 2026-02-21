import { OrbitControls } from "@react-three/drei";
const Controls = () => {
  return (
    <OrbitControls
      enableDamping
      dampingFactor={0.1}
      maxPolarAngle={Math.PI / 2}
    />
  );
};

export default Controls;
