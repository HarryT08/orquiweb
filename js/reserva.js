const API_URL = "http://localhost:3000";

function loadData() {
  $.ajax({
    type: 'GET',
    url: `${API_URL}/admin/mesa/libre`,
    async: true,
    cache: false,
    success: function (data) {
      if (data.length === 0) {
        const table = document.getElementById("view");
        let row = document.createElement("tr");
        const mesa = document.createElement("td");
        mesa.innerHTML = "No hay mesas disponibles para hacer reservas";
        row.appendChild(mesa);
        table.appendChild(row);
      } else {
        const table = document.getElementById("view");
        let row = document.createElement("tr");
        for (let i = 0; i < data.length; i++) {
          let id_mesa = `${data[i].idMesa}`;
          const mesa = document.createElement("td");
          const btnMesa = document.createElement("button");
          btnMesa.innerHTML = id_mesa;
          btnMesa.id = id_mesa;
          btnMesa.classList.add('disponible');
          btnMesa.onclick = cargarModal;
          btnMesa.setAttribute('data-toggle', 'modal');
          btnMesa.setAttribute('data-target', '#modalDefault');
          mesa.appendChild(btnMesa);
          row.appendChild(mesa);
          if (((i + 1) % 4) === 0 || (i + 1) === data.length) {
            table.appendChild(row);
            row = document.createElement("tr");
          }
        }
      }
    }
  });
}

function cargarModal() {
  let id = this.id;
  document.getElementById('idMesa').value = id;
}

function realizarReserva() {
  let idMesa = document.getElementById('idMesa').value;
  let fecha = document.getElementById('fecha').value;
  let hora = document.getElementById('hora').value;
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let notas = document.getElementById('notas').value;
  if (fecha === '' || hora === '' || nombre === '' || apellido === '') {
    let div = document.getElementById('alert');
    div.innerHTML = `
            <em class="icon ni ni-cross-circle"></em> <strong>Campos vacios, revise nuevamente</strong>.
        `;
    div.className = 'alert alert-danger alert-icon';
  } else {
    var data = {
      idMesa,
      fecha,
      hora,
      nombreCliente: nombre,
      apellidoCliente: apellido,
      notas
    }
    fetch(`${API_URL}/admin/reserva`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      Swal.fire({
        title: 'Registrado!',
        text: 'La reserva ha sido registrada exitosamente.',
        icon: 'success'
      }).then((willDelete) => {
        window.location.href = "./views/reserva.html";
      });
    })
  }
}

document.addEventListener("DOMContentLoaded", loadData());