const username = document.getElementById('username');
const password = document.getElementById('password');
const buttonSesion = document.getElementById('buttonSesion');

 

buttonSesion.addEventListener('click', (e) => {
    e.preventDefault();
    const data = {
        username: username.value,
        password: password.value
    }
    console.log(data);
});


