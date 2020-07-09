let african_sidepanel_text = {
    "COVID 19 cases": [
        "Cases", "Deaths", "Cases per 100,000 people", "Deaths per 100,000 people", "Testing Per Confirmed Case"
    ],
    "Health": ["Ventilators", "ICU Beds"],
    "Population": [
        "Population Density", "HIV/AIDS(%)", "TB(%)", "Elderly(% Over 65 in age)"
    ],
    "Government Intervention": [
        "Fiscal", "Monetary", "Exchange", "Other Measures Taken"
    ]
}

let ugandan_sidepanel_text = {
    "Infrastructure": [
        "Towns", "Border Points", "Health Referral Centers", "ICU Beds Per Health Center",
    ],
    "Districts Data": [
        "Border Districts", "Cases per District", "Poverty Percentage", "Population Density", "Contacts",
        "Elderly Percentage(Over 60 in age)", "HIV/AIDS Percentage", "Prisons Population", "Water Coverage Percentage", "Risk Model", "GDP"
    ]
}

let regional_sidepanel_text = {
    "Regional COVID 19 Cases": ["Regional COVID 19 Cases", "Population Density"]
}

function create_sidepanel (sidepanel_text) {
    Object.keys(sidepanel_text).forEach((key, index) => {

        let section_menu_title = document.createElement("a")
        section_menu_title.setAttribute("href", `#homeSubmenu${index}`)
        section_menu_title.setAttribute("data-toggle", "collapse")
        section_menu_title.setAttribute("aria-expanded", "false")
        section_menu_title.setAttribute(
            "class",
            "d-flex justify-content-left dropdown-toggle p-2 button_title_content"
        )
        section_menu_title.text = key;

        let section_menu_content = document.createElement("ul")
        section_menu_content.setAttribute("class", "collapse list-unstyled")
        section_menu_content.setAttribute("id", `homeSubmenu${index}`)

        sidepanel_text[key].forEach(text_ => {
            let list_element = document.createElement("li")
            list_element.setAttribute("class", "d-flex justify-content-left")
            let button_element = document.createElement("a")
            button_element.setAttribute("href", "#")
            button_element.setAttribute(
                "class", "d-flex justify-content-left p-2 button_inner_content"
            )            
            if (key === "Infrastructure") {
                button_element.setAttribute("onclick", "add_overlay(this);")
            } else if (key === "Districts Data") {
                button_element.setAttribute("onclick", "add_ug_layer(this);")
            } else if (key === "Government Intervention") {
                if (text_ === "Other Measures Taken") {
                    button_element.setAttribute("id", "country")
                } else {
                    button_element.setAttribute("id", text_.toLowerCase())
                }
                button_element.setAttribute("onclick", "govt_intervention_layer(this);")
            } else if (key === "Regional COVID 19 Cases") {
                button_element.setAttribute("onclick", "add_regional_layer(this);") 
            } else {
                button_element.setAttribute("onclick", "add_layer(this);")
            }
            button_element.text = text_
            
            
            list_element.appendChild(button_element)
            section_menu_content.appendChild(list_element)
        })

        if (key === "Government Intervention") {
            let list_element = document.createElement("li")
            let click_text = document.createElement("p")
            click_text.setAttribute("style", "text-align:end; color:rgb(219, 216, 216);")
            click_text.innerText = "Click on country to view data"
            list_element.appendChild(click_text)
            section_menu_content.appendChild(list_element)

        }

        let side_bar_list = document.getElementById("create-sidebar-list")
        side_bar_list.appendChild(section_menu_title)
        side_bar_list.appendChild(section_menu_content)
       
    })
}

