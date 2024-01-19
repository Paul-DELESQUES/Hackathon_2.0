import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";
import axios from "axios";
import "../styles/cardsProduct.scss";

function CardsProduct() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortAscending = () => {
    setSortOrder("asc");
  };

  const handleSortDescending = () => {
    setSortOrder("desc");
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    }
    if (sortOrder === "desc") {
      return b.price - a.price;
    }
    return 0;
  });

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
      const filteredProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase()) ||
          product.sub_cat.toLowerCase().includes(search.toLowerCase())
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
  }, [products]); */

  return (
    <>
      <form
        className="searchBar"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
      >
        <div className="sortButtons">
          <button
            type="button"
            className={sortOrder === "asc" ? "active" : ""}
            onClick={handleSortAscending}
          >
            Tri croissant
          </button>
          <button
            type="button"
            className={sortOrder === "desc" ? "active" : ""}
            onClick={handleSortDescending}
          >
            Tri décroissant
          </button>
        </div>
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
        {sortedProducts.map((product) => (
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
                <div className="category">
                  <h3>Prix</h3>
                  <small>{product.price}€</small>
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
    </>
  );
}

export default CardsProduct;
