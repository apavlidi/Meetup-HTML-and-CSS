import React from "react";
import ReactDOM from "react-dom";
import {MoreInfo} from "./components/MoreInfo";
import EarthquakesList from "./components/earthquake/EarthquakesList";

ReactDOM.render(
    <>
        <EarthquakesList/>
        <MoreInfo/>
    </>
    , document.getElementById("root"));
