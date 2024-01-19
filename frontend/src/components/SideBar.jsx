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
        Home
      </button>
      <button
        type="button"
        className="sidebar-btn"
        onClick={() => setCameraPosition("tv")}
      >
        tv
      </button>
      <button
        type="button"
        className="sidebar-btn"
        onClick={() => setCameraPosition("tablet")}
      >
        tablette
      </button>
      <button
        type="button"
        className="sidebar-btn"
        onClick={() => setCameraPosition("prod")}
      >
        products
      </button>
    </nav>
  );
}

SideBar.propTypes = {
  setCameraPosition: PropTypes.func.isRequired,
};

export default SideBar;
