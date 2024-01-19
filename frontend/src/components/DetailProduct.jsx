import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/detailsProduct.scss";
import ReturnProduct from "./ReturnProduct";

function DetailProduct() {
  const [product, setProduct] = useState([]);
  console.info(product);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`)
      .then((response) => {
        const result = response.data;
        setProduct(result);
        console.info(result);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données:", error);
      });
  }, [id]);

  let imageSrc = "";

  if (product.id === 10) {
    imageSrc = "../src/assets/shampoo2.png";
  } else if (product.id === 11) {
    imageSrc = "../src/assets/shampoo3.png";
  } else if (product.id === 5) {
    imageSrc = "../src/assets/laque1.png";
  } else {
    imageSrc = `${product.id}`;
  }

  return (
    <>
      <ReturnProduct />
      <section className="details-section">
        {imageSrc && <img src={imageSrc} alt={product.name} />}
        <div className="details-parent-div">
          <h1>Détails du produit</h1>
          <h2>Description</h2>
          <p>{product.description}</p>
          <div className="grid-details-category">
            <div>
              <h2>Catégorie du produit</h2>
              <p>
                {product.category} {product.sub_cat}
              </p>
            </div>
            <div className="media-price-details">
              <h2>Prix</h2>
              <p>{product.price}€</p>
            </div>
            <button type="button" className="details-btn">
              Ajouter au panier
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailProduct;
