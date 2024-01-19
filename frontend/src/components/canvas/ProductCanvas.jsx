import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function ProductCanvas({ cameraPosition }) {
  const { camera } = useThree();
  const navigate = useNavigate();

  useEffect(() => {
    if (cameraPosition === "prod") {
      gsap.to(camera.position, {
        duration: 3,
        x: -5.231,
        y: 0.886,
        z: -0.381,
      });
      gsap.to(camera.rotation, {
        duration: 3.2,
        x: 4.701,
        y: -5.312,
        z: -4.703,
        onComplete: () => {
          navigate("produits");
        },
      });
    }
  }, [cameraPosition, navigate]);
  return <> </>;
}

ProductCanvas.propTypes = {
  cameraPosition: PropTypes.string.isRequired,
};

export default ProductCanvas;
