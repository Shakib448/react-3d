import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

import EarthDayMap from "../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudMap from "../assets/textures/8k_earth_clouds.jpg";

const Earth = () => {
  const [colorMap, normalMap, specularMap, cloudsMap] =
    useLoader(TextureLoader,  [EarthDayMap, EarthNormalMap,EarthSpecularMap,EarthCloudMap]);

  return (
    <>
      <ambientLight intensity={1} />
      <mesh>
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export default Earth;
