/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import ShopCanvas from "../components/canvas/ShopModel";
import TvCanvas from "../components/canvas/TvCanvas";
import TabletCanvas from "../components/canvas/TabletCanvas";
import SideBar from "../components/SideBar";
import ProductCanvas from "../components/canvas/ProductCanvas";
import "../styles/shop.scss";

function Shop() {
  const [cameraPosition, setCameraPosition] = useState("default");
  const camera = {
    fov: 45,
    near: 0.1,
    far: 1000,
    position: [5.3, 0.298, 0],
    rotation: [2.73, 1.5, -2.73],
  };
  return (
    <section className="shop">
      <SideBar setCameraPosition={setCameraPosition} />
      <Canvas camera={camera}>
        <color attach="background" args={["#d4d1d1"]} />
        <ShopCanvas cameraPosition={cameraPosition} />
        <TvCanvas cameraPosition={cameraPosition} />
        <TabletCanvas cameraPosition={cameraPosition} />
        <ProductCanvas cameraPosition={cameraPosition} />
        <ambientLight intensity={3} />
      </Canvas>
    </section>
  );
}

export default Shop;
