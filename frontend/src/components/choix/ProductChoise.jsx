/*eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductChoise() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/product/3`)
      .then((response) => {
        const result = response.data;
        console.log(result);
        setImageUrl(result.picture);
      })
      .catch((error) => {
        console.error("Erreur de la récupération des produits:", error);
      });
  }, []);

  return (
    <div className="hairColor">
      <Link to="/products/3">
        <img className="hair" src={`${imageUrl}`} alt="blonde color" />
      </Link>
    </div>
  );
}

export default ProductChoise;
