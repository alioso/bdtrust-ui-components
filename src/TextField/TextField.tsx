import * as React from "react";

import "./TextField.css";

export interface Props {
  label: string;
  classes?: string;
}

const TextField: React.FC<Props> = props => {
  const { label, classes } = props;

  return (
    <>
      <label>{label}</label>
      <input type="text" className={`popopopopopopopo ${classes}`} />
    </>
  );
};

export default TextField;
