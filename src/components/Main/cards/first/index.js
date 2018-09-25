import React from "react";
import { Square, Header, Price, Text, ButtonSelect } from "./style";

export default () => {
  return (
    <Square>
      <Header>
        <p>TENOR TROMBONE</p>
      </Header>
      <Price>$600</Price>
      <Text>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum dolor.</p>
        <p>Lorem ipsum.</p>
      </Text>
      <ButtonSelect>SELECT</ButtonSelect>
    </Square>
  );
};
