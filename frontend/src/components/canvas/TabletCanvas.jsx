/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useThree } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import PropTypes from "prop-types";

function TabletCanvas({ cameraPosition }) {
  const tvRef = useRef();
  const { camera } = useThree();
  const navigate = useNavigate();

  useEffect(() => {
    const loader = new GLTFLoader();
    const gltfPath = "./tablet/scene.gltf";

    loader.load(gltfPath, (gltf) => {
      const tv = gltf.scene;
      if (tvRef.current) {
        tvRef.current.add(tv);
      }
    });
    if (cameraPosition === "tablet") {
      gsap.to(camera.position, {
        duration: 3,
        x: 2.622,
        y: -0.852,
        z: 3.361,
      });
      gsap.to(camera.rotation, {
        duration: 3.2,
        x: 4.673,
        y: -6.269,
        z: -3.134,
        onComplete: () => {
          navigate("tablette");
        },
      });
    }
  }, [cameraPosition]);

  return (
    <group
      ref={tvRef}
      position={[2.65, -1.54, 3.4]}
      scale={0.0015}
      rotation={[0, 1.58, 0]}
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
  cameraPosition: PropTypes.string.isRequired,
};

export default TabletCanvas;
