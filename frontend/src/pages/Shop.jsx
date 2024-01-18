/* eslint-disable react/no-unknown-property */
import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ShopCanvas from "../components/canvas/ShopModel";
import TvCanvas from "../components/canvas/TvCanvas";
import TabletCanvas from "../components/canvas/TabletCanvas";
import Tutorial from "../components/tutorial/Tutorial";
// import ProductCanvas from "../components/canvas/ProductCanvas";
import "../styles/shop.scss";
import tutoButton from "../../public/tuto.png";

function Shop() {
  const [tutorialStep, setTutorialStep] = useState(2);
  const [tutorialCompleted, setTutorialCompleted] = useState(false);
  const [showTutorialButton, setShowTutorialButton] = useState(false);

  // const handleProductClick = () => {
  //   if (tutorialStep === 1) {
  //     setTutorialStep(2);
  //   }
  // };

  const handleTabletClick = () => {
    if (tutorialStep === 2) {
      setTutorialStep(3);
    }
  };

  const handleTvClick = () => {
    if (tutorialStep === 3) {
      localStorage.setItem("tutorialCompleted", "true");
      setTutorialCompleted(true);
      setShowTutorialButton(true);
    }
  };

  const handleRestartTutorial = () => {
    setTutorialStep(1);
    setTutorialCompleted(false);
    setShowTutorialButton(false);
    localStorage.removeItem("tutorialCompleted");
  };

  useEffect(() => {
    const completed = localStorage.getItem("tutorialCompleted");
    if (completed === "true") {
      setTutorialCompleted(true);
    }
  }, []);

  return (
    <section className={`shop ${tutorialCompleted ? "no-opacity" : ""}`}>
      <Tutorial step={tutorialStep} />
      {tutorialCompleted && (
        <div className="tutorial-completed-message">
          <p>Tutoriel terminé, c'est à vous !</p>
          {showTutorialButton && (
            <img
              src={tutoButton}
              alt="Bouton Relancer le tutoriel"
              onClick={handleRestartTutorial}
              aria-hidden="true"
            />
          )}
        </div>
      )}
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
          <TvCanvas onClick={handleTvClick} />
          <TabletCanvas onClick={handleTabletClick} />
          {/* <ProductCanvas onClick={handleProductClick} /> */}
          <ambientLight intensity={2.5} />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Shop;
