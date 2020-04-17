
function getColorcases(d) {
  return d > 67.4 ? '#fde725' :
    d > 2.9 ? '#5dc962' :
      d > 1.3 ? '#20908d' :
        d > 0.4 ? '#3a528b' :
          d > 0.1 ? '#440154' :
            d > 0 ? '#f1eef6' :
              '#ffffff00';
}


let cases_concn_layer = () => {
  if (african_data._map) {
    map.removeLayer(african_data)
  }
  let cases_concn_obj = {}
  google_sheet_data.forEach(object_ => {
    cases_concn_obj[object_["COUNTRY"]] = [
      object_["POP"],
      object_["CASES"],
      object_["CASES_PER_100,000"]
    ]
  })

  african_data = L.geoJson(africa_data, {
    style: stylecases
  }).addTo(map);

  african_data.eachLayer(function (layer) {
    let country_ = layer.feature.properties.COUNTRY;
    layer.bindPopup(
      '<strong>Country:</strong> ' + country_
      + '<br>' + '<strong>Population:</strong> ' + cases_concn_obj[country_][0]
      + '<br>' + '<strong>Cases:</strong> ' + cases_concn_obj[country_][1]
      + '<br>' + '<strong>Cases per 100,000 people:</strong> ' + cases_concn_obj[country_][2]
    );
    layer.on('mouseover', function (e) {
      this.openPopup();
    });
    layer.on('mouseout', function (e) {
      this.closePopup();
    });
  });

  function stylecases(feature) {
    return {
      fillColor: getColorcases(parseFloat(cases_concn_obj[feature.properties.COUNTRY][2].split(",").join(""))),
      weight: 1,
      opacity: 1,
      color: 'black',
      dashArray: '0',
      fillOpacity: 1
    };
  }

  let legend_parent = document.getElementsByClassName("legend")[0]
  if (legend_parent.childNodes.length > 1) {
    legend_parent.removeChild(legend_parent.childNodes[1])
  }
  let legend_child = document.createElement("IMG")
  legend_child.setAttribute("src", "images/cases_legend.png");
  legend_child.setAttribute("class", "cases")
  legend_parent.appendChild(legend_child);
}
