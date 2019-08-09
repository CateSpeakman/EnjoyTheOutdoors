"use strict";

//Description: this script will dynamically add mountians to a dropdown and then build a table based on
//selection of the user.
//Author:Cate Speakman



window.onload = function () {

    let objs;

    $.getJSON("data/mountains.JSON", function (mountains) {

        objs = mountains;

        //code to load my drop down list 

        let mountainList = document.getElementById("mountainList")

        for (let i = 0; i < objs.mountains.length; i++) {

            let mt = objs.mountains[i].name;
            //put mt into ddl

            let option = document.createElement("option");
            option.text = mt;
            option.value = mt;

            mountainList.appendChild(option);
        }

    });


    const ddl = document.getElementById("mountainList");
    ddl.onchange = function () {

        let table = document.getElementById("mountainInfo");
        table.innerHTML = "";

        const objList = document.getElementById("mountainList").value;
        let userSelect = objList;


        for (let i = 0; i < objs.mountains.length; i++) {
            if (userSelect == objs.mountains[i].name) {
                let row1 = table.insertRow(0);
                let cell1_1 = row1.insertCell(0);
                cell1_1.innerHTML = "Name";
                let cell2_1 = row1.insertCell(1);
                cell2_1.innerHTML = objs.mountains[i].name;

                let row2 = table.insertRow(table.rows.length);
                let cell1_2 = row2.insertCell(0);
                cell1_2.innerHTML = "Elevation";
                let cell2_2 = row2.insertCell(1);
                cell2_2.innerHTML = objs.mountains[i].elevation;

                let row3 = table.insertRow(table.rows.length);
                let cell1_3 = row3.insertCell(0);
                cell1_3.innerHTML = "Effort";
                let cell2_3 = row3.insertCell(1);
                cell2_3.innerHTML = objs.mountains[i].effort;

                let row4 = table.insertRow(table.rows.length);
                let cell1_4 = row4.insertCell(0);
                cell1_4.innerHTML = "Description";
                let cell2_4 = row4.insertCell(1);
                cell2_4.innerHTML = objs.mountains[i].desc;

                let row5 = table.insertRow(table.rows.length);
                let cell1_5 = row5.insertCell(0);
                cell1_5.innerHTML = "View";
                let cell2_5 = row5.insertCell(1);

                let element = document.createElement("img")
                element.src = "images/" + objs.mountains[i].img;
                element.alt = objs.mountains[i].name;
                cell2_5.appendChild(element);

            }
        }
    }

}
