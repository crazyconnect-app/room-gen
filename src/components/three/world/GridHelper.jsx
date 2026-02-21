import { Grid } from "@react-three/drei";
import { useWorldStore } from "../../../store/world/worldStore";

const GridHelper = () => {
  const { gridSize } = useWorldStore();

  return (
    <Grid
      args={[50, 50]}
      cellSize={gridSize}
      cellThickness={1}
      sectionSize={5}
      sectionThickness={1.5}
      fadeDistance={50}
      fadeStrength={1}
      position={[0, 0.001, 0]}
    />
  );
};

export default GridHelper;
