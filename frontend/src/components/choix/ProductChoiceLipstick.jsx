/*eslint-disable */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./productChoise.scss";

function ProductChoise() {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/product/15`)
      .then((response) => {
        const result = response.data;
        setImageUrl(result.picture);
      })
      .catch((error) => {
        console.error("Erreur de la récupération des produits:", error);
      });
  }, []);

  return (
    <div className="productmakeup">
      <Link to="/produits/15">
        <img
          className="lolo"
          src={`${imageUrl}`}
          alt="un rouge à lèvres de couleur violet"
        />
      </Link>
    </div>
  );
}

export default ProductChoise;
