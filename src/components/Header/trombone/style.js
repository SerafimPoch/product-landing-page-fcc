import styled from "styled-components";

export const TromboneImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  max-width: 300px;
  margin-left: 20px;

  @media (min-width: 320px) and (max-width: 768px) {
    margin-left: 0px;
  }
`;
