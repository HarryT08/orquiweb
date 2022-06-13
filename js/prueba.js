const body = document.getElementById('view')

function loadData(){
    for(let i = 0; i<5; i++){
        const row = document.createElement("tr");
        for(let j = 0; j < 4; j++){
            let id = `${i*4 + j + 1}`
            const mesita = document.createElement("td");
            const contenedorMesa = document.createElement("div")
            const btnMesa = document.createElement("button")
            btnMesa.innerHTML = id
            btnMesa.setAttribute("id", 'boton'+id);
            contenedorMesa.setAttribute("id", 'mesa'+id);
            contenedorMesa.appendChild(btnMesa)
            mesita.appendChild(contenedorMesa)
            row.appendChild(mesita)
        }
        body.appendChild(row)
    }
}

document.addEventListener("DOMContentLoaded",loadData())

document.getElementById('boton5').addEventListener('click' , ()=>{
    // alert(document.getElementById('mesa5').classList === undefined)
    if(document.getElementById('mesa5').classList.contains('ocupado')){
        document.getElementById('mesa5').classList.remove('ocupado');
    }
    else{
        document.getElementById('mesa5').classList.add('ocupado');
    }
})
