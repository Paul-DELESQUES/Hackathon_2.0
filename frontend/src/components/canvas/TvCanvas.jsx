/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function TvCanvas() {
  const tvRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    const gltfPath = "./tv/scene.gltf";

    loader.load(gltfPath, (gltf) => {
      const tv = gltf.scene;
      if (tvRef.current) {
        tvRef.current.add(tv);
      }
    });
  }, []);

  return (
    <group ref={tvRef} position={[1.5, -0.2, -3.2]} scale={0.045}>
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

export default TvCanvas;
