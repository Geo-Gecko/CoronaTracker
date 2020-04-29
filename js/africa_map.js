let long_id = "1tRF8gjyRd0oA2sSpTKmZqambggZzUM0YiED6KqF8H8M"
let gid = "1502462034"
let url = `https://docs.google.com/spreadsheets/d/${long_id}/export?format=csv&id=${long_id}&gid=${gid}`
let google_sheet_data;


let axioses = [axios.get(url, {
  mode: 'no-cors'
})]


let map = L.map('map', {
  minZoom: 3,
  maxZoom: 3
}).setView([2.8, 15.24], 2);

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

var sources_button = L.control({
  position: 'topright'
});
sources_button.onAdd = function(map) {
  var div = L.DomUtil.create('div', 'info legend');
  div.innerHTML += '<a style="color:#f8b739;background-color:#4e4e4e;padding:7px;border-radius:10px;" type="button" target="_blank" href="https://docs.google.com/spreadsheets/d/1VR5mnOV3i6O8kXhh5SQb6tqMvevd02NXHldx3tOTZl4/edit#gid=0">Data Sources</a>'
  return div;
};
sources_button.addTo(map);



L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

let african_data;

function getColorcases(d) {
  return  d > 4500 ? '#016c59' :
    d > 4499 ? '#016c59' :
    d > 3000 ? '#1d905d' :
    d > 2999 ? '#1d905d' :
    d > 2000 ? '#3fad76' :
    d > 1999 ? '#3fad76' :
    d > 1000 ? '#66c2a4' :
    d > 999 ? '#66c2a4' :
    d > 500 ? '#99d8ce' :
    d > 499 ? '#99d8ce' :
    d > 100 ? '#b6dae2' :
    d > 99 ? '#b6dae2' :
    d > 1 ? '#bdc9e1' :
    d > 0.1 ? '#bdc9e1' :
    '#808080';
}

axios.all(axioses)
  .then(responseArrs => {
    google_sheet_data = $.csv.toObjects(responseArrs[0].data);
    let initial_data_obj = {}
    google_sheet_data.forEach(object_ => {
      initial_data_obj[object_["COUNTRY"]] = [
        object_["POP"],
        object_["CASES"]
      ]
    })

    african_data = L.geoJson(africa_data, {
      style: stylecases
    }).addTo(map);

    african_data.eachLayer(function(layer) {
      let country_ = layer.feature.properties.COUNTRY;
      layer.bindPopup(
        '<strong>Country:</strong> ' + country_ +
        '<br>' + '<strong>Population:</strong> ' + initial_data_obj[country_][0] +
        '<br>' + '<strong>Cases:</strong> ' + initial_data_obj[country_][1]
      );
      layer.on('mouseover', function(e) {
        this.openPopup();
      });
      layer.on('mouseout', function(e) {
        this.closePopup();
      });
    });

    function stylecases(feature) {
      return {
        fillColor: getColorcases(parseFloat(initial_data_obj[feature.properties.COUNTRY][1].split(",").join(""))),
        weight: 1,
        opacity: 1,
        color: 'black',
        dashArray: '0',
        fillOpacity: 1
      };
    }
    addLegend([1, 100, 500, 1000, 2000, 3000, 4500], getColorcases, "Cases");
  })
