import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/detailsProduct.scss";

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

  return (
    <section className="details-section">
      <img src={product.picture} alt={product.name} />
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
          <div>
            <h2>Prix</h2>
            <p>Prix: {product.price}€</p>
          </div>
          <button type="button" className="details-btn">
            Ajouter au panier
          </button>
        </div>
      </div>
      <h2>Produits susceptible de vous plaire</h2>
      <ul>
        <li>
          <img src={product.picture} alt="" />
          <p>Prix: 5.99€</p>
        </li>
      </ul>
    </section>
  );
}

export default DetailProduct;
