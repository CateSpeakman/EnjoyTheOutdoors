"use strict";

//Description: this script will dynamically add locations of national parks to a dropdown and  park types to a 
// dropdown and then build a table of national parks based on selection of the user.
//Author:Cate Speakman


window.onload = function () {

    let objs;

    $.getJSON("data/nationalparks.JSON", function (nationalparks) {

        objs = nationalparks;

        let states = [
            "Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
            "Delaware", "DC", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
            "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
            "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
            "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
            "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
            "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
        ];

        //code to load my drop down list 

        let parkLocation = document.getElementById("parkLocation");

        for (let i = 0; i < states.length; i++) {

            let parkName = states[i];
            //put mt into ddl

            let option = document.createElement("option");
            option.text = parkName;
            option.value = parkName;

            parkLocation.appendChild(option);

        };

        //this will build the table based on the selection of the user
        const locationDropdown = document.getElementById("parkLocation");
        locationDropdown.onchange = function () {

            let table = document.getElementById("parks");
            table.innerHTML = "";
            //this  builds the headers for the table upon the user selection

            let header = table.createTHead();
            let row = header.insertRow(0);
            let cell1 = row.insertCell(0);
            cell1.innerHTML = "Park Name";
            cell1.style.fontWeight = "bold";
            let cell2 = row.insertCell(1);
            cell2.innerHTML = "City";
            cell2.style.fontWeight = "bold";
            let cell3 = row.insertCell(2);
            cell3.innerHTML = "State";
            cell3.style.fontWeight = "bold";
            let cell4 = row.insertCell(3);
            cell4.innerHTML = "Link";
            cell4.style.fontWeight = "bold";

            const userSelect = document.getElementById("parkLocation").value;


            for (let i = 0; i < objs.parks.length; i++) {
                if (userSelect == objs.parks[i].State) {

                    let row = table.insertRow(table.rows.length);
                    let cell1 = row.insertCell(0);
                    cell1.innerHTML = objs.parks[i].LocationName;

                    let cell2 = row.insertCell(1);
                    cell2.innerHTML = objs.parks[i].City;

                    let cell3 = row.insertCell(2);
                    cell3.innerHTML = objs.parks[i].State;

                    let cell4 = row.insertCell(3);
                    if (objs.parks[i].Visit != undefined) {
                        cell4.innerHTML = objs.parks[i].Visit;
                    }
                    else {
                        cell4.innerHTML = "Not Available";
                    }
                };
            };
        };
    });
}