import React from "react";
import car from "../../../../img/car.png";
import {
  SectionContainer,
  FeaturesImg,
  FeatureTextContainer
} from "../materials/style";

export default () => {
  return (
    <SectionContainer>
      <FeaturesImg src={car} />
      <FeatureTextContainer>
        <h2>Fast Shipping</h2>
        <p>
          We make sure you recieve your trombone as soon as we have finished
          making it. We also provide free returns if you are not satisfied.
        </p>
      </FeatureTextContainer>
    </SectionContainer>
  );
};
