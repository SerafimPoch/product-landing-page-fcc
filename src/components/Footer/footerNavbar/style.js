import styled from "styled-components";

export const FooterNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 20%;
  margin-right: 30px;
  padding-top: 15px;
  margin-bottom: 15px;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 80%;
    margin-right: 10px;
    padding-top: 0px;
    margin-bottom: 0px;
  }
`;
