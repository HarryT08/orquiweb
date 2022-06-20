const API_URL = "http://localhost:3000";

function loadData() {
  $.ajax({
    type: 'GET',
    url: `${API_URL}/admin/mesa/reservada`,
    async: true,
    cache: false,
    success: function (data) {
      if (data.length === 0) {
        const table = document.getElementById("view");
        let row = document.createElement("tr");
        const mesa = document.createElement("td");
        mesa.innerHTML = "No hay reservas realizadas";
        row.appendChild(mesa);
        table.appendChild(row);
      }
      else {
        const table = document.getElementById("view");
        let row = document.createElement("tr");
        for (let i = 0; i < data.length; i++) {
          let id_mesa = `${data[i].idMesa}`;
          const mesa = document.createElement("td");
          const btnMesa = document.createElement("button");
          btnMesa.innerHTML = id_mesa;
          btnMesa.id = `${id_mesa}`;
          btnMesa.classList.add('reservado');
          btnMesa.onclick = eliminarMesa;
          // btnMesa.onclick = cambiarEstado
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

function eliminarMesa() {
  let id = this.id;
  Swal.fire({
    title: 'Estás seguro?',
    text: "Al eliminar no podrás revertirlo!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirmar!'
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        type: 'DELETE',
        url: `${API_URL}/admin/reserva/${id}`,
        async: true,
        cache: false,
      }).done(function () {
        Swal.fire({
          title: 'Borrado!',
          text: 'La reserva ha sido eliminada.',
          icon: 'success'
        }).then(() => {
          window.location.href = "./views/eliminarReserva.html";
        });
      }).fail(function () {
        Swal.fire({
          title: 'No se ha podido eliminar',
          text: 'Ha ocurrido un error',
          icon: 'error'
        });
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", loadData());