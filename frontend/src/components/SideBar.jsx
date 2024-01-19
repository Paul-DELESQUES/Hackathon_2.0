import React from "react";
import PropTypes from "prop-types";
import "../styles/sidebar.scss";

function SideBar({ setCameraPosition }) {
  return (
    <nav className="sidebar-ctn">
      <button
        type="button"
        className="sidebar-btn"
        onClick={() => setCameraPosition("default")}
      >
        Accueil
      </button>
      <button
        type="button"
        className="sidebar-btn"
        onClick={() => setCameraPosition("tv")}
      >
        TV
      </button>
      <button
        type="button"
        className="sidebar-btn"
        onClick={() => setCameraPosition("tablet")}
      >
        Tablette
      </button>
      <button
        type="button"
        className="sidebar-btn"
        onClick={() => setCameraPosition("prod")}
      >
        Produits
      </button>
    </nav>
  );
}

SideBar.propTypes = {
  setCameraPosition: PropTypes.func.isRequired,
};

export default SideBar;
