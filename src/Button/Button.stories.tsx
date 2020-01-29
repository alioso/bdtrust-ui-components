import * as React from "react";
import Button from "./Button";

export default {
  title: "Button"
};

export const Primary = () => (
  <Button onClick={() => alert("Button was clicked!")}>Test Button</Button>
);
