import React from "react";

const Room = () => {
  return (
    <mesh position={[0, 0.5, 0]} castShadow>
      <boxGeometry args={[2, 1, 2]} />
      <meshStandardMaterial color="#f472b6" />
    </mesh>
  );
};

export default Room;
