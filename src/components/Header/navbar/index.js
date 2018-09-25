import React from "react";
import { NavbarContainer } from "./style";
import { Link } from "react-router-dom";

export default () => {
  return (
    <NavbarContainer>
      <Link to="features">Features</Link>
      <Link to="how-it-works">How It Works</Link>
      <Link to="pricing">Pricing</Link>
    </NavbarContainer>
  );
};
