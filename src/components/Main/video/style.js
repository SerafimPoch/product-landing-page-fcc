import styled from "styled-components";

export const VideoBlock = styled.iframe`
  width: 60%;
  height: 360px;
  margin-bottom: 50px;
  margin-top: 50px;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    height: 260px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
    height: 360px;
  }
`;
