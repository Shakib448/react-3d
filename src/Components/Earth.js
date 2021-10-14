import React from "react";

const Earth = ({}) => {
  return (
    <>
      <mesh>
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export default Earth;
