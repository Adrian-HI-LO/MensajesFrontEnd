document.getElementById('FRM_Reg').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombreUsuario = document.querySelector('input[type="text"]').value;
    const contraseña = document.querySelector('input[type="password"]').value;

    let validarUusario = nombreUsuario.split('')
    let validarContrasenia = contraseña.split('')

    if (validarUusario.length > 0 && validarContrasenia.length > 7) {
        fetch('https://mensajesbackend.onrender.com/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombreUsuario, contraseña })
        })
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }else {
        alert ( 'Contraseña corta' )
    }
});

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
