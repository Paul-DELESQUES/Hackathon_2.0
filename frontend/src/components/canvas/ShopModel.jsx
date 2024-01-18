/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function ShopModel() {
  const shopRef = useRef();

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
  }, []);

  return (
    <group ref={shopRef} scale={2} position={[-2.5, -3, 0.5]}>
      <hemisphereLight intensity={2} groundColor="black" />
    </group>
  );
}

export default ShopModel;
