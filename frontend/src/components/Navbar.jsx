import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";

function Navbar() {
  return (
    <nav>
      <Link to="/shop">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/survey">Questionnaire</Link>
    </nav>
  );
}

export default Navbar;
