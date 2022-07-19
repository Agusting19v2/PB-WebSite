window.onload = function () {
  const tableDiv = document.querySelector("div.table");

  const data = [
    { nombre: "Agustin", deuda: "$0", pago: "$500", registrado: "9/7" },
    { nombre: "Ary", deuda: "$1000", pago: "-", registrado: "-" },
    { nombre: "Emma", deuda: "$1500", pago: "-", registrado: "-" },
    { nombre: "Facu", deuda: "$0", pago: "$500", registrado: "12/7" },
    { nombre: "Flor", deuda: "$1000", pago: "-", registrado: "-" },
    { nombre: "Lara", deuda: "$0", pago: "$500", registrado: "14/7" },
    { nombre: "Luly", deuda: "$0", pago: "$500", registrado: "13/7" },
    { nombre: "Colombo", deuda: "$0", pago: "$500", registrado: "1/7" },
    { nombre: "Matifa", deuda: "$0", pago: "$500", registrado: "11/7" },
    { nombre: "Sofi", deuda: "$500", pago: "-", registrado: "-" },
  ];

  let tableHeaders = ["Nombre", "Deuda", "Pagó", "Registrado"];

  const createTable = () => {
    let table = document.createElement("table");
    let tableHeader = document.createElement("thead");
    let tableHeaderRow = document.createElement("tr");

    table.className = "table";
    tableHeader.className = "tableHeader";
    tableHeaderRow.className = "tableHeaderRow";

    //Se llena el header
    tableHeaders.map((header) => {
      let tableTh = document.createElement("th");
      tableTh.innerText = header;
      tableHeaderRow.append(tableTh);
    });

    tableHeader.append(tableHeaderRow);
    table.append(tableHeader);

    let tableBody = document.createElement("tbody");
    tableBody.className = "tableBody";
    table.append(tableBody);
    tableDiv.append(table);

    //se mapea la data y se llena el body de la tabla
    data.map((integrante) => {
      let tableBodyRow = document.createElement("tr");
      tableBodyRow.className = "tableBodyRow";

      let nombre = document.createElement("td");
      let deuda = document.createElement("td");
      let pago = document.createElement("td");
      let registrado = document.createElement("td");

      nombre.innerText = integrante.nombre;
      deuda.innerText = integrante.deuda;
      pago.innerText = integrante.pago;
      registrado.innerText = integrante.registrado;

      tableBodyRow.append(nombre, deuda, pago, registrado);
      table.append(tableBodyRow);
    });
  };

  return createTable();
};
