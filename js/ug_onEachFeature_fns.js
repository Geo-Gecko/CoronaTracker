function OEF(layer, type) {
     if (type == "Population Density") {
        Population_Density_OEF(layer)
    } else if (type == "Poverty Percentage") {
        Poverty_Rate_OEF(layer)
    } else if (type == "Elderly Percentage(Over 60 in age)") {
        elder_OEF(layer)
    } else if (type == "HIV/AIDS Percentage") {
        aids_OEF(layer)
    } else if (type == "Prisons Population") {
        prisons_OEF(layer)
    } else if (type == "GDP") {
        gdp_OEF(layer)
    } else if (type == "Contacts") {
        contacts_OEF(layer)
    } else if (type == "Border Points") {
        border_points_OEF(layer)
    } else if (type == "Health Centers") {
        health_centers_OEF(layer)
    } else if (type == "ICU Beds Per Health Center") {
        icu_OEF(layer)
    } else if (type == "Market Places") {
        markets_OEF(layer)
    } else if (type == "Water Source Coverage") {
        water_points_OEF(layer)
    } else if (type == "Border Districts") {
        border_districts_OEF(layer)
    }
}

function Population_Density_OEF(layer) {
    layer.bindPopup(
        '<strong>District:</strong> ' + layer.feature.properties.DNama2017 +
        '<br>' + '<strong>Total Population:</strong> ' + layer.feature.properties.TotalPopn +
        '<br>' + '<strong>Area:</strong> ' + layer.feature.properties.area +
        '<br>' + '<strong>Population Density:</strong> ' + layer.feature.properties.districts1_density
    );
    layer.on('mouseover', function (e) {
        this.openPopup();
    });
    layer.on('mouseout', function (e) {
        this.closePopup();
    });
}

function Poverty_Rate_OEF(layer) {
    layer.bindPopup(
        '<strong>District:</strong> ' + layer.feature.properties.DNama2017 +
        '<br>' + '<strong>Total Population:</strong> ' + layer.feature.properties.TotalPopn +
        '<br>' + '<strong>Household Poverty Percentage:</strong> ' + layer.feature.properties.districts1_HHPov16_17
    );
    layer.on('mouseover', function (e) {
        this.openPopup();
    });
    layer.on('mouseout', function (e) {
        this.closePopup();
    });
}

function elder_OEF(layer) {
    layer.bindPopup(
        '<strong>District:</strong> ' + layer.feature.properties.DNama2017 +
        '<br>' + '<strong>Total Population:</strong> ' + layer.feature.properties.TotalPopn +
        '<br>' + '<strong>Elderly Rates:</strong> ' + layer.feature.properties.districts1_Eldery +
        '<br>' + '<strong>Elderly Percentage:</strong> ' + layer.feature.properties.districts1_elderly_percentage
    );
    layer.on('mouseover', function (e) {
        this.openPopup();
    });
    layer.on('mouseout', function (e) {
        this.closePopup();
    });
}

function aids_OEF(layer) {
    layer.bindPopup(
        '<strong>District:</strong> ' + layer.feature.properties.DNama2017 +
        '<br>' + '<strong>Total Population:</strong> ' + layer.feature.properties.TotalPopn +
        '<br>' + '<strong>HIV/AIDS Percentage(15+ years old):</strong> ' + layer.feature.properties["districts1_HIV_percentage"]
    );
    layer.on('mouseover', function (e) {
        this.openPopup();
    });
    layer.on('mouseout', function (e) {
        this.closePopup();
    });
}

function border_districts_OEF(layer) {
    layer.bindPopup(
        '<strong>District:</strong> ' + layer.feature.properties.DNama2017 +
        '<br>' + '<strong>Total Population:</strong> ' + layer.feature.properties.TotalPopn
    );
    layer.on('mouseover', function (e) {
        this.openPopup();
    });
    layer.on('mouseout', function (e) {
        this.closePopup();
    });
}

function prisons_OEF(layer) {
    layer.bindPopup(
        '<strong>District:</strong> ' + layer.feature.properties.DNama2017 +
        '<br>' + '<strong>Total Population:</strong> ' + layer.feature.properties.TotalPopn +
        '<br>' + '<strong>Remanded:</strong> ' + layer.feature.properties.districts1_REMANDS +
        '<br>' + '<strong>Convicted:</strong> ' + layer.feature.properties.districts1_CONVICTS +
        '<br>' + '<strong>Debtors:</strong> ' + layer.feature.properties.districts1_DEBTORS +
        '<br>' + '<strong>Total Prisoners:</strong> ' + layer.feature.properties.districts1_2017_TOTAL_PRISONERS
    );
    layer.on('mouseover', function (e) {
        this.openPopup();
    });
    layer.on('mouseout', function (e) {
        this.closePopup();
    });
}

function gdp_OEF(layer) {
    layer.bindPopup(
        '<strong>District:</strong> ' + layer.feature.properties.DNama2017 +
        '<br>' + '<strong>Rural GDP (Million USD):</strong> ' + layer.feature.properties["districts1_Rural_GDP(millionUSD)"] +
        '<br>' + '<strong>Urban GDP (Million USD):</strong> ' + layer.feature.properties["districts1_Urban_GDP(millionUSD)"] +
        '<br>' + '<strong>GDP Per Capita(USD):</strong> ' + layer.feature.properties["districts1_GDP_Per_Capita(USD)"]
    );
    layer.on('mouseover', function (e) {
        this.openPopup();
    });
    layer.on('mouseout', function (e) {
        this.closePopup();
    });
}

function contacts_OEF(layer) {
    layer.bindPopup(
        '<strong>District:</strong> ' + layer.feature.properties.DNama2017 +
        '<br>' + '<strong>Resident District Commissioner(RDC) Name:</strong> ' + layer.feature.properties.districts1_Name_RDC1 +
        '<br>' + '<strong>Number:</strong> ' + layer.feature.properties.districts1_Number_RDC1 +
        '<br>' + '<br>' + '<strong>Resident District Commissioner 2 (RDC) Name:</strong> ' + layer.feature.properties.districts1_Name_RDC2 +
        '<br>' + '<strong>Number:</strong> ' + layer.feature.properties.districts1_Number_RDC2 +
        '<br>' + '<br>' + '<strong>District Health Officer(DHO) Name:</strong> ' + layer.feature.properties.districts1_Name_DHO +
        '<br>' + '<strong>Email:</strong> ' + layer.feature.properties.districts1_Email_DHO +
        '<br>' + '<strong>Number:</strong> ' + layer.feature.properties.districts1_Number_DHO +
        '<br>' + '<br>' + '<strong>District Surveillance Focal Person(DSFP) Name:</strong> ' + layer.feature.properties.districts1_Name_DSFP +
        '<br>' + '<strong>Email:</strong> ' + layer.feature.properties.districts1_Email_DSFP +
        '<br>' + '<strong>Number:</strong> ' + layer.feature.properties.districts1_Number_DSFP
    );
    layer.on('mouseover', function (e) {
        this.openPopup();
    });
    layer.on('mouseout', function (e) {
        this.closePopup();
    });
}

//Points

function icu_OEF(layer) {
    layer.bindPopup('<strong>Name:</strong> ' + layer.feature.properties.Name + '<br>' + '<strong>Location:</strong> ' +
        layer.feature.properties.location + '<br>' + '<strong>Ownership:</strong> ' +
        layer.feature.properties.ownership + '<br>' + '<strong>Services:</strong> ' +
        layer.feature.properties.services + '<br>' + '<strong>Referral:</strong> ' +
        layer.feature.properties.referral + '<br>' + '<strong>ICU Beds:</strong> ' +
        layer.feature.properties.beds);
    layer.on('mouseover', function (e) {
        this.openPopup();
    });
    layer.on('mouseout', function (e) {
        this.closePopup();
    });
}

function water_points_OEF(layer) {
  layer.bindPopup('<strong>Name:</strong> ' + layer.feature.properties.name + '<br>' + '<strong>District:</strong> ' +
      layer.feature.properties.addr_district + '<br>' + '<strong>SubCounty:</strong> ' +
      layer.feature.properties.addr_subcounty + '<br>' + '<strong>Parish:</strong> ' +
      layer.feature.properties.addr_parish + '<br>' + '<strong>Water Source Coverage (%):</strong> ' +
      layer.feature.properties.water1_water_percentage);
    layer.on('mouseover', function (e) {
        this.openPopup();
    });
    layer.on('mouseout', function (e) {
        this.closePopup();
    });
}

function markets_OEF(layer) {
    layer.bindPopup('<strong>Name:</strong> ' + layer.feature.properties.name + '<br>' + '<strong>District:</strong> ' +
        layer.feature.properties.addr_district + '<br>' + '<strong>SubCounty:</strong> ' +
        layer.feature.properties.addr_subcounty + '<br>' + '<strong>Parish:</strong> ' +
        layer.feature.properties.addr_parish + '<br>' + '<strong>Open Hours:</strong> ' +
        layer.feature.properties.opening_hours);
    layer.on('mouseover', function (e) {
        this.openPopup();
    });
    layer.on('mouseout', function (e) {
        this.closePopup();
    });
}

function border_points_OEF(layer) {
    let cases;
    border_sheet_data.forEach(element => {
        if (element.Border_cases != "" && element.Border == layer.feature.properties.Name) {
        cases = element.Border_cases
        }
    });
    if (cases) {
    layer.bindPopup('<strong>District:</strong> ' + layer.feature.properties.District + '<br>' + '<strong>Name:</strong> ' +
    layer.feature.properties.Name + '<br>' + '<strong>Path:</strong> ' +
    layer.feature.properties.Path + '<br>' + '<strong>Number of Cases:</strong> ' + cases);
    } else {
    layer.bindPopup('<strong>District:</strong> ' + layer.feature.properties.District + '<br>' + '<strong>Name:</strong> ' +
        layer.feature.properties.Name + '<br>' + '<strong>Path:</strong> ' +
        layer.feature.properties.Path);
    }
    layer.on('mouseover', function (e) {
        this.openPopup();
    });
    layer.on('mouseout', function (e) {
        this.closePopup();
    });
}

function health_centers_OEF(layer) {
    layer.bindPopup('<strong>District:</strong> ' + layer.feature.properties.District + '<br>' + '<strong>Region:</strong> ' +
        layer.feature.properties.Region + '<br>' + '<strong>Division:</strong> ' +
        layer.feature.properties.Division + '<br>' + '<strong>Name:</strong> ' +
        layer.feature.properties.Name);
    layer.on('mouseover', function (e) {
        this.openPopup();
    });
    layer.on('mouseout', function (e) {
        this.closePopup();
    });
}
