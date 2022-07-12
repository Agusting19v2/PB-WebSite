window.onload = function () {
  var tr = document.getElementsByClassName("table-body-tr");

  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  table.appendChild(thead);
  table.appendChild(tbody);

  // Adding the entire table to the body tag
  document.getElementById("body").appendChild(table);

  // Creating and adding data to first row of the table
  let row_1 = document.createElement("tr");
  let heading_1 = document.createElement("th");
  heading_1.innerHTML = "Lunes";
  let heading_2 = document.createElement("th");
  heading_2.innerHTML = "Martes";
  let heading_3 = document.createElement("th");
  heading_3.innerHTML = "Miercoles";
  let heading_4 = document.createElement("th");
  heading_4.innerHTML = "Jueves";
  let heading_5 = document.createElement("th");
  heading_5.innerHTML = "Viernes";

  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);
  row_1.appendChild(heading_3);
  row_1.appendChild(heading_4);
  row_1.appendChild(heading_5);
  thead.appendChild(row_1);

  // Creating and adding data to second row of the table
  let row_2 = document.createElement("tr");
  let row_2_data_1 = document.createElement("td");
  row_2_data_1.innerHTML = "4/7 - Facu";
  let row_2_data_2 = document.createElement("td");
  row_2_data_2.innerHTML = "5/7 - Emma";
  let row_2_data_3 = document.createElement("td");
  row_2_data_3.innerHTML = "6/7 - Sofi";
  let row_2_data_4 = document.createElement("td");
  row_2_data_4.innerHTML = "7/7 - Agustin";
  let row_2_data_5 = document.createElement("td");
  row_2_data_5.innerHTML = "8/7 - Matifa";

  row_2.appendChild(row_2_data_1);
  row_2.appendChild(row_2_data_2);
  row_2.appendChild(row_2_data_3);
  row_2.appendChild(row_2_data_4);
  row_2.appendChild(row_2_data_5);
  tbody.appendChild(row_2);

  // Creating and adding data to third row of the table
  let row_3 = document.createElement("tr");
  let row_3_data_1 = document.createElement("td");
  row_3_data_1.innerHTML = "11/7 - Luly";
  let row_3_data_2 = document.createElement("td");
  row_3_data_2.innerHTML = "12/7 - Flor";
  let row_3_data_3 = document.createElement("td");
  row_3_data_3.innerHTML = "13/7 - Ary";
  let row_3_data_4 = document.createElement("td");
  row_3_data_4.innerHTML = "14/7 - Colombo";
  let row_3_data_5 = document.createElement("td");
  row_3_data_5.innerHTML = "15/7 - Lara";

  row_3.appendChild(row_3_data_1);
  row_3.appendChild(row_3_data_2);
  row_3.appendChild(row_3_data_3);
  row_3.appendChild(row_3_data_4);
  row_3.appendChild(row_3_data_5);
  tbody.appendChild(row_3);

  // Creating and adding data to fourth row of the table
  let row_4 = document.createElement("tr");
  let row_4_data_1 = document.createElement("td");
  row_4_data_1.innerHTML = "18/7 - Matifa";
  let row_4_data_2 = document.createElement("td");
  row_4_data_2.innerHTML = "19/7 - Facu";
  let row_4_data_3 = document.createElement("td");
  row_4_data_3.innerHTML = "20/7 - Emma";
  let row_4_data_4 = document.createElement("td");
  row_4_data_4.innerHTML = "21/7 - Sofi";
  let row_4_data_5 = document.createElement("td");
  row_4_data_5.innerHTML = "22/7 - Agustin";

  row_4.appendChild(row_4_data_1);
  row_4.appendChild(row_4_data_2);
  row_4.appendChild(row_4_data_3);
  row_4.appendChild(row_4_data_4);
  row_4.appendChild(row_4_data_5);
  tbody.appendChild(row_4);

  // Creating and adding data to third row of the table
  let row_5 = document.createElement("tr");
  let row_5_data_1 = document.createElement("td");
  row_5_data_1.innerHTML = "25/7 - Lara";
  let row_5_data_2 = document.createElement("td");
  row_5_data_2.innerHTML = "26/7 - Luly";
  let row_5_data_3 = document.createElement("td");
  row_5_data_3.innerHTML = "27/7 - Flor";
  let row_5_data_4 = document.createElement("td");
  row_5_data_4.innerHTML = "28/7 - Ary";
  let row_5_data_5 = document.createElement("td");
  row_5_data_5.innerHTML = "29/7 - Colombo";

  row_5.appendChild(row_5_data_1);
  row_5.appendChild(row_5_data_2);
  row_5.appendChild(row_5_data_3);
  row_5.appendChild(row_5_data_4);
  row_5.appendChild(row_5_data_5);
  tbody.appendChild(row_5);

  // Creating and adding data to third row of the table
  let row_6 = document.createElement("tr");
  let row_6_data_1 = document.createElement("td");
  row_6_data_1.innerHTML = "1/8 - Agustin";
  let row_6_data_2 = document.createElement("td");
  row_6_data_2.innerHTML = "2/8 - Matifa";
  let row_6_data_3 = document.createElement("td");
  row_6_data_3.innerHTML = "3/8 - Facu";
  let row_6_data_4 = document.createElement("td");
  row_6_data_4.innerHTML = "4/8 - Emma";
  let row_6_data_5 = document.createElement("td");
  row_6_data_5.innerHTML = "5/8 - Sofi";

  row_6.appendChild(row_6_data_1);
  row_6.appendChild(row_6_data_2);
  row_6.appendChild(row_6_data_3);
  row_6.appendChild(row_6_data_4);
  row_6.appendChild(row_6_data_5);
  tbody.appendChild(row_6);

  // Creating and adding data to third row of the table
  let row_7 = document.createElement("tr");
  let row_7_data_1 = document.createElement("td");
  row_7_data_1.innerHTML = "8/8 - Colombo";
  let row_7_data_2 = document.createElement("td");
  row_7_data_2.innerHTML = "9/8 - Lara";
  let row_7_data_3 = document.createElement("td");
  row_7_data_3.innerHTML = "10/8 - Luly";
  let row_7_data_4 = document.createElement("td");
  row_7_data_4.innerHTML = "11/8 - Flor";
  let row_7_data_5 = document.createElement("td");
  row_7_data_5.innerHTML = "12/8 - Ary";

  row_7.appendChild(row_7_data_1);
  row_7.appendChild(row_7_data_2);
  row_7.appendChild(row_7_data_3);
  row_7.appendChild(row_7_data_4);
  row_7.appendChild(row_7_data_5);
  tbody.appendChild(row_7);

  // Creating and adding data to third row of the table
  let row_8 = document.createElement("tr");
  let row_8_data_1 = document.createElement("td");
  row_8_data_1.innerHTML = "15/8 - Sofi";
  let row_8_data_2 = document.createElement("td");
  row_8_data_2.innerHTML = "16/8 - Agustin";
  let row_8_data_3 = document.createElement("td");
  row_8_data_3.innerHTML = "17/8 - Matifa";
  let row_8_data_4 = document.createElement("td");
  row_8_data_4.innerHTML = "18/8 - Facu";
  let row_8_data_5 = document.createElement("td");
  row_8_data_5.innerHTML = "19/8 - Emma";

  row_8.appendChild(row_8_data_1);
  row_8.appendChild(row_8_data_2);
  row_8.appendChild(row_8_data_3);
  row_8.appendChild(row_8_data_4);
  row_8.appendChild(row_8_data_5);
  tbody.appendChild(row_8);
};
