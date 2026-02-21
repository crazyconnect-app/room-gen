import { TransformControls } from "@react-three/drei";
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useWorldStore } from "../../../store/world/worldStore";

const ObjectControls = ({ object, objectRef }) => {
  const { updateObject, transformMode, gridSize, snapEnabled } =
    useWorldStore();

  const snapValue = snapEnabled ? gridSize : null;

  return (
    <TransformControls
      object={objectRef.current}
      mode={transformMode}
      translationSnap={transformMode === "translate" ? snapValue : null}
      rotationSnap={transformMode === "rotate" ? Math.PI / 2 : null}
      scaleSnap={transformMode === "scale" ? 0.1 : null}
      onObjectChange={() => {
        updateObject(object.id, {
          position: objectRef.current.position.toArray(),
          rotation: objectRef.current.rotation.toArray(),
          scale: objectRef.current.scale.toArray(),
        });
      }}
    />
  );
};

export default ObjectControls;
