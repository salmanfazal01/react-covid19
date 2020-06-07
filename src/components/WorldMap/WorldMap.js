import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const WorldMap = (props) => {

    const fillColor = (country="usa") => {
        if (props.regions.usa && country in props.regions) {
            const total_cases = props.summary.total_cases;
            const country_cases = props.regions[country].active_cases;
            const percentage = (country_cases / total_cases) * 1;
            console.log(percentage);

            return "rgba(255, 0, 0, " + percentage*10 + ")";
        } else {
            return "red"
        }

    };

    return (
        <div>
            <ComposableMap>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geo =>
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={fillColor(geo.properties.NAME.toLowerCase())}
                            ></Geography>
                            )
                    }
                </Geographies>
            </ComposableMap>
        </div>
    );
};

export default WorldMap;
