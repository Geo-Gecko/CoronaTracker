let regional_layers = {
    "Regional COVID 19 Cases": [
        [
            [0, 1, 50, 100, 1000], getRegionalColorCases, "Regional COVID 19 Cases"
        ], styleRegionalCases
    ],
    "Population Density": [
        [
            [1, 10, 50, 100, 500], getRegionalPopulationColorCases, "Population Density"
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
        d > 1 ? '#bdc9e1' :
        d > 0.1 ? '#bdc9e1' :
        d > 0 ? '#ffffff' :
        d > -1 ? '#ffffff' :
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
    return d > 500 ? '#993404' :
        d > 499 ? '#993404' :
        d > 100 ? '#d95f0e' :
        d > 99 ? '#d95f0e' :
        d > 50 ? '#fe9929' :
        d > 49 ? '#fe9929' :
        d > 10 ? '#fed98e' :
        d > 9 ? '#fed98e' :
        d > 1 ? '#ffffd4' :
        d > 0 ? '#ffffd4' :
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