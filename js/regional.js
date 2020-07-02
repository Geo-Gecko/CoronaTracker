let regional_layers = {
    "Regional Cases": [
        [
            [0, 20, 40, 60, 80], getRegionalColorCases, "Regional Cases"
        ], styleRegionalCases
    ],
    "Population Cases": [
        [
            [0, 500000, 1000000, 3000000, 5000000], getRegionalPopulationColorCases, "Population Cases"
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
        fillColor: getRegionalColorCases(parseFloat(feature.properties.Book1_Case)),
        weight: 1,
        opacity: 1,
        color: 'black',
        dashArray: '0',
        fillOpacity: 1
    };
}

function getRegionalPopulationColorCases(d) {
    console.log(d)
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
        fillColor: getRegionalPopulationColorCases(parseFloat(feature.properties.pop_cases_.replace(',', ""))),
        weight: 1,
        opacity: 1,
        color: 'black',
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
                layer.bindPopup(
                    '<strong>Country:</strong> ' + layer.feature.properties.layer +
                    '<br>' + '<strong>Admin Unit Name:</strong> ' + layer.feature.properties.Name +
                    '<br>' + '<strong>Cases:</strong> ' + layer.feature.properties.Book1_Case +
                    '<br>' + '<strong>Population Cases:</strong> ' + layer.feature.properties.pop_cases_
                );
                layer.on('mouseover', function (e) {
                    this.openPopup();
                });
                layer.on('mouseout', function (e) {
                    this.closePopup();
                });
            }
        });
    });

    return layers;
}

let regionalLayers = createRegionalLayers();


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