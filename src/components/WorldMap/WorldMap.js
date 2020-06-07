import React, {useState, useEffect} from "react";
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";
import {scaleQuantile} from "d3-scale";


const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const WorldMap = (props) => {

    const[scale, setScale] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const modifiedResponse = Object.keys(props.regions).map((key) => (
            {
                name: props.regions[key].name,
                total_cases: props.regions[key].total_cases,
                active_cases: props.regions[key].active_cases,
                deaths: props.regions[key].deaths,
                recovered: props.regions[key].recovered,
                ISO_A2: props.regions[key].iso3166a2
            }));

        setData(modifiedResponse);


        let temp = [];
        modifiedResponse.map(region => temp.push(region.total_cases));
        setScale(temp);
    }, [props.regions]);

    const colorScale = scaleQuantile()
        .domain(scale)
        .range([
            "#ffedea",
            "#ffcec5",
            "#ffad9f",
            "#ff8a75",
            "#ff5533",
            "#e2492d",
            "#be3d26",
            "#9a311f",
            "#782618"
        ]);

    return (
        <div>
            <ComposableMap data-tip="">
                <ZoomableGroup>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                const cur = data.find(s => (s.ISO_A2 === geo.properties.ISO_A2));
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={cur ? colorScale(cur.total_cases) : "#eee"}
                                        onMouseEnter={() => {
                                            props.setTooltip(cur ?
                                                "<b>" +cur.name + "</b>" +
                                                "<br/>Total Cases: " + cur.total_cases.toLocaleString() +
                                                "<br/>Recovered: " + cur.recovered.toLocaleString() +
                                                "<br/>Deaths: " + cur.deaths.toLocaleString()
                                                : "");
                                        }}
                                        onMouseLeave={() => {
                                            props.setTooltip("");
                                        }}
                                        style={{
                                            hover: {
                                                outline: "none",
                                                stroke: "#782618"
                                            }
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
};

export default WorldMap;
