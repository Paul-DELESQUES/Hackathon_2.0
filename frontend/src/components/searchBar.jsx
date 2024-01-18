import React, { useState } from "react";
import PropTypes from "prop-types";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Rechercher un produit..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.shape().isRequired,
};

export default SearchBar;
