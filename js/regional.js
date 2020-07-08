let regional_layers = {
    "Regional COVID 19 Cases": [
        [
            [0, 1, 50, 100, 1000], getRegionalColorCases, "Regional COVID 19 Cases"
        ], styleRegionalCases
    ],
    "Population": [
        [
            [1, 50, 100, 500, 1000], getRegionalPopulationColorCases, "Population"
        ], styleRegionalPopulationCases
    ],
}

function getRegionalColorCases(d) {
    return d > 1000 ? '#016c59' :
        d > 999 ? '#016c59' :
            d > 100 ? '#1c9099' :
                d > 99 ? '#1c9099' :
                    d > 50 ? '#67a9cf' :
                        d > 49 ? '#67a9cf' :
                            d > 10 ? '#bdc9e1' :
                                d > 9 ? '#bdc9e1' :
                                    d > 0 ? '#f6eff7' :
                                        d > -1 ? '#f6eff7' :
                                            d > null ? '#808080' :
                                                '#808080';
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

function getRegionalPopulationColorCases(d) {
    return d > 5000000 ? '#016c59' :
        d > 4000000 ? '#016c59' :
            d > 3000000 ? '#1c9099' :
                d > 1500000 ? '#1c9099' :
                    d > 500000 ? '#67a9cf' :
                        d > 250000 ? '#67a9cf' :
                            d > 100000 ? '#bdc9e1' :
                                d > 50000 ? '#bdc9e1' :
                                    d > 0 ? '#f6eff7' :
                                        d > -1 ? '#f6eff7' :
                                            d > null ? '#808080' :
                                                '#808080';
}

function styleRegionalPopulationCases(feature) {
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

    let layers = [];

    Object.keys(regional_layers).forEach(element => {

        layers[element] = new L.geoJson(region_data, {
            pane: 'choroplethPane',
            style: regional_layers[element][1],
            onEachFeature: function (feature, layer) {
                let district_name = layer.feature.properties.Name
                if (regional_sheet_data[district_name]) {
                    layer.bindPopup(
                        '<strong>Country:</strong> ' + layer.feature.properties.layer +
                        '<br>' + '<strong>Admin Unit Name:</strong> ' + district_name +
                        '<br>' + '<strong>COVID 19 Cases:</strong> ' + regional_sheet_data[district_name]["Cases"] +
                        '<br>' + '<strong>Population:</strong> ' + regional_sheet_data[district_name]["pop_density"]
                    );
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



function add_regional_layer(element) {
    let layer_ = element.text
    addLegend(regional_layers[layer_][0][0], regional_layers[layer_][0][1], regional_layers[layer_][0][2]);
    highlight_button(element)
    Object.keys(regionalLayers).forEach(element => {
        if (map.hasLayer(regionalLayers[element])) {
            map.removeLayer(regionalLayers[element]);
        }
    });
    regionalLayers[layer_].addTo(map);
    /*Not Neccesary until there are multiple regionalLayers"*/
    // Object.keys(regional_layers[layer_]._layers).forEach(element => {
    //     let l = regional_layers[layer_]._layers[element];
    //     OEF(l, layer_)
    // });
}