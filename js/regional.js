let regional_layers = {
    "COVID 19 Cases": [
        [
            [0, 1, 50, 100, 500], getRegionalColorCases, "Regional COVID 19 Cases"
        ], styleRegionalCases
    ],
    "COVID 19 Deaths": [
        [
            [0, 1, 10, 50, 100], getRegionalColordeaths, "Regional COVID 19 Deaths"
        ], styleRegionalDeaths
    ],
    "Population Density": [
        [
            [1, 10, 50, 100, 500], getRegionalPopulationColorCases, "Population Density"
        ], styleRegionalPopulationDensity
    ],
}

function styleRegionalCases(feature) {
    return {
        fill: feature.properties.COUNTRY ? false : true,
        fillColor: regional_sheet_data[feature.properties.Name] ? getRegionalColorCases(
            parseFloat(regional_sheet_data[feature.properties.Name]["Cases"])
        ) : "#808080",
        weight: 1,
        opacity: 1,
        color: feature.properties.COUNTRY ? "black" : '#6c757d',
        dashArray: '0',
        fillOpacity: 1
    };
}

function styleRegionalDeaths(feature) {
    return {
        fill: feature.properties.COUNTRY ? false : true,
        fillColor: regional_sheet_data[feature.properties.Name] ? getRegionalColordeaths(
            parseFloat(regional_sheet_data[feature.properties.Name]["Deaths"])
        ) : "#808080",
        weight: 1,
        opacity: 1,
        color: feature.properties.COUNTRY ? "black" : '#6c757d',
        dashArray: '0',
        fillOpacity: 1
    };
}


function styleRegionalPopulationDensity(feature) {
    return {
        fill: feature.properties.COUNTRY ? false : true,
        fillColor: regional_sheet_data[feature.properties.Name] ? getRegionalPopulationColorCases(
            parseFloat(regional_sheet_data[feature.properties.Name]["pop_density"].replace(',', ""))
        ) : "#808080",
        weight: 1,
        opacity: 1,
        color: feature.properties.COUNTRY ? "black" : '#6c757d',
        dashArray: '0',
        fillOpacity: 1
    };
}

function createRegionalLayers() {

    let layers = {};

    Object.keys(regional_layers).forEach(element => {

        layers[element] = new L.geoJson(region_data, {
            pane: 'choroplethPane',
            style: regional_layers[element][1],
            onEachFeature: function (feature, layer) {
                let district_name = layer.feature.properties.Name
                let country_ = layer.feature.properties.layer
                country_ = country_ ?
                    country_[0].toUpperCase() + country_.slice(start = 1) : country_;

                if (regional_sheet_data[district_name]) {
                    let popup_lines =
                        `<strong>Country:</strong> ${country_}
                        <br><strong>Admin Unit Name:</strong> ${district_name}
                        <br><strong>COVID 19 Cases:</strong>
                            ${regional_sheet_data[district_name]["Cases"]}
                        <br><strong>Population Density:</strong>
                            ${regional_sheet_data[district_name]["pop_density"]}`
                    popup_lines += element === "COVID 19 Deaths" ?
                        `<br><strong>Deaths:</strong> ${regional_sheet_data[district_name]["Deaths"]}` : ""
                    layer.bindPopup(popup_lines);
                    layer.on('mouseover', function (e) {
                        this.openPopup();
                    });
                    layer.on('mouseout', function (e) {
                        this.closePopup();
                    });
                }
            }
        });
    });

    return layers;
}


let regional_overlays = {
    "Border Cases": [
        region_border_points, "#cccc09", , , {
            "Border Name": "Name"
        }
    ]
}

let regional_overlay_layers = {};

Object.keys(regional_overlays).forEach(element => {
    regional_overlay_layers[element] = L.geoJson(regional_overlays[element][0], {
        pointToLayer: function (feature, latlng) {
            return new L.CircleMarker(latlng, {
                pane: 'overlaysPane',
                fill: false,
                radius: 4,
                fillOpacity: 1,
                color: 'black',
                fillColor: regional_overlays[element][1],
                weight: 0.6,
            });
        }
    });
});

function add_regional_layer(element) {
    let layer_ = element.text
    highlight_button(element)
    Object.keys(regional_overlay_layers).forEach(element => {
        if (map.hasLayer(regional_overlay_layers[element])) {
            map.removeLayer(regional_overlay_layers[element]);
        }
    });
    if (layer_ !== "Border Cases") {
        Object.keys(regionalLayers).forEach(element => {
            if (map.hasLayer(regionalLayers[element])) {
                map.removeLayer(regionalLayers[element]);
            }
        });
        addLegend(
            regional_layers[layer_][0][0], regional_layers[layer_][0][1],
            regional_layers[layer_][0][2]
        );
        regionalLayers[layer_].addTo(map);
    } else {

        regional_overlay_layers[layer_].addTo(map)

        Object.keys(regional_overlay_layers[layer_]._layers).forEach(element => {
            let l = regional_overlay_layers[layer_]._layers[element];

            OEF(l, layer_)
            Object.keys(regional_sheet_data).forEach(element => {
                if (
                    regional_sheet_data[element]["border_cases"] &&
                    regional_sheet_data[element]["border_cases"] != "" &&
                    regional_sheet_data[element]["border"] == l.feature.properties.Name
                ) {
                    l.setStyle({
                        radius: regional_sheet_data[element]["border_cases"] / 5,
                        color: 'red',
                        fillOpacity: 0,
                        weight: 3,
                    })
                }
            });
        });
    }
    /*Not Neccesary until there are multiple regionalLayers"*/
    // Object.keys(regional_layers[layer_]._layers).forEach(element => {
    //     let l = regional_layers[layer_]._layers[element];
    //     OEF(l, layer_)
    // });
}