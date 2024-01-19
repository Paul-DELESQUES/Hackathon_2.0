/* eslint-disable react/no-unknown-property */
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import PropTypes from "prop-types";

function ShopModel({ cameraPosition }) {
  const shopRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    const loader = new GLTFLoader();
    const dLoader = new DRACOLoader();
    const glbPath = "./shop.glb";

    dLoader.setDecoderPath(
      "https://www.gstatic.com/draco/versioned/decoders/1.5.7/"
    );
    dLoader.setDecoderConfig({ type: "js" });
    loader.setDRACOLoader(dLoader);

    loader.load(glbPath, (gltf) => {
      const shop = gltf.scene;
      if (shopRef.current) {
        shopRef.current.add(shop);
      }
    });
    if (cameraPosition === "default") {
      gsap.to(camera.position, {
        duration: 3,
        x: 5.3,
        y: 0.298,
        z: 0,
      });
      gsap.to(camera.rotation, {
        duration: 3.2,
        x: 2.73,
        y: 1.5,
        z: -2.73,
      });
    }
  }, [cameraPosition]);

  return (
    <group ref={shopRef} scale={2} position={[-2.5, -3, 0.5]}>
      <hemisphereLight intensity={2} groundColor="black" />
    </group>
  );
}

ShopModel.propTypes = {
  cameraPosition: PropTypes.string.isRequired,
};

export default ShopModel;
