import { render } from "@testing-library/react";
import * as React from "react";

import TextField from "./TextField";

describe("Textfield", () => {
  it("should render a label", () => {
    const { queryAllByText } = render(<TextField label="Textfield Label" />);
    expect(queryAllByText(/Textfield Label/)).toHaveLength(1);
  });
});
