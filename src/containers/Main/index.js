import React from "react";
import { MainContainer } from "./style";
import Features from "../../components/Main/features/";
import Video from "../../components/Main/video";
import Cards from "../../components/Main/cards";

export default () => {
  return (
    <MainContainer>
      <Features />
      <Video />
      <Cards />
    </MainContainer>
  );
};
