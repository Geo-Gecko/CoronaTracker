
function styling_function(key_, color_fn) {
  function style_(feature) {
    return {
      fillColor: color_fn(parseFloat(feature.properties[key_])),
      weight: 1,
      opacity: 1,
      color: 'black',
      dashArray: '0',
      fillOpacity: 1
    };
  }
  return style_
}

function createOverLayers() {

  let layers = {};

  Object.keys(overlayLayers).forEach(element => {

    layers[element] = L.geoJson(overlayLayers[element][0], {
      pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {
          pane: 'overlaysPane',
          radius: 4,
          fillOpacity: 1,
          color: 'black',
          fillColor: overlayLayers[element][1],
          weight: 0.6,
        });
      }
    });
  });

  return layers;
}

let layers = createOverLayers();

function createCountryLayers() {

  let layers = {};

  Object.keys(ugandaLayers).forEach(element => {

    let styling_fn = element === ("Contacts" || "Cases per District") ?
    ugandaLayers[element][3] : styling_function(
      ugandaLayers[element][3], ugandaLayers[element][1]
    );
  
    layers[element] = new L.geoJson(districts_data, {
      pane: 'choroplethPane',
      style: styling_fn
    });
  });

  return layers;
}

let countrylayers = createCountryLayers();

function add_overlay(element) {
  let layer_ = element.text
  highlight_button(element)
  Object.keys(overlayLayers).forEach(element => {
    map.removeLayer(layers[element]);
  });
  layers[layer_].addTo(map)
  Object.keys(layers[layer_]._layers).forEach(element => {
    let l = layers[layer_]._layers[element];
    OEF(l, layer_)
    border_sheet_data.forEach(element => {
      if (
        element.Border_cases && element.Border_cases != ""
        && element.Border == l.feature.properties.Name
      ) {
        l.setStyle({
          radius: element.Border_cases / 5,
          color: 'red',
          fill: false,
          weight: 3,
        })
      }
    });
  });
}

function add_ug_layer(element) {
  let layer_ = element.text
  addLegend(ugandaLayers[layer_][0], ugandaLayers[layer_][1], ugandaLayers[layer_][2]);
  highlight_button(element)
  Object.keys(countrylayers).forEach(element => {
    if (map.hasLayer(countrylayers[element])) {
      map.removeLayer(countrylayers[element]);
    }
  });
  countrylayers[layer_].addTo(map)
  let call_OEF_fn;
  if (layer_ === "Contacts") {
    call_OEF_fn = contacts_OEF
  } else {
    call_OEF_fn = OEF
  }
  Object.keys(countrylayers[layer_]._layers).forEach(element => {
    let l = countrylayers[layer_]._layers[element];
    call_OEF_fn(l, layer_)
  });

  let ug_layers_ = {
    "Cases per District": {
      element_keyword: "Cases", color_fn: getDistrictColor
    },
    "Risk Model": {
      element_keyword: "Risk", color_fn: getColormodel
    },
    "Cases per 100,000 people": {
      element_keyword: "cases_per_100000", color_fn: getColorugcasesratio
    },
  }
  if (Object.keys(ug_layers_).includes(layer_)) {
    Object.keys(countrylayers[layer_]._layers).forEach(element => {
      let l = countrylayers[layer_]._layers[element];
      border_sheet_data.forEach(element => {
        if (
          element[ug_layers_[layer_]["element_keyword"]] &&
          element[ug_layers_[layer_]["element_keyword"]] != "" &&
          element.District == l.feature.properties.DNama2017
        ) {
          l.setStyle({
            fillColor: ug_layers_[layer_]["color_fn"](
              element[ug_layers_[layer_]["element_keyword"]]
            ),
            weight: 1,
            opacity: 1,
            color: 'black',
            dashArray: '0',
            fillOpacity: 1
          })
        }
      });
    });
  }

  // change sidepanel and enable highlighting of districts in contacts layer
  if (layer_ === "Contacts") {
    countrylayers[layer_].on("click", onUgFeatureGroupClick);
    function onUgFeatureGroupClick(e) {
      if (!$("#messages").hasClass("sidebar-pane active")) {
        sidebar.open("messages")
        show_hamburg_button()
      }
      let group = e.target,
          layer = e.layer;

      group.setStyle({
        weight: 2, opacity: 2,
        color: '#000000b8', fillOpacity: 2.5,
        fillColor: '#AAA583'
      });
      layer.setStyle(highlight);
    }
  }
}
