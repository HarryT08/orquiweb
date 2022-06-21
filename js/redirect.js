function redirectWithNoLogin() {
    if (localStorage.getItem('user') === null) {
        window.location.href = './index.html';
    }
}

redirectWithNoLogin();