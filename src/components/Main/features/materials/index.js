import React from "react";
import flame from "../../../../img/burn.png";
import { SectionContainer, FeaturesImg, FeatureTextContainer } from "./style";

export default () => {
  return (
    <SectionContainer>
      <FeaturesImg src={flame} />
      <FeatureTextContainer>
        <h2>Premium Materials</h2>
        <p>
          Our trombones use the shiniest brass which is sourced locally. This
          will increase the longevity of your purchase.
        </p>
      </FeatureTextContainer>
    </SectionContainer>
  );
};
