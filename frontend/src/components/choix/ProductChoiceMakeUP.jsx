/*eslint-disable */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./productChoise.scss";

function ProductChoiceMakeup() {
  const [imageUrl, setImageUrl] = useState();
  const [imageUrl1, setImageUrl1] = useState();
  const [imageUrl2, setImageUrl2] = useState();
  const [imageUrl3, setImageUrl3] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/product/27`)
      .then((response) => {
        const result = response.data;
        setImageUrl(result.picture);
      })
      .catch((error) => {
        console.error("Erreur de la récupération du produit:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/product/17`)
      .then((response) => {
        const result = response.data;
        setImageUrl1(result.picture);
      })
      .catch((error) => {
        console.error("Erreur de la récupération du produit:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/product/13`)
      .then((response) => {
        const result = response.data;
        setImageUrl2(result.picture);
      })
      .catch((error) => {
        console.error("Erreur de la récupération du produit:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/product/23`)
      .then((response) => {
        const result = response.data;
        setImageUrl3(result.picture);
      })
      .catch((error) => {
        console.error("Erreur de la récupération du produit:", error);
      });
  }, []);

  return (
    <div className="productmakeup">
      <Link to="/products/27">
        <img className="lolo" src={`${imageUrl}`} alt="a makeup tool" />
      </Link>
      <Link to="/products/17">
        <img className="lolo" src={`${imageUrl1}`} alt="a makeup tool" />
      </Link>
      <Link to="/products/13">
        <img className="lolo" src={`${imageUrl2}`} alt="a makeup tool" />
      </Link>
      <Link to="/products/23">
        <img className="lolo" src={`${imageUrl3}`} alt="a makeup tool" />
      </Link>
    </div>
  );
}

export default ProductChoiceMakeup;
