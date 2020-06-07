import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const WorldMap = () => {

    return (
        <div>
            <ComposableMap>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geo =>
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="white"
                            >
                                {console.log(geo)}</Geography>
                            )
                    }
                </Geographies>
            </ComposableMap>
        </div>
    );
};

export default WorldMap;
