let long_id = "1tRF8gjyRd0oA2sSpTKmZqambggZzUM0YiED6KqF8H8M"
let african_sheet = "Filters%20Data",govt_intervention_sheet = "Govt%20Intervention",
border_data_sheet = "uganda_cases", regional_sheet = "Regional%20Data"
let url_ = (sheet=african_sheet) => `https://sheets.googleapis.com/v4/spreadsheets/${long_id}/values/${sheet}?key=AIzaSyC_iis9BnBJl7qxK_fRV6Hd5GpNFzFkxNY`
let regional_sheet_data, google_sheet_data, second_google_sheet_data,
  border_sheet_data, prev_highlighted_button, regionalLayers;

// set the hightlighted button to show
let highlight_button = (element) => {
  prev_highlighted_button = $("a[style='color: #f8b739;']");
  if (prev_highlighted_button.length != 0) {
    prev_highlighted_button[0].setAttribute("style", "color: rgb(219, 216, 216);");
  }
  element.setAttribute("style", "color: #f8b739;");
}

let show_hamburg_button = () => {
  let hamburg_displayed_bool = localStorage.getItem('hamburgdisplayed');
  if (hamburg_displayed_bool === null) {
    let hamburg_ = $("a[href='#layers']")[0]
    let flashing_hamburg_ = setInterval(() => {
      hamburg_.setAttribute("style", "background-color: #e15b26;")
      setTimeout(
        () => {
          hamburg_.setAttribute("style", "color: rgb(51, 51, 51);")
        }, 250
      )
    }, 1000)
    setTimeout(() => { clearInterval(flashing_hamburg_) }, 15000)
    localStorage.setItem('hamburgdisplayed', true)
  }
}

document.getElementById("map").setAttribute("style", `height: ${window.innerHeight}px`)


let southWest = L.latLng(53.85252660044951, 107.75390625),
  northEast = L.latLng(-50.28933925329178, -132.01171875000003),
  bounds = L.latLngBounds(southWest, northEast);

// zoom control options
var zoomOptions = {
  zoomInText: '+',
  zoomOutText: '-',
};
// Creating zoom control
var zoom = L.control.zoom(zoomOptions);

let map = L.map('map', {
  zoomControl: false,
  maxBounds: bounds,  
  minZoom: 3,
  maxZoom: 9
}).setView([2.8, 15.24], 9);
// map.zoomControl.setPosition('topright');
let sidebar = L.control.sidebar('sidebar').addTo(map);

map.createPane('choroplethPane');
map.getPane('choroplethPane').style.zIndex = 400;
map.createPane('overlaysPane');
map.getPane('overlaysPane').style.zIndex = 600;


sidebar.open("layers")

// display that cookies are being used on first time visit
let cookieUsageDisplay = localStorage.getItem('cookieusagedisplayed');
if (cookieUsageDisplay === null) {
  let cookies_button = L.control({
    position: 'topright'
  });
  cookies_button.onAdd = () => {
    let div = L.DomUtil.create('div', 'cooookie');
    // next to btn-link  style="color: #f8b739;"
    div.innerHTML += '<h6\
    style="background-color:#4e4e4e; padding: 0 3px 0 3px; color: white; border-radius: 10px">\
    <button type="button" class="btn btn-link" id="coookie_button">\
    <i class="fa fa-times"></i></button>\
    By continuing to view this site, you agree to our usage of\
    <a style="color: #f8b739;" type="button" target="_blank" href="/cookie.html"\
    >cookies</a></h6>'
    return div;
  };
  cookies_button.addTo(map);

  $("#coookie_button").click(() => {
    cookies_button.remove()
    localStorage.setItem('cookieusagedisplayed', true)
  });

}

// responsiveness styling
$(".sidebar-list").css(
  "max-height", `${parseInt($(".sidebar-content").css("height"), 10) - 187}px`
)
$(window).resize(() => {
  document.getElementById("map").setAttribute("style", `height: ${window.innerHeight}px`);
  $(".sidebar-list").css(
    "max-height", `${parseInt($(".sidebar-content").css("height"), 10) - 187}px`
  );
}
)
let sources_button = L.control({
  position: 'topright'
});
sources_button.onAdd = () => {
  let div = L.DomUtil.create('div', 'sources');
  div.innerHTML += '<a style="color: #f8b739;" type="button" target="_blank" href="https://docs.google.com/spreadsheets/d/1VR5mnOV3i6O8kXhh5SQb6tqMvevd02NXHldx3tOTZl4/edit#gid=0">Data Sources</a>'
  return div;
};
sources_button.addTo(map);



// toggle to countries
let countries_ = L.control({ position: 'topright' });



countries_.onAdd = function (map) {
  let div = L.DomUtil.create('div', 'sources countries_');
  div.innerHTML = "<select id='mapSelector' style=' style='color: rgb(248, 183, 57);outline: none;\
  margin-bottom: 0;' onchange='switch_map(map);'>  <option style='background-color:rgb(248, 183, 57);'>UGANDA</option> <option style='background-color:rgb(248, 183, 57);'>EAST AFRICA</option><option style='background-color:rgb(248, 183, 57);'>AFRICA</option></select>";
  div.firstChild.onmousedown = div.firstChild.ondblclick = L.DomEvent.stopPropagation;
  div.setAttribute("style", "padding-bottom: 5px");
  div.id = "sources countries_"
  return div;
};
countries_.addTo(map);


L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

let african_data;
create_sidepanel(african_sidepanel_text)
function create_response_array_object(response) {
  let row_names = response.data.values[0], response_array_object = []
  response.data.values.splice(start=1).forEach(row_ => {
    let row_object = {}
    row_.forEach((cell, index_) => {
      row_object[row_names[index_]] = cell
    })
    response_array_object.push(row_object)
  })
  return response_array_object
}


axios.get(url_()).then(response => {
    google_sheet_data = create_response_array_object(response)
  })

axios.get(url_(govt_intervention_sheet)).then(response => {
    second_google_sheet_data = create_response_array_object(response)
    switch_map(map)
  })

axios.get(url_(border_data_sheet)).then(response => {
  border_sheet_data = create_response_array_object(response)
})

axios.get(url_(regional_sheet)).then(response => {
    let regional_array_data = create_response_array_object(response);
    regional_sheet_data = {}
    regional_array_data.forEach(element_ => {
      regional_sheet_data[element_.Name] = {...element_}
    })
    regionalLayers = createRegionalLayers()
})
