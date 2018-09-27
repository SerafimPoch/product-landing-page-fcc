import React from "react";
import Trombone from "../../components/Header/trombone";
import Navbar from "../../components/Header/navbar";
import { HeaderContainer } from "./style";
import { Helmet } from "react-helmet";

export default () => {
  return (
    <HeaderContainer>
      <Helmet>
        <title>Product Landing Page</title>
      </Helmet>
      <Trombone />
      <Navbar />
    </HeaderContainer>
  );
};
