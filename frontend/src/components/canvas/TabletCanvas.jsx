/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function TabletCanvas({ onClick }) {
  const tvRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    const gltfPath = "./tablet/scene.gltf";

    loader.load(gltfPath, (gltf) => {
      const tv = gltf.scene;
      if (tvRef.current) {
        tvRef.current.add(tv);
      }
    });
  }, []);

  return (
    <group
      ref={tvRef}
      position={[2.65, -1.54, 3.4]}
      scale={0.0015}
      rotation={[0, 1.58, 0]}
      onClick={onClick}
    >
      <hemisphereLight intensity={2} groundColor="black" />
      <spotLight
        position={[0, 0, 0]}
        intensity={5}
        angle={0.12}
        penumbra={1}
        castShadow
      />
      <pointLight intensity={0.5} />
    </group>
  );
}

TabletCanvas.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default TabletCanvas;
