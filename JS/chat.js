document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const usuario = urlParams.get('usuario');
    document.getElementById('saludo').innerText = `Hola ${usuario}`;

    fetch('http://localhost:3000/usuarios')
        .then(response => response.json())
        .then(data => {
            const receptoresSelect = document.getElementById('receptores');
            data.forEach(user => {
                if (user.nombreUsuario !== usuario) {
                    const option = document.createElement('option');
                    option.value = user.nombreUsuario;
                    option.textContent = user.nombreUsuario;
                    receptoresSelect.appendChild(option);
                }
            });
        });

    document.getElementById('enviar').addEventListener('click', () => {
        const mensaje = document.getElementById('mensaje').value;
        const receptor = document.getElementById('receptores').value;

        fetch('http://localhost:3000/enviarMensaje', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                emisor: usuario,
                receptor: receptor,
                mensaje: mensaje
            })
        })
        .then(response => {
            if (response.status === 200) {
                alert('Mensaje enviado');
                document.getElementById('mensaje').value = '';
            } else {
                alert('Error al enviar mensaje');
            }
        })
        .catch(error => {
            alert('Error: ' + error.message);
        });
    });

    fetch(`http://localhost:3000/mensajes/${usuario}`)
        .then(response => response.json())
        .then(data => {
            const mensajesDiv = document.getElementById('mensajesRecibidos');
            data.forEach(mensaje => {
                const mensajeElement = document.createElement('p');
                mensajeElement.textContent = `De ${mensaje.emisor}: ${mensaje.mensaje}`;
                mensajesDiv.appendChild(mensajeElement);
            });
        });
});
