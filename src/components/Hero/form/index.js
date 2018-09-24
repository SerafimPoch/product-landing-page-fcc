import React from "react";
import { Form, GetStartedButton } from "./style";

export default () => {
  return (
    <Form>
      <input type="email" placeholder="enter your email adress" required />
      <GetStartedButton>GET STARTED</GetStartedButton>
    </Form>
  );
};
