function loadData() {
  const table = document.getElementById("view");
  for (let i = 0; i < 5; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
      let id_mesa = `${i * 4 + j + 1}`;
      const mesa = document.createElement("td");
      const btnMesa = document.createElement("button");
      btnMesa.innerHTML = id_mesa;
      btnMesa.id = `boton${id_mesa}`
      btnMesa.onclick = cambiarEstado
      mesa.appendChild(btnMesa);
      row.appendChild(mesa);
    }
    table.appendChild(row);
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

//document.addEventListener("DOMContentLoaded", loadData());


function go(){
  const pass = document.getElementById('password')
  // console.log(pass.value + "");
}