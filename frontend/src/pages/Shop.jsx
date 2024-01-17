/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ShopCanvas from "../components/ShopModel";
import "../styles/shop.scss";

function Shop() {
  return (
    <section className="shop">
      <Canvas
        style={{ background: "#d4d1d1" }}
        frameloop="demand"
        shadows
        camera={{
          position: [Math.PI / 2, 0, -Math.PI / 2],
          fov: 35,
        }}
      >
        <Suspense fallback={null}>
          <ShopCanvas />
          <ambientLight intensity={2.5} />
          {/* <pointLight position={[0, 0, 0]} intensity={5} /> */}
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Shop;
