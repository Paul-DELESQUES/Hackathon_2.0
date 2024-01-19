/* eslint-disable react/no-unknown-property */
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function TvCanvas({ cameraPosition }) {
  const tvRef = useRef();
  const { camera } = useThree();
  const navigate = useNavigate();

  useEffect(() => {
    const loader = new GLTFLoader();
    const gltfPath = "./tv/scene.gltf";

    loader.load(gltfPath, (gltf) => {
      const tv = gltf.scene;
      if (tvRef.current) {
        tvRef.current.add(tv);
      }
    });
    if (cameraPosition === "tv") {
      gsap.to(camera.position, {
        duration: 3,
        x: 1.512,
        y: -0.02,
        z: 0.07,
      });
      gsap.to(camera.rotation, {
        duration: 3.2,
        x: 2.99,
        y: 3.12,
        z: -3.13,
        onComplete: () => {
          navigate("survey");
        },
      });
    }
  }, [cameraPosition]);

  return (
    <group ref={tvRef} position={[1.8, -0.2, -3.2]} scale={0.045}>
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

TvCanvas.propTypes = {
  cameraPosition: PropTypes.string.isRequired,
};

export default TvCanvas;
