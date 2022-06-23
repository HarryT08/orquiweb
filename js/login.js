const API_URL = "https://orquiweb.herokuapp.com";

$('#form-login').on('submit', function(e){    
    //Prevenimos envio de formulario
    e.preventDefault();
    //Obtenemos los valores del formulario
    var data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }
    //Realizamos el envío por fetch a la API
    fetch(`${API_URL}/home`,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(response){
        if(response.ok){
            response.json().then(function(result){
                window.location.href = `./views/home_${result.rol}.html`;
                sessionStorage.setItem('user', result.username.toUpperCase());
                sessionStorage.setItem('rol', result.rol.toUpperCase());
                sessionStorage.setItem('nombre', result.nombre + " " + result.apellido);
                sessionStorage.setItem('userId', result.idUsuario);
            }); 
        }else{
            response.json().then(function(result){
                document.getElementById('error').innerHTML = result.msg;
            });            
        }
    })
});

localStorage.clear();