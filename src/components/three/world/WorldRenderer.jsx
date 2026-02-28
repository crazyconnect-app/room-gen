import React from "react";
import { useWorldStore } from "../../../store/world/worldStore";
import PlacedObject from "./PlacedObject";
import GridHelper from "./GridHelper";

const WorldRenderer = () => {
  const { placedObjects, selectObject } = useWorldStore();
  return (
    <>
      {/* <GridHelper /> */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} onClick={() => selectObject(null)}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#a3e635" />
      </mesh>
      {placedObjects.map((obj) => (
        <PlacedObject key={obj.id} object={obj} />
      ))}
    </>
  );
};

export default WorldRenderer;
