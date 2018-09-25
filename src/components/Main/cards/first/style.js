import styled from "styled-components";

export const Square = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  width: 30%;
  height: 100%;
`;

export const Header = styled.div`
  width: 100%;
  background-color: #ddd;
  text-align: center;
  font-weight: 700;

  p {
    padding: 10px;
  }
`;

export const Price = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Text = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const ButtonSelect = styled.button`
  padding: 0 20px;
  height: 40px;
  font-size: 1em;
  font-weight: 900;
  background-color: #f1c40f;
  font-weight: 400;
  cursor: pointer;
  margin-bottom: 20px;
`;
