import React from "react";
import { MainContainer } from "./style";
import Features from "../../components/Main/features/";
import Video from "../../components/Main/video";

export default () => {
  return (
    <MainContainer>
      <Features />
      <Video />
    </MainContainer>
  );
};
