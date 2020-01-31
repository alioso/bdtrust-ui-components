import { render } from "@testing-library/react";
import * as React from "react";

import Button from "./Button";

describe("Abuse ticket banner", () => {
  it("should render a banner for an abuse ticket", () => {
    const { queryAllByText } = render(<Button>A Button</Button>);
    expect(queryAllByText(/A Button/)).toHaveLength(1);
  });
});
