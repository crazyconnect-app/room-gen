import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const CameraRig = () => {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(6, 6, 6);
    camera.lookAt(0, 0, 0);
  }, [camera]);
  return null;
};

export default CameraRig;
