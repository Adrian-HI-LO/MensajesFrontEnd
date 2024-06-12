const FRM = document.getElementById ( 'FRM_Regreso' )

FRM.addEventListener ( 'submit', regreso )

function regreso ( evento ) {
     evento.preventDefault (  )
     window.location.href = 'index.html'
}