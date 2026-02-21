import { useRef } from "react";

import GeometryFactory from "./GeometryFactory";
import { useWorldStore } from "../../../store/world/worldStore";
import ObjectControls from "./ObjectControls";

const PlacedObject = ({ object }) => {
  const ref = useRef();
  const { selectedId, selectObject } = useWorldStore();
  const isSelected = selectedId === object.id;
  return (
    <>
      <group
        ref={ref}
        position={object.position}
        rotation={object.rotation}
        scale={object.scale}
        onClick={(e) => {
          e.stopPropagation();
          selectObject(object.id);
        }}
      >
        <GeometryFactory type={object.type} />
      </group>
      {isSelected && <ObjectControls object={object} objectRef={ref} />}
    </>
  );
};

export default PlacedObject;
