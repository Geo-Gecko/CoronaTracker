function OEF(layer, type) {
    // add a check for greater than 999 to apply thousep
    let popup_lines = [], layer_object;
    if (Object.keys(ugandaLayers).includes(type)) {
        layer_object = ugandaLayers
    } else if (Object.keys(regional_overlays).includes(type)) {
        layer_object = regional_overlays
    } else {
        layer_object = overlayLayers
    }

    Object.keys(layer_object[type][4]).forEach(key_ => {
        let value_ = layer.feature.properties[layer_object[type][4][key_]];
        value_ = parseFloat(value_) >= 1000 ? thousep2(value_) : value_;
        popup_lines.push(`<strong>${key_}: </strong> ${value_}<br>`)
    })
    
    // add cases to border points
    if (type === "Border Points") {
        let cases;
        border_sheet_data.forEach(element => {
            if (
                element.Border_cases && element.Border_cases != ""
                && element.Border == layer.feature.properties.Name
            ) {
            cases = element.Border_cases
            }
        });
        if (cases) {
            popup_lines.push(`<strong>Number of Cases:</strong> ${cases}`)
        }
    }
    if (type === "Cases per District") {
        let cases_district;
        border_sheet_data.forEach(element => {
            if (
                element.Cases && element.Cases != "" &&
                element.District == layer.feature.properties.DNama2017
            ) {
            cases_district = element.Cases
            }
        });
        if (cases_district) {
            popup_lines.push(`<strong>Number of Cases:</strong> ${cases_district}`)
        }
    }
    if (type === "Border Cases") {
        let cases;
        Object.keys(regional_sheet_data).forEach(element => {
            if (
                regional_sheet_data[element]["border_cases"] &&
                regional_sheet_data[element]["border_cases"] != "" &&
                regional_sheet_data[element]["border"] == layer.feature.properties.Name
            ) {
                cases = regional_sheet_data[element]["border_cases"]
            }
        });
        if (cases) {
            popup_lines.push(`<strong>Number of Cases:</strong> ${cases}`)
        }
    }
    layer.bindPopup(popup_lines.join(""));
    layer.on('mouseover', function (e) {
        this.openPopup();
    });
    layer.on('mouseout', function (e) {
        this.closePopup();
    });
}

function thousep2(n) {
  if(typeof n === 'number'){
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

function contacts_OEF(layer) {
    layer.on('click', function(e) {
        document.getElementById("info").children[0].innerHTML =
        `<strong>District: </strong>${layer.feature.properties.DNama2017}<br>\
        <strong>Resident District Commissioner(RDC) Name: \
        </strong>${layer.feature.properties.districts1_Name_RDC1}<br>\
        <strong>Number: </strong>${layer.feature.properties.districts1_Number_RDC1}<br>\
        <strong>Resident District Commissioner 2 (RDC) Name: \
        </strong>${layer.feature.properties.districts1_Name_RDC2}<br>\
        <strong>Number: </strong>${layer.feature.properties.districts1_Number_RDC2}<br>\
        <strong>District Health Officer(DHO) Name: \
        </strong>${layer.feature.properties.districts1_Name_DHO}<br>\
        <strong>Email: </strong>${layer.feature.properties.districts1_Email_DHO}<br>\
        <strong>Number: </strong>${layer.feature.properties.districts1_Number_DHO}<br>\
        <strong>District Surveillance Focal Person(DSFP) Name: \
        </strong>${layer.feature.properties.districts1_Name_DSFP}<br>\
        <strong>Email: </strong>${layer.feature.properties.districts1_Email_DSFP}<br>\
        <strong>Number: </strong>${layer.feature.properties.districts1_Number_DSFP}`;
    });
}
