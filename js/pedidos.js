const API_URL = "http://localhost:3000";


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
                <td class="nk-tb-col">${pedido.idComanda}</td>
                <td>Mesa #${pedido.idMesa}</td>
                <td>${pedido.idUsuario}</td>
                <td class="nk-tb-col nk-tb-col-tools">
                <td class="nk-tb-col nk-tb-col-tools">
                    <ul class="nk-tb-actions gx-1">
                    <li>
                        <div class="drodown">
                            <a href="#" class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <ul class="link-list-opt no-bdr">
                                        <li><a onclick="modalUpdate(${pedido.idComanda})" data-toggle="modal" data-target="#modalDefault"><em class="icon ni ni-edit"></em><span>Rechazar</span></a></li>
                                        <li><a onclick="eliminar(${pedido.idComanda})" style="cursor:pointer;" ><em class="icon ni ni-trash"></em><span>Aceptar</span></a></li>
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


document.addEventListener("DOMContentLoaded", loadData());