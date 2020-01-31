import * as React from "react";
import Button from "./";

export default {
  title: "Button"
};

const onClick = () => alert("Button was clicked!");

export const Primary = () => <Button onClick={onClick}>Test Button</Button>;
