import React, { useEffect, useState } from "react";
import axios from "axios";
import VanillaTilt from "vanilla-tilt";
import "../styles/cardsProduct.scss";

function CardsProduct() {
  const [products, setProducts] = useState([]);
  console.info(products);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/products`)
      .then((response) => {
        const result = response.data;
        setProducts(result);
        console.info(result);
      })
      .catch((error) => {
        console.error("Erreur de la récupération des produits:", error);
      });
  }, []);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".js-tilt"), {
      max: 25,
      speed: 400,
    });

    const sizes = document.querySelectorAll(".size");

    const handleClick = (index) => {
      sizes.forEach((size, i) => {
        size.classList.remove("active");
        if (i === index) {
          size.classList.add("active");
        }
      });
    };

    sizes.forEach((size, index) => {
      size.addEventListener("click", () => handleClick(index));
    });

    return () => {
      sizes.forEach((size, index) => {
        size.removeEventListener("click", () => handleClick(index));
      });
    };
  }, []);

  return (
    <section className="cards">
      {products.map((product) => (
        <div key={product.id} className="card js-tilt" data-tilt>
          <div className="banner">
            <h2>{product.name}</h2>
          </div>
          <img src={product.image} alt={product.name} />
          <div className="content">
            <div className="details">
              <h3>Détails Produits</h3>
              <small>Couleur: rouge</small>
              <small>durée: 4 semaines</small>
            </div>
            <div className="sizes">
              <h3>Sélectionne la quantité</h3>
              <ul>
                <li className="size">1</li>
                <li className="size">2</li>
                <li className="size">3</li>
              </ul>
            </div>
            <button className="cart pop" type="button">
              <span>Ajouter au panier</span>
              <span>{product.price}€</span>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default CardsProduct;
