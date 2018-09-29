import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 35%;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    flex-flow: column wrap;
    align-items: center;
    margin-top: 10px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-flow: row wrap;
    margin-top: 0px;
    width: 45%;
  }
`;
