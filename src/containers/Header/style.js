import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100%;

  @media (min-width: 320px) and (max-width: 768px) {
    flex-flow: column wrap;
  }
`;
