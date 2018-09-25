import React from "react";
import { Square, Header, Price, Text, ButtonSelect } from "../first/style";

export default () => {
  return (
    <Square>
      <Header>
        <p>BASS TROMBONE</p>
      </Header>
      <Price>$1200</Price>
      <Text>
        <p>Plays similar to a Trumpet</p>
        <p>Great for Jazz Bands</p>
        <p>Lorem ipsum dolor.</p>
        <p>Lorem ipsum.</p>
      </Text>
      <ButtonSelect>SELECT</ButtonSelect>
    </Square>
  );
};
