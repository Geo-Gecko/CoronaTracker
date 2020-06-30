let regional_layers = {
    "Regional Cases": [
        [
            [0, 20, 40, 60, 80], /*getColorwater*/, "Regional Cases"
        ], //stylewater
    ],
}

function getRegionalColorcases(d) {
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
      fillColor: getColormodel(parseFloat(feature.properties.Book1_Cases)),
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
            style: styleRegionalCases,
            onEachFeature: function (feature, layer) {
                layer.bindPopup(
                    '<strong>Country:</strong> ' + layer.feature.properties.layer +
                    '<br>' + '<strong>Admin Unit Name:</strong> ' + layer.feature.properties.Name +
                    '<br>' + '<strong>Cases:</strong> ' + layer.feature.properties.Book1_Cases
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
    console.log(element)
    console.log('hello');
    let layer_ = element.text
    // addLegend(regional_layers[layer_][0][0], regional_layers[layer_][0][1], regional_layers[layer_][0][2]);
    highlight_button(element)
    Object.keys(regionalLayers).forEach(element => {
        if (map.hasLayer(regionalLayers[element])) {
            map.removeLayer(regionalLayers[element]);
        }
    });
    regionalLayers[layer_].addTo(map)
    // Object.keys(regional_layers[layer_]._layers).forEach(element => {
    //     let l = regional_layers[layer_]._layers[element];
    //     OEF(l, layer_)
    // });
}