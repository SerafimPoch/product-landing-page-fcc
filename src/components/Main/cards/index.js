import React from "react";
import First from "./first";
import Second from "./second";
import Third from "./third";
import { CardsContainer } from "./style";

export default () => {
  return (
    <CardsContainer>
      <First />
      <Second />
      <Third />
    </CardsContainer>
  );
};
