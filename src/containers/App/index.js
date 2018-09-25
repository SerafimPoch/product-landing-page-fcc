import React from "react";
import Header from "../Header";
import Hero from "../Hero";
import Main from "../Main";
import { Container } from "./style";

export default () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Main />
    </Container>
  );
};
