import React from "react";
import Trombone from "../../components/Header/trombone";
import Navbar from "../../components/Header/navbar";
import { HeaderContainer } from "./style";

export default () => {
  return (
    <HeaderContainer>
      <Trombone />
      <Navbar />
    </HeaderContainer>
  );
};
