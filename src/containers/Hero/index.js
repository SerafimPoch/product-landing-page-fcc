import React from "react";
import { HeroContainer } from "./style";
import Text from "../../components/Hero/text";
import Form from "../../components/Hero/form";

export default () => {
  return (
    <HeroContainer>
      <Text />
      <Form />
    </HeroContainer>
  );
};
