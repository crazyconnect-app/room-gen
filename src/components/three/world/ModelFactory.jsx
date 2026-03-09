import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useMemo, useEffect } from "react";

const ModelFactory = ({ modelPath, targetHeight = 1.0 }) => {
  const { scene } = useGLTF(modelPath);
  // compute normalization scale once per model load
  const normalizationScale = useMemo(() => {
    // clone scene to avoid mutating original while measuring? use Box3 on scene directly is fine
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const height = size.y;

    // fallback if height is zero or degenerate
    if (!height || height < 1e-4) return 1.0;

    return targetHeight / height;
  }, [scene, targetHeight]);
  // apply normalization scale once
  useEffect(() => {
    scene.scale.setScalar(normalizationScale);
    // center pivot if you want model bottom at y=0 (optional)
    // const box = new THREE.Box3().setFromObject(scene);
    // const center = box.getCenter(new THREE.Vector3());
    // scene.position.y -= box.min.y; // move so bottom sits on y=0
  }, [scene, normalizationScale]);
  return <primitive object={scene} />;
};

export default ModelFactory;
