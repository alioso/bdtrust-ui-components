import classNames from "classnames";
import * as React from "react";

export interface Props {
  children: any;
  classes?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = props => {
  const { children, classes, onClick } = props;

  return (
    <button
      className={classNames(
        {
          ["my-2"]: true
        },
        classes
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
