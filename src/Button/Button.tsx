import * as React from "react";

import "./Button.css";

export interface Props {
  children: any;
  classes?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = props => {
  const { children, classes, onClick } = props;

  return (
    <button className={"my-2" + (classes || "")} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
