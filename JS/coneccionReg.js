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