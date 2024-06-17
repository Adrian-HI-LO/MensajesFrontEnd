const FRM = document.getElementById( 'FRM_Regil' )

FRM.addEventListener ( 'submit', redireccionar )

function redireccionar ( evento ) {
     evento.preventDefault (  )
     window.location.href = 'registro.html'
}