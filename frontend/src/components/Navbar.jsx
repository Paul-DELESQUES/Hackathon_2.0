import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/survey">Abonnements</Link>
    </nav>
  );
}

export default Navbar;