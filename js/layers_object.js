
let layers_ = {
    "Cases": {
        gsheet_keys: ["CASES"],
        legend_fn: getColorcases,
        popup_text: ["Population", "Cases"],
        legend_array: [0, 100, 1000, 3000, 6000]
    },
    "Deaths": {
        gsheet_keys: ["DEATHS"],
        legend_fn: getColordeaths,
        popup_text: ["Population", "Deaths"],
        legend_array: [0, 50, 100, 300, 400]
    },
    "Cases per 100,000 people": {
        gsheet_keys: ["CASES", "CASES_PER_100,000"],
        legend_fn: getColorcasesratio,
        popup_text: ["Population", "Cases", "Cases per 100,000 people"],
        legend_array: [0, 1, 10, 50, 150]
    },
    "Deaths per 100,000 people": {
        gsheet_keys: ["DEATHS", "DEATHS_PER_100,000"],
        legend_fn: getColordeathsratio,
        popup_text: ["Population", "Deaths", "Deaths per 100,000 people"],
        legend_array: [0, 0.1, 0.2, 0.5, 1.0]
    },
    "Ventilators": {
        gsheet_keys: ["VENTILATORS", "PEOPLE_PER_VENT"],
        legend_fn: getColorvents,
        popup_text: ["Population", "Ventilators", "People per ventilator"],
        legend_array: [9000, 500000, 1000000, 2000000, 10000000]
    },
    "ICU Beds": {
        gsheet_keys: ["ICU", "PEOPLE_PER_ICU"],
        legend_fn: getColorICU,
        popup_text: ["Population", "ICU Beds", "People per ICU"],
        legend_array: [9000, 500000, 1000000, 10000000, 20000000]
    },
    "Population Density": {
        gsheet_keys: ["DENSITY"],
        legend_fn: getColordensity,
        popup_text: ["Population", "Population Density <br> (people per sq km)"],
        legend_array: [3, 20, 100, 400, 700]
    },
    "HIV/AIDS(%)": {
        gsheet_keys: ["HIV_rates", "HIV_percentage"],
        legend_fn: getColorHIV,
        popup_text: ["Population", "HIV rates", "HIV percentage"],
        legend_array: [0.1, 2.5, 5.0, 10.0, 20.0]
    },
    "TB(%)": {
        gsheet_keys: ["TB_rates", "TB_percentage"],
        legend_fn: getColorTB,
        popup_text: ["Population", "TB rates", "TB percentage"],
        legend_array: [0.01, 0.05, 0.1, 0.2, 0.4]
    },
    "Elderly(% Over 65 in age)": {
        gsheet_keys: ["Elderly_rates", "Elderly_percentage"],
        legend_fn: getColorelderly,
        popup_text: ["Population", "Elderly rates", "Elderly percentage"],
        legend_array: [2, 3, 4, 8, 11]
    },
    "Testing Per Confirmed Case": {
        gsheet_keys: ["CASES", "tests_per_confirmed_case"],
        legend_fn: getColortests,
        popup_text: ["Population", "Cases", "Number of tests per confirmed case"],
        legend_array: [1, 10, 20, 40, 80]
    },
}
