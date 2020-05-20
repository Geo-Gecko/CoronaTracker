function thousep2(n) {
  if (typeof n === 'number') {
    n += '';
    var x = n.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  } else {
    return n;
  }
}

var legend = L.control({ position: 'bottomright' });

var pointLegend = L.control({ position: 'bottomright' });

function addLegend(grades, ramp, title = null, filterMap) {
  if (legend._map) {
    map.removeControl(legend);
  }

  if (filterMap == undefined) {

  legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend');

    if (title === null) {
      for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
          '<i style="background:' + ramp(grades[i]) + '"></i> ' +
          (grades[i + 1] ? '' + 'Not Implemented' + '<br>' : 'Implemented'
          );
      }
    } else if (title) {
      div.innerHTML += '<p><b>' + title + '</b></p><br>';
      div.innerHTML += '<i style="background:#808080"></i> No data<br>';
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
          '<i style="background:' + ramp(grades[i]) + '"></i> ' +
          thousep2(grades[i]) + (grades[i + 1] ? '&ndash;' + thousep2(grades[i + 1]) + '<br>' : '+');
      }
    }

    return div;
  };
} else {
  legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend');

      div.innerHTML += '<p><b>' + title + '</b></p><br>';
      div.innerHTML += '<i style="background:#808080"></i> No data<br>';
      div.innerHTML += '<i style="background:#e15b26"></i> Filtered<br>';

    return div;
  };
}

  legend.addTo(map);

}

function addPointLegend(grades, title) {
  if (pointLegend._map) {
    map.removeControl(pointLegend);
  }

  pointLegend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info pointLegend');
    measure = [1, 41, 82, 163],
      label = '<strong>'+ title + '</strong>'

    div.innerHTML += '<p><b>' + label + '</b></p><br>';
    if (grades.length == 0) {
      div.innerHTML += '<i class="circle" style="width:10px;height:10px;background-color:orange;border-width:1px;border-color:black;"></i> Health Centre locations<br>';
    } else if (title != "Cases per district") {
      div.innerHTML += '<i class="circle" style="width:10px;height:10px;background-color:#cccc09;border-width:1px;border-color:black;"></i> No cases<br>';
    }
    for (var i = 0; i < grades.length; i++) {
      for (var i = 0; i < grades.length; i++) {
        div.innerHTML += '<i class="circle" style="width: ' + getRadiusBorder (measure[i]) + 'px;height: '+ getRadiusBorder (measure[i]) +'px;"></i> ' +
        thousep2(grades[i]) + (grades[i + 1] ? '&ndash;' + thousep2(grades[i + 1]) + '<br>' : '+');
    }
    }

    return div;
  };

  pointLegend.addTo(map);

}
