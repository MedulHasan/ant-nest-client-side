/* eslint-disable import/no-webpack-loader-syntax */
import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
mapboxgl.accessToken =
    "pk.eyJ1IjoibWVkdWwiLCJhIjoiY2t2MGg2YmZ2NXEyejJvb2YxYTEwd2loZyJ9.hKnxOEj7TCozxfCP5eIiIw";

const MapDirections = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [90.4118576, 23.7455959],
            zoom: 13,
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken,
            }),
            "top-left"
        );

        const geojson = {
            type: "FeatureCollection",
            features: [
                {
                    type: "Feature",
                    geometry: {
                        type: "Point",
                        coordinates: [90.4118576, 23.7455959],
                    },
                    properties: {
                        title: "Mouchak Market",
                        description: "Shiddheswari, Dhaka - 1217",
                    },
                },
            ],
        };

        // add markers to map
        for (const feature of geojson.features) {
            // create a HTML element for each feature
            const el = document.createElement("div");
            el.className = "marker";

            // make a marker for each feature and add to the map
            new mapboxgl.Marker(el)
                .setLngLat(feature.geometry.coordinates)
                .setPopup(
                    new mapboxgl.Popup({ offset: 25 }) // add popups
                        .setHTML(
                            `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
                        )
                )
                .addTo(map);
        }
    }, []);
    return (
        <div>
            <div id='map'></div>
        </div>
    );
};

export default MapDirections;
