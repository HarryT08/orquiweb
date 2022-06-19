const API_URL = "http://localhost:3000";

<<<<<<< HEAD
// const xhr = new XMLHttpRequest();

// function onRequestHandler(){
//     if (this.readyState === 4 && this.status === 200){
//         const data = JSON.parse(this.response);
//         const htmlresponse = document.querySelector('#app');
//         const template = data.map(user => `<li>${user.username}</li>`);
//         htmlresponse.innerHTML = `<ul>${template}</ul>`;
//     }
// }

// xhr.addEventListener("load", onRequestHandler);
// xhr.open('GET', 'http://localhost:3000/admin/user');
// xhr.send();

//Con esta se obtienen cosas de la API
// function request() {
//     $.ajax({
//         type: 'GET',
//         url: 'http://localhost:3000/admin/user',
//         async: true,
//         cache: false,
//         success: function (data) {
//             console.log(data);
//         }
//     });
// }
=======
>>>>>>> 1431334d39a6913a72b5799a23f0a2ef36dac738

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
<<<<<<< HEAD
            response.json().then(function(result){
                if(result === 'admin'){
                    window.location.href = './views/home_admin.html';
=======
            response.json().then( (result) => {
                if(result !== 'notFound'){
                    window.location.href = `./views/home_${result}.html`
                }
                else {
                    response.json().then(function(result){
                        document.getElementById('error').innerHTML = result.msg;
                    }); 
>>>>>>> 1431334d39a6913a72b5799a23f0a2ef36dac738
                }
            }); 
        }else{
            response.json().then(function(result){
                document.getElementById('error').innerHTML = result.msg;
            });            
        }
    })
});