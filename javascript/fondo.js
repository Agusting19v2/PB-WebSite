window.onload = function () {
  const tableDiv = document.querySelector("div.tableContainer");
  const tableDiv2 = document.querySelector("div.tableContainer2");
  const tableDiv3 = document.querySelector("div.tableContainer3");

  const fondo = [
    { nombre: "Agustin", deuda: 600, pago: 0, registrado: "-" },
    { nombre: "Ary", deuda: 1600, pago: 0, registrado: "-" },
    { nombre: "Emma", deuda: 2100, pago: 0, registrado: "-" },
    { nombre: "Facu", deuda: 600, pago: 0, registrado: "-" },
    { nombre: "Flor", deuda: 600, pago: 0, registrado: "-" },
    { nombre: "Lara", deuda: 600, pago: 0, registrado: "-" },
    { nombre: "Luly", deuda: 600, pago: 0, registrado: "-" },
    { nombre: "Colombo", deuda: 600, pago: 0, registrado: "-" },
    { nombre: "Matifa", deuda: 600, pago: 0, registrado: "-" },
    { nombre: "Sofi", deuda: 600, pago: 0, registrado: "-" },
  ];

  const fondoHeaders = ["Nombre", "Deuda", "Pagó", "Registrado"];

  const gastos = [{ gasto: "Bolsas", monto: 400, dia: "1/8" }];

  const gastosHeaders = ["Gasto", "Monto", "Dia"];

  let deudaTotal = 2500;
  let fondoTotal = 1190;

  const createTable = (data, headers, divOfTable) => {
    let table = document.createElement("table");
    let tableHeader = document.createElement("thead");
    let tableHeaderRow = document.createElement("tr");

    table.className = "table";
    tableHeader.className = "tableHeader";
    tableHeaderRow.className = "tableHeaderRow";

    headers.map((header) => {
      let tableTh = document.createElement("th");
      tableTh.innerText = header;
      tableHeaderRow.append(tableTh);
    });

    tableHeader.append(tableHeaderRow);
    table.append(tableHeader);

    let tableBody = document.createElement("tbody");
    tableBody.className = "tableBody";
    table.append(tableBody);
    divOfTable.append(table);

    if (data[0].nombre) {
      data.map((integrante) => {
        let tableBodyRow = document.createElement("tr");
        tableBodyRow.className = "tableBodyRow";

        let nombre = document.createElement("td");
        let deuda = document.createElement("td");
        let pago = document.createElement("td");
        let registrado = document.createElement("td");

        nombre.innerText = integrante.nombre;
        deuda.innerText = "$" + integrante.deuda;
        pago.innerText = "$" + integrante.pago;
        registrado.innerText = integrante.registrado;

        deudaTotal += integrante.deuda;
        fondoTotal += integrante.pago;

        tableBodyRow.append(nombre, deuda, pago, registrado);
        tableBody.append(tableBodyRow);
      });
    } else {
      data.map((item) => {
        let tableBodyRow = document.createElement("tr");
        tableBodyRow.className = "tableBodyRow";

        let gasto = document.createElement("td");
        let monto = document.createElement("td");
        let dia = document.createElement("td");

        gasto.innerText = item.gasto;
        monto.innerText = "$" + item.monto;
        dia.innerText = item.dia;

        fondoTotal -= item.monto;

        tableBodyRow.append(gasto, monto, dia);
        tableBody.append(tableBodyRow);
      });
    }
  };

  const createLastTable = (gastos, fondo, divOfTable) => {
    let table = document.createElement("table");
    let tableHeader = document.createElement("thead");
    let tableHeaderRow = document.createElement("tr");
    let firstTh = document.createElement("th");
    let secondTh = document.createElement("th");
    let tableBody = document.createElement("tbody");
    let tableBodyRow = document.createElement("tr");
    let firstTd = document.createElement("td");
    let secondTd = document.createElement("td");

    table.className = "table3";
    tableHeader.className = "tableHeader3";
    tableHeaderRow.className = "tableHeaderRow3";
    tableBody.className = "tableBody3";
    tableBodyRow.className = "tableBodyRow3";

    firstTh.innerText = "Deuda Total";
    secondTh.innerText = "Fondo Total";
    tableHeaderRow.append(firstTh, secondTh);

    firstTd.innerText = "$" + gastos;
    secondTd.innerText = "$" + fondo;
    tableBodyRow.append(firstTd, secondTd);

    tableHeader.append(tableHeaderRow);
    tableBody.append(tableBodyRow);
    table.append(tableHeader);
    table.append(tableBody);
    divOfTable.append(table);
  };

  createTable(fondo, fondoHeaders, tableDiv);
  createTable(gastos, gastosHeaders, tableDiv2);
  createLastTable(deudaTotal, fondoTotal, tableDiv3);
};
