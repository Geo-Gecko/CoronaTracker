
let overlayLayers = {
    "Border Points": [
      border_points, "#cccc09", , , {
        "District": "District", "Name": "Name", "Path": "Path"
      }
    ],
    "Health Referral Centers": [
      health_centers, "red", , , {
        "District": "DNama2017", "Region": "Region",
        "Division": "Division", "Name": "Name"
      }
    ],
    "ICU Beds Per Health Center": [
      icu_beds, "orange", , , {
        "Name": "Name", "Location": "location", "Services": "services",
        "Referral": "referral", "ICU Beds": "beds"
      }
    ],
  };
  
  let ugandaLayers = {
    "Contacts": [
      [], , "Click on a district <br> for contact information",
      {
        weight: 2,
        opacity: 2,
        color: '#000000b8',
        fillOpacity: 2.5,
        fillColor: '#AAA583'
      }, {}
    ],
    // "District Cases": [
    //   [], , "Click on a district <br> for contact information",
    //   {
    //     weight: 2,
    //     opacity: 2,
    //     color: '#000000b8',
    //     fillOpacity: 2.5,
    //     fillColor: '#AAA583'
    //   }, {}
    // ],
    "Population Density": [
      [7, 100, 500, 1000, 7500], getColorden, "Population Density<br>(people per sq km)",
      "districts1_density", {
        "District": "DNama2017", "Total Population": "TotalPopn",
        "Area": "area", "Population Density": "districts1_density"
      }
    ],
    "Poverty Percentage": [
      [0.3, 2, 3, 5, 15], getColorpov, "Household Poverty Percentage",
      "districts1_HHPov16_17", {
        "District": "DNama2017", "Total Population": "TotalPopn",
        "Household Poverty Percentage": "districts1_HHPov16_17"
      }
    ],
    "Elderly Percentage(Over 60 in age)": [
      [1, 3, 5, 10, 15], getColorelderly, "Elderly Percentage<br>(Over 60 in age)",
      "districts1_elderly_percentage", {
        "District": "DNama2017", "Total Population": "TotalPopn",
        "Elderly Rates": "districts1_Eldery",
        "Elderly Percentage": "districts1_elderly_percentage"
      }
    ],
    "HIV/AIDS Percentage": [
      [0, 3, 5, 10, 15], getColoraids, "HIV/AIDS Percentage<br>(15+ years old)",
      "districts1_HIV_percentage", {
        "District": "DNama2017", "Total Population": "TotalPopn",
        "HIV/AIDS Percentage(15+ years old)": "districts1_HIV_percentage"
      }
    ],
    "Prisons Population": [
      [15, 100, 1000, 3000, 6300], getColorprisons, "Total Prisoners",
      "districts1_2017_TOTAL_PRISONERS", {
        "District": "DNama2017", "Total Population": "TotalPopn",
        "Remanded": "districts1_REMANDS", "Convicted": "districts1_CONVICTS",
        "Debtors": "districts1_DEBTORS", "Total Prisoners": "districts1_2017_TOTAL_PRISONERS"
      }
    ],
    "Water Coverage Percentage": [
      [0, 20, 40, 60, 80], getColorwater, "Water Coverage(%)",
      "water1_water_percentage", {
        "District": "DNama2017", "Total Population": "TotalPopn",
        "Water Coverage(%)": "water1_water_percentage"
      }
    ],
    "Border Districts": [
      [], getColorborder, "", "districts1_border_district", {
        "District": "DNama2017", "Total Population": "TotalPopn",
      }
    ],
    "Risk Model": [
      [2.42, 6.33], getColormodel, "Risk Level", "result_risk", {
        "District": "DNama2017", "Total Population": "TotalPopn",
        "Population Density": "districts1_density",
        "Elderly Percentage": "districts1_elderly_percentage"
      }
    ],
    "GDP": [
      [34, 100, 200, 500, 3300], getColorgdp, "GDP Per Capita (USD)",
      "districts1_GDP_Per_Capita(USD)", {
        "District": "DNama2017",
        "Rural GDP (Million USD)": "districts1_Rural_GDP(millionUSD)",
        "Urban GDP (Million USD)": "districts1_Urban_GDP(millionUSD)",
        "GDP Per Capita(USD)": "districts1_GDP_Per_Capita(USD)"
      }
    ]
  };
