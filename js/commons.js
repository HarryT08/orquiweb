function setLogin() {
    document.getElementById('rol-info').innerHTML = localStorage.getItem('rol');
    document.getElementById('user-info').innerHTML = localStorage.getItem('user');
    document.getElementById('nombre-info').innerHTML = localStorage.getItem('nombre');
}

function signOut(){
    localStorage.clear();
    window.location.href = './index.html';
}

document.addEventListener("DOMContentLoaded", setLogin());