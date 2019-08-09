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

        //this is for populating the location dropdown

        let parkLocation = document.getElementById("parkLocation");

        for (let i = 0; i < states.length; i++) {

            let parkName = states[i];
            //put parkName into ddl

            let option = document.createElement("option");
            option.text = parkName;
            option.value = parkName;

            parkLocation.appendChild(option);

        };//end of the for loop for populating dropdown from location

        
        let parkTypeList = [
            "National Park", "National Monument", "Recreation Area", "Scenic Trail", "Battlefield", "Historic",
            "Memorial", "Preserve", "Island", "River", "Seashore", "Trail", "Parkway"
        ];

        //this is for populating the park type dropdown
        let parkTypeDropdown = document.getElementById("parkType");

        for (let i = 0; i < parkTypeList.length; i++) {

            let parkNameType = parkTypeList[i];
            //put parkNameType into ddl

            let option = document.createElement("option");
            option.text = parkNameType;
            option.value = parkNameType;

            parkTypeDropdown.appendChild(option);

        };//end of the for loop for populating dropdown for park type

        //   const parkTypeDropdown = document.getElementById("parkType");
            parkTypeDropdown.onchange = function () {

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
            
            let cell5 = row.insertCell(4);
            cell5.innerHTML = "Phone";
            cell5.style.fontWeight = "bold";


            const typeSelect = document.getElementById("parkType").value;

            for (let i = 0; i < objs.parks.length; i++) {
                //console.log("'" + typeSelect + "'" + "   '" + objs.parks[i].LocationName+"'")  
                let regExp = new RegExp(typeSelect, "i");
                if (regExp.exec(objs.parks[i].LocationName)) {

                //if (typeSelect.includes(objs.parks[i].LocationName)) {
                //if (typeSelect.includes(objs.parks[i].LocationName) == true) {
                //if (typeSelect.toUpperCase().indexOf(objs.parks[i].LocationName.toUpperCase()) != -1)  {           
                //if (typeSelect.search(/river/i) != -1) {

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

                    let cell5 = row.insertCell(4);
                    if (objs.parks[i].Phone == 0){
                        cell5.innerHTML = "N/A"
                    }
                    else{
                    cell5.innerHTML = objs.parks[i].Phone;
                    }
                }
            };//end of the for loop for table population from park type dropdown

        }//end of the parkTypeDropdown.onchange

        //this will build the table based on the selection of the user from the location dropdown
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
            
            let cell5 = row.insertCell(4);
            cell5.innerHTML = "Phone";
            cell5.style.fontWeight = "bold";

            //this is for creating the table based on user selection for park location

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

                    let cell5 = row.insertCell(4);
                    if (objs.parks[i].Phone == 0){
                        cell5.innerHTML = "N/A"
                    }
                    else{
                    cell5.innerHTML = objs.parks[i].Phone;
                    }
                }
            }//end of the for loop for table population from location dropdown
        };//end of the locationDropdown.onchange

    });//end of $getJSON
} //end of window.onload