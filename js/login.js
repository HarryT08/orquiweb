const API_URL = "http://localhost:3000";


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
            response.json().then( (result) => {
                if(result !== 'notFound'){
                    window.location.href = `./views/home_${result}.html`
                }
                else {
                    response.json().then(function(result){
                        document.getElementById('error').innerHTML = result.msg;
                    }); 
                }
            }); 
        }else{
            response.json().then(function(result){
                document.getElementById('error').innerHTML = result.msg;
            });            
        }
    })
});