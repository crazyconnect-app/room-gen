import { OrbitControls } from "@react-three/drei";
import { useWorldStore } from "../../../store/world/worldStore";
const Controls = () => {
  const { selectedId } = useWorldStore();
  return (
    <OrbitControls
      enabled={!selectedId}
      enableDamping
      dampingFactor={0.1}
      maxPolarAngle={Math.PI / 2}
      enableRotate={true}
      enablePan={true}
      enableZoom={true}
      minZoom={30}
      maxZoom={120}
    />
  );
};

export default Controls;
