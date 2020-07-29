
let layers_ = {
    "Cases": {
        gsheet_keys: ["CASES"],
        legend_fn: getColorcases,
        popup_text: ["Population", "Cases"],
        legend_array: [0, 100, 1000, 3000, 6000]
    },
    "Deaths": {
        gsheet_keys: ["CASES", "DEATHS",],
        legend_fn: getColordeaths,
        popup_text: ["Population", "Cases", "Deaths"],
        legend_array: [0, 1, 50, 100, 500]
    },
    "Cases per 100,000 people": {
        gsheet_keys: ["CASES", "CASES_PER_100,000"],
        legend_fn: getColorcasesratio,
        popup_text: ["Population", "Cases", "Cases per 100,000 people"],
        legend_array: [0, 1, 10, 50, 150]
    },
    "Deaths per 100,000 people": {
        gsheet_keys: ["CASES", "DEATHS", "DEATHS_PER_100,000"],
        legend_fn: getColordeathsratio,
        popup_text: ["Population", "Cases", "Deaths", "Deaths per 100,000 people"],
        legend_array: [0, 0.1, 0.2, 0.5, 1.0]
    },
    "Ventilators": {
        gsheet_keys: ["CASES", "VENTILATORS", "PEOPLE_PER_VENT"],
        legend_fn: getColorvents,
        popup_text: ["Population", "Cases", "Ventilators", "People per ventilator"],
        legend_array: [9000, 500000, 1000000, 2000000, 10000000]
    },
    "ICU Beds": {
        gsheet_keys: ["CASES", "ICU", "PEOPLE_PER_ICU"],
        legend_fn: getColorICU,
        popup_text: ["Population", "Cases", "ICU Beds", "People per ICU"],
        legend_array: [9000, 500000, 1000000, 10000000, 20000000]
    },
    "Population Density": {
        gsheet_keys: ["CASES", "DENSITY"],
        legend_fn: getColordensity,
        popup_text: ["Population", "Cases", "Population Density <br> (people per sq km)"],
        legend_array: [3, 20, 100, 400, 700]
    },
    "HIV/AIDS(%)": {
        gsheet_keys: ["CASES", "HIV_rates", "HIV_percentage"],
        legend_fn: getColorHIV,
        popup_text: ["Population", "Cases", "HIV rates", "HIV percentage"],
        legend_array: [0.1, 2.5, 5.0, 10.0, 20.0]
    },
    "TB(%)": {
        gsheet_keys: ["CASES", "TB_rates", "TB_percentage"],
        legend_fn: getColorTB,
        popup_text: ["Population", "Cases", "TB rates", "TB percentage"],
        legend_array: [0.01, 0.05, 0.1, 0.2, 0.4]
    },
    "Elderly(% Over 65 in age)": {
        gsheet_keys: ["CASES", "Elderly_rates", "Elderly_percentage", ],
        legend_fn: getColorelderly,
        popup_text: ["Population", "Cases", "Elderly rates", "Elderly percentage"],
        legend_array: [2, 3, 4, 8, 11]
    },
    "Testing Per Confirmed Case": {
        gsheet_keys: ["CASES", "tests_per_confirmed_case"],
        legend_fn: getColortests,
        popup_text: ["Population", "Cases", "Number of tests per confirmed case"],
        legend_array: [1, 10, 20, 40, 80]
    },
}
