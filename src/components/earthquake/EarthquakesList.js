import React, {useEffect, useState} from 'react';

const fetch = require("node-fetch");

const EarthquakeList = () => {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        if (places.length === 0) {
            fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02`)
                .then(response => response.json())
                .then(data => {
                        console.log(data);
                        setPlaces(data.features)
                        console.log(places);
                    }
                ).catch(err => {
                console.log(err)
            })
        }
    }, []);

    console.log("places: ", places);

    return (
        <>
            <p>Places list</p>
            {places.length === 0 &&
            <p>Not found</p>}
            {places.length > 0 &&
            <ul data-testid="placesList">list...</ul>}
        </>
    )
}

export default EarthquakeList;
