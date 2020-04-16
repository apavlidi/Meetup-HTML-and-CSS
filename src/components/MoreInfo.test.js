import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";

import { MoreInfo } from "./MoreInfo.js";

describe("MoreInfo", () => {
  it("has a button to show more info", () => {
    const renderResult = render(<MoreInfo />);
    const button = renderResult.getByText("More info");
    expect(button).toBeInTheDocument();
  });
});
