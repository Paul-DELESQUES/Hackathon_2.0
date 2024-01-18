import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import "../styles/cardsProduct.scss";
import lipStick from "../assets/products/rouge_a_levres-removebg-preview.png";
import foundation from "../assets/products/foundation_oreal-removebg-preview.png";

function CardsProduct() {
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
      <div className="card js-tilt" data-tilt>
        <div className="banner">
          <h2>Rouge à Lèvre</h2>
        </div>
        <img src={lipStick} alt="Rouge à lèvre" />
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
            <span>29.99€</span>
          </button>
        </div>
      </div>
      <div className="card js-tilt" data-tilt>
        <div className="banner">
          <h2>Fond de teint en Poudre</h2>
        </div>
        <img
          src={foundation}
          alt="Fond de teint en Poudre"
          className="foundation"
        />
        <div className="content">
          <div className="details">
            <h3>Détails Produits</h3>
            <small>Couleur: brun</small>
            <small>durée: 8 semaines</small>
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
            <span>29.99€</span>
          </button>
        </div>
      </div>
      <div className="card js-tilt" data-tilt>
        <div className="banner">
          <h2>Fond de teint en Poudre</h2>
        </div>
        <img
          src={foundation}
          alt="Fond de teint en Poudre"
          className="foundation"
        />
        <div className="content">
          <div className="details">
            <h3>Détails Produits</h3>
            <small>Couleur: brun</small>
            <small>durée: 8 semaines</small>
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
            <span>29.99€</span>
          </button>
        </div>
      </div>
      <div className="card js-tilt" data-tilt>
        <div className="banner">
          <h2>Fond de teint en Poudre</h2>
        </div>
        <img
          src={foundation}
          alt="Fond de teint en Poudre"
          className="foundation"
        />
        <div className="content">
          <div className="details">
            <h3>Détails Produits</h3>
            <small>Couleur: brun</small>
            <small>durée: 8 semaines</small>
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
            <span>29.99€</span>
          </button>
        </div>
      </div>
      <div className="card js-tilt" data-tilt>
        <div className="banner">
          <h2>Fond de teint en Poudre</h2>
        </div>
        <img
          src={foundation}
          alt="Fond de teint en Poudre"
          className="foundation"
        />
        <div className="content">
          <div className="details">
            <h3>Détails Produits</h3>
            <small>Couleur: brun</small>
            <small>durée: 8 semaines</small>
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
            <span>29.99€</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CardsProduct;
