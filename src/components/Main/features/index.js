import React from "react";
import { FeaturesContainer } from "./style";
import Materials from "./materials";
import Shipping from "./shipping";
import Quality from "./quality";

export default () => {
  return (
    <FeaturesContainer id="features">
      <Materials />
      <Shipping />
      <Quality />
    </FeaturesContainer>
  );
};
