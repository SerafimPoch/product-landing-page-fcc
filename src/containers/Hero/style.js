import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  max-height: 200px;
  margin-top: 110px;

  @media (min-width: 320px) and (max-width: 768px) {
    margin-top: 170px;
    text-align: center;
  }
`;
