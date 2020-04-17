import React from "react";
import {render} from "@testing-library/react";
import EarthquakesList from "./EarthquakesList";
import "@testing-library/jest-dom";

describe('Earthquake List', function () {

    it('should display header', function () {
        let renderResult = render(<EarthquakesList/>);
        const listComponent = renderResult.getByText("Places list");
        expect(listComponent).toBeInTheDocument();
    });
});




