import React from "react";
import { shallow } from "enzyme";

import Button from "./Button";

describe("Test Component", () => {
  let props: any;

  beforeEach(() => {
    props = {
      theme: "primary"
    };
  });

  const renderWrapper = () => shallow(<Button {...props} />);

  describe("Snapshots", () => {
    it("should match snapshots as primary themed", () => {
      expect(renderWrapper()).toMatchSnapshot();
    });
  });
});
