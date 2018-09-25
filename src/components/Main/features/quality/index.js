import React from "react";
import battery from "../../../../img/battery.png";
import {
  SectionContainer,
  FeaturesImg,
  FeatureTextContainer
} from "../materials/style";

export default () => {
  return (
    <SectionContainer>
      <FeaturesImg src={battery} />
      <FeatureTextContainer>
        <h2>Quality Assurance</h2>
        <p>
          For every purchase you make, we will ensure there are no damages or
          faults and we will check and test the pitch of your instrument.
        </p>
      </FeatureTextContainer>
    </SectionContainer>
  );
};
