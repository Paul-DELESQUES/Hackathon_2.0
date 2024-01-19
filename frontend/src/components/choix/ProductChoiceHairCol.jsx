/*eslint-disable */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./productChoise.scss";

function ProductChoiceHairCol() {
  const [imageUrl, setImageUrl] = useState();
  const [imageUrl1, setImageUrl1] = useState();
  const [imageUrl2, setImageUrl2] = useState();
  const [imageUrl3, setImageUrl3] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/product/3`)
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
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/product/8`)
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
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/product/31`)
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
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/product/10`)
      .then((response) => {
        const result = response.data;
        setImageUrl3(result.picture);
      })
      .catch((error) => {
        console.error("Erreur de la récupération du produit:", error);
      });
  }, []);

  return (
    <div className="hairColor">
      <Link to="/products/3">
        <img className="hair" src={`${imageUrl}`} alt="hair color" />
      </Link>
      <Link to="/products/8">
        <img className="hair" src={`${imageUrl1}`} alt="hair color" />
      </Link>
      <Link to="/products/31">
        <img className="hair" src={`${imageUrl2}`} alt="hair color" />
      </Link>
      <Link to="/products/10">
        <img className="hair" src={`${imageUrl3}`} alt="hair color" />
      </Link>
    </div>
  );
}

export default ProductChoiceHairCol;
