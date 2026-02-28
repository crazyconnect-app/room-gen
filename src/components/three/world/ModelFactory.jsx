import { useGLTF } from "@react-three/drei";

const ModelFactory = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);

  return <primitive object={scene} />;
};

export default ModelFactory;
