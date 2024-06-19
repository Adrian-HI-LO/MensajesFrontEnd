
document.getElementById('FRM_INDEX').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const usuario = document.getElementById('Usuario').value;
    const contrasenia = document.getElementById('Contrasenia').value;

    fetch('https://mensajesbackend.onrender.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // LLaves del objeto como la BD
        body: JSON.stringify({
            nombreUsuario: usuario,
            contraseña: contrasenia
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Login exitoso') {
            window.location.href = `chat.html?usuario=${data.usuario}`;
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    })
    .catch(error => {
        alert('Error: ' + error.message);
    });
});
