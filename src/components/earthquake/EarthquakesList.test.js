import React from "react";
import {render} from "@testing-library/react";
import EarthquakesList from "./EarthquakesList";
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';
import "@testing-library/jest-dom";

describe('Earthquake List', function () {
    let renderResult;

    beforeEach(async () => {
        await renderResult = render(<EarthquakesList/>);
    })

    it('should display header', function () {
        const listComponent = renderResult.getByText("Places list");
        expect(listComponent).toBeInTheDocument();
    });

    it('should display not found when list is empty', function () {
        const listComponent = renderResult.getByText("Not found");
        expect(listComponent).toBeInTheDocument();
    });

    fit('should display the list of places when list is not empty', function () {
        const listComponent = renderResult.getByTestId("placesList");
        expect(listComponent).toBeInTheDocument();
    });


});






