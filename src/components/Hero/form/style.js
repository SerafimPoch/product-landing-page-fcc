import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-top: 15px;
`;

export const GetStartedButton = styled.button`
  max-width: 150px;
  width: 100%;
  height: 30px;
  margin: 15px 0;
  border: 0;
  background-color: #f1c40f;
  font-size: 1em;
  font-weight: 900;
  cursor: pointer;

  &:hover {
    background-color: orange;
  }
`;
