window.onload = function () {
  const calendario = [
    ["1/8 Agustin", "2/8 Matifa", "3/8 Facu", "4/8 Emma", "5/8 Sofi"],
    ["8/8 Colombo", "9/8 Lara", "10/8 Luly", "11/8 Flor", "12/8 Ary"],
    ["15/8 Sofi", "16/8 Agustin", "17/8 Matifa", "18/8 Facu", "19/8 Emma"],
    ["22/8 Ary", "23/8 Colombo", "24/8 Lara", "25/8 Luly", "26/8 Flor"],
    ["29/8 Emma", "30/8 Sofi", "31/8 Agustin", "1/9 Matifa", "2/9 Facu"],
    ["5/9 Flor", "6/9 Ary", "7/9 Colombo", "8/9 Lara", "9/9 Luly"],
    ["12/9 Facu", "13/9 Emma", "14/9 Sofi", "15/9 Agustin", "16/9 Matifa"],
    ["19/9 Luly", "20/9 Flor", "21/9 Ary", "22/9 Colombo", "23/9 Lara"],
  ];

  const currentDate = () => {
    let today = new Date();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    let formattedToday = dd + "/" + mm;
    return formattedToday;
  };

  function calendar() {
    const daysOfWeek = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    const date = currentDate();

    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    table.appendChild(thead);
    table.appendChild(tbody);

    let headerRow = document.createElement("tr");
    for (let i = 0; i < 5; i++) {
      let heading = document.createElement("th");
      heading.innerHTML = daysOfWeek[i];
      headerRow.appendChild(heading);
    }
    thead.appendChild(headerRow);

    calendario.map((week) => {
      let row = document.createElement("tr");
      let data = document.createElement("td");
      week.map((day) => {
        data = document.createElement("td");
        data.innerHTML = day;
        if (day.substring(0, day.indexOf(" ")) === date) {
          data.className = "today";
        }
        row.appendChild(data);
      });
      tbody.appendChild(row);
    });

    document.getElementById("calendar").appendChild(table);
  }

  calendar();
};
