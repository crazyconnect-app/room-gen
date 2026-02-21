import React from "react";

const GeometryFactory = ({ type }) => {
  switch (type) {
    case "box":
      return (
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      );

    case "sphere":
      return (
        <mesh>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      );

    case "cylinder":
      return (
        <mesh>
          <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
          <meshStandardMaterial color="skyblue" />
        </mesh>
      );

    default:
      return null;
  }
};

export default GeometryFactory;
