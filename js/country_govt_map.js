let highlight = {
  weight: 2,
  opacity: 2,
  color: '#000000b8',
  fillOpacity: 10,
  fillColor: 'yellow'
};


let other_measures_styling = {
weight: 2,
opacity: 2,
color: '#000000b8',
fillOpacity: 2.5,
fillColor: '#AAA583'
};

function getColorfiscal(d) {
return d > 1 ? '#15841b' :
d > 0 ? '#15841b' :
'#adadad';
}

let generate_govt_layer_oject = {
fiscal: {
sheet_obj_keys : ["Intro", "Fiscal", "Fiscal2", "Source1"],
popup_keys: ["Population", "Introduction", "Fiscal Policy"]
},
monetary: {
sheet_obj_keys : [
"Intro", "Monetary_and_Macro_financial", "Monetary", "Source1"
],
popup_keys: ["Population", "Introduction", "Monetary and Macro financial"]
},
exchange: {
sheet_obj_keys : [
"Intro", "Exchange_rate_and_balance_of_payments", "Exchange", "Source1"
],
popup_keys: ["Population", "Introduction", "Exchange rate and balance of payments"]
},
country: {
sheet_obj_keys : [
"Humanitarian_exemption", "Lockdown", "Movement_restrictions",
"Public_health_measures", "Social_and_economic_measures", "Social_distancing", "Source2"
],
popup_keys: [
"Population", "Humanitarian Exemption", "Lock Down", "Movement Restrictions",
"Public health measures", "Social and economic measures", "Social distancing"
]
}
}


function govt_intervention_layer(element) {
highlight_button(element)

let govt_intervention_obj = {}
second_google_sheet_data.forEach(object_ => {
govt_intervention_obj[object_["COUNTRY"]] = [
object_["POP"]
]
generate_govt_layer_oject[element.id]["sheet_obj_keys"].forEach(key_ => {
govt_intervention_obj[object_["COUNTRY"]].push(object_[key_])
})
});

if (african_data && african_data._map) {
map.removeLayer(african_data)
};
african_data = L.geoJSON(africa_data, {
style: element.id === "country" ? other_measures_styling : stylefiscal
}).addTo(map);
african_data.on("click", onFeatureGroupClick);
function onFeatureGroupClick(e) {
if (!$("#messages").hasClass("sidebar-pane active")) {
sidebar.open("messages")
show_hamburg_button()
}
let group = e.target,
layer = e.layer;

group.setStyle(
element.id === "country" ? other_measures_styling : stylefiscal
);
layer.setStyle(highlight);
};
african_data.eachLayer(function(layer) {
let country_ = layer.feature.properties.COUNTRY;
layer.on('click', function(e) {
let info_panel_string = document.getElementById("info").children[0]
info_panel_string.innerHTML = `<strong>Country</strong>: ${country_}<br>`

generate_govt_layer_oject[element.id]["popup_keys"].forEach((pop_key_, i) => {
info_panel_string.innerHTML +=
`<strong>${pop_key_}</strong>: ${govt_intervention_obj[country_][i]}<br>`
})

info_panel_string.innerHTML += `<strong>Source</strong>: \
<a href=${govt_intervention_obj[country_][
generate_govt_layer_oject[element.id]["sheet_obj_keys"].length
]} target='_blank' class='text-white'><u>IMF DATA</u></a>`
});
});

function stylefiscal(feature) {
return {
fillColor: getColorfiscal(
parseFloat(
  govt_intervention_obj[feature.properties.COUNTRY][
    generate_govt_layer_oject[element.id]["sheet_obj_keys"].length - 1
  ].split(",").join("")
)
),
weight: 1,
opacity: 1,
color: 'black',
dashArray: '0',
fillOpacity: 1
};
}
element.id === "country" ? 
map.removeControl(legend) : addLegend([0, 1], getColorfiscal);
}