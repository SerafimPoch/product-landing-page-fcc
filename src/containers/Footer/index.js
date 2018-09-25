import React from "react";
import { FooterContainer } from "./style";
import Adress from "../../components/Footer/adress/";
import FooterNavbar from "../../components/Footer/footerNavbar";

export default () => {
  return (
    <FooterContainer>
      <FooterNavbar />
      <Adress />
    </FooterContainer>
  );
};
