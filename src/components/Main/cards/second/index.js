import React from "react";
import { Square, Header, Price, Text, ButtonSelect } from "../first/style";

export default () => {
  return (
    <Square>
      <Header>
        <p>BASS TROMBONE</p>
      </Header>
      <Price>$900</Price>
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
