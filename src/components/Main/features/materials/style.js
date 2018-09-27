import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 120px;

  @media (min-width: 320px) and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const FeaturesImg = styled.img`
  width: 58px;
  height: 58px;

  @media (min-width: 320px) and (max-width: 768px) {
    display: none;
  }
`;

export const FeatureTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;
