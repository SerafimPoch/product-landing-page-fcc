import React from "react";
import { FooterNavbar } from "./style";
import { Link } from "react-router-dom";

export default () => {
  return (
    <FooterNavbar>
      <Link to="privacy">Privacy</Link>
      <Link to="terms">Terms</Link>
      <Link to="contact">Contact</Link>
    </FooterNavbar>
  );
};
