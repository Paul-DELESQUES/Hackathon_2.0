import React, { useEffect, useState } from "react";
import axios from "axios";
import VanillaTilt from "vanilla-tilt";
import "../styles/cardsProduct.scss";

function CardsProduct() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  console.info(products);

  const onChange = (event) => {
    setSearch(event.target.value);
  };

  const onSearch = () => {
    // Si la barre de recherche est vide, réinitialisez la liste des produits
    if (!search.trim()) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/product`)
        .then((response) => {
          const result = response.data;
          setProducts(result);
        })
        .catch((error) => {
          console.error("Erreur de la récupération des produits:", error);
        });
    } else {
      // Sinon, filtrez les produits en fonction du terme de recherche
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );

      // Mettez à jour la liste des produits avec les résultats de la recherche
      setProducts(filteredProducts);
    }
  };

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
    <>
      <form
        className="searchBar"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
      >
        <input
          type="text"
          value={search}
          onChange={onChange}
          placeholder="Rechercher un produit..."
          className="searchInput"
        />
        <button type="submit" className="searchButton">
          Rechercher
        </button>
      </form>
      <section className="cards">
        {products.map((product) => (
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
              <h3>Quantité restante</h3>
              <div className="quantity-parent">
                <p className="quantity">{product.quantity_total}</p>
              </div>
              <button className="add-btn pop" type="button">
                <span>Ajouter au panier</span>
                <span>{product.price}€</span>
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default CardsProduct;
