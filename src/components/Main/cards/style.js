import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 100%;

  @media (min-width: 320px) and (max-width: 768px) {
    flex-flow: column wrap;

    width: 90%;
    align-items: center;
  }
`;
