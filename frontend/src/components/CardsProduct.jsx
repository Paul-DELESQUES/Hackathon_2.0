import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";
import axios from "axios";
import "../styles/cardsProduct.scss";

function CardsProduct() {
  const [products, setProducts] = useState([]);
  console.info(products);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/product`)
      .then((response) => {
        const result = response.data;
        setProducts(result);
        console.info(result);
      })
      .catch((error) => {
        console.error("Erreur de la récupération des produits:", error);
      });
  }, []);

  /*   useEffect(() => {
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
  }, []); */

  return (
    <section className="cards">
      {products.map((product) => (
        <Tilt>
          <div key={product.id} className="card js-tilt" data-tilt>
            <div className="banner">
              <h2>{product.name}</h2>
            </div>
            <img src={product.picture} alt={product.name} />
            <div className="content">
              <div className="category">
                <h3>Catégorie</h3>
                <small>
                  {product.category} {product.sub_cat}
                </small>
              </div>
              <Link to={`${product.id}`} key="product.id" className="id-link">
                <button className="add-btn pop" type="button">
                  <span>Plus de détails</span>
                </button>
              </Link>
            </div>
          </div>
        </Tilt>
      ))}
    </section>
  );
}

export default CardsProduct;
