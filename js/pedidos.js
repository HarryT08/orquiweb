const API_URL = "http://localhost:3000";
document.addEventListener("DOMContentLoaded", loadData());

function loadData() {
    $.ajax({
        type: 'GET',
        url: `${API_URL}/pase/pedidos`,
        async: true,
        cache: false,
        success: function (data) {
            console.log(data);
            let tbody = document.getElementById('pedidos');
            data.forEach(pedido => {
                let tr = document.createElement('tr');
                tr.className = 'tb-tnx-item';
                tr.innerHTML = `
                <td>${pedido.idComanda}</td>
                <td>Mesa #${pedido.idMesa}</td>
                <td>${pedido.idUsuario}</td>
                <td class="nk-tb-col nk-tb-col-tools">
                    <ul class="nk-tb-actions gx-1">
                        <li>
                            <div class="drodown">
                                <a href="#" class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <ul class="link-list-opt no-bdr">
                                            <li><a onclick="modalVerification(${pedido.idComanda})" data-toggle="modal" data-target="#modalDefault"><em class="icon ni ni-edit"></em><span>Verificar</span></a></li>
                                            <li><a onclick="eliminar(${pedido.idComanda})" style="cursor:pointer;" ><em class="icon ni ni-trash"></em><span>Eliminar</span></a></li>
                                        </ul>
                                    </div>
                            </div>
                        </li>
                    </ul>
                </td>
            `;
                tbody.appendChild(tr);
            });
        }
    });
}

function eliminar(id) {
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
                url: `${API_URL}/pase/pedidos/${id}`,
                async: true,
                cache: false,
            }).done(function () {
                Swal.fire({
                    title: 'Borrado!',
                    text: 'El pedido ha sido eliminado.',
                    icon: 'success'
                }).then(() => {
                    window.location.href = "./views/home_pase.html";
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


function modalVerification( idComanda ) {
    $.ajax({
        type: 'GET',
        url: `${API_URL}/pase/pedidos/${idComanda}`,
        async: true,
        cache: false,
        success: function (productos) {
            // TODO: OBTENER DEL ID DE LA MESA Y AGREGARLO AL MODAL, HACER LOS CHECKBOS MAS ESTETICOS :D 
            // TODO: ARREGLAR EL VISUALIZAR PORQUE ACUMULA PRODUCTOS 
            // const mesa = document.getElementById('mesa').innerHTML = 
            let modalBody = document.getElementById('carrito');
            console.log();
            document.getElementById('mesa').innerHTML = `<h3> Mesa # ${productos[0].idMesa}</h3>`
            modalBody.innerHTML = ""
            productos.forEach( producto => {
                let div = document.createElement('div');
                div.innerHTML =
                    `<input type = "checkbox" value = "${producto.idProducto} class = "valores">
                     <label class="form-label" > 
                        <span class = "badge"> Cantidad : ${producto.cantidad} </span>
                        <span class = "badge">${producto.nombre} </span>
                    </label>
                    `;
                div.classList.add("form-control")
                div.style.marginBottom = "2%"
                modalBody.appendChild(div);
            });
            const commentSection = document.createElement('div');
            commentSection.classList.add("container-fluid")
            commentSection.innerHTML = `
                <label for="comentario" class="form-label">Comentarios</label>
                <textarea class="form-control" id="comentario" rows="3"></textarea>
            `
            commentSection.style.marginBottom = "2%"
            modalBody.appendChild(commentSection)
        }
    })
}