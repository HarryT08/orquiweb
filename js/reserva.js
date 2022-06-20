const API_URL = "http://localhost:3000";

function loadData() {
  $.ajax({
    type: 'GET',
    url: `${API_URL}/admin/mesa`,
    async: true,
    cache: false,
    success: function (data) {
      console.log(data);
      const table = document.getElementById("view");
      let id = 0;
      let row = document.createElement("tr");
      for (let i = 0; i < data.length; i++) {
        let id_mesa = `${data[id++].idMesa}`;
        const mesa = document.createElement("td");
        const btnMesa = document.createElement("button");
        btnMesa.innerHTML = id_mesa;
        btnMesa.id = `boton${id_mesa}`;
        btnMesa.classList.add(estado(data[i].estado));
        // btnMesa.onclick = cambiarEstado
        mesa.appendChild(btnMesa);
        row.appendChild(mesa);
        if (((i+1) % 4) === 0 || (i+1) === data.length) {
          table.appendChild(row);
          row = document.createElement("tr");
        }
      }
    }
  });

}

function estado(mesaEstado) {
  console.log(mesaEstado);
  if (mesaEstado == 'disponible') {
      return `libre`;
  } else {
      if (mesaEstado == 'ocupada') {
          return `ocupado`;
      } else {
          return `reservado`;
      }
  }
}

function cambiarEstado() {
  const mesa = document.getElementById(this.id);
  if (mesa.classList.contains("ocupado")) {
    mesa.classList.remove("ocupado");
  } else {
    mesa.classList.add("ocupado");
  }
}

document.addEventListener("DOMContentLoaded", loadData());