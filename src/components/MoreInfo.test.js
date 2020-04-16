import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { MoreInfo } from "./MoreInfo.js";

describe("MoreInfo", () => {
  let renderResult;
  let button;

  beforeEach(() => {
    renderResult = render(<MoreInfo />);
    button = renderResult.getByText("More info");
  });

  it("only shows a button initially", () => {
    expect(button).toBeInTheDocument();

    const moreInfoSection = renderResult.queryByText("More info...");
    expect(moreInfoSection).not.toBeInTheDocument();
  });

  describe("When the button is clicked", () => {
    beforeEach(() => {
      fireEvent.click(button);
    });

    it("more info is show", () => {
      const moreInfoSection = renderResult.queryByText("More info...");
      expect(moreInfoSection).toBeInTheDocument();
    });
  });
});
