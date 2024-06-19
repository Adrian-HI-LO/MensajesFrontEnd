const FRM_aIndex = document.getElementById ( 'FRM_CHATaIn' )

function inicio (evento) {
     evento.preventDefault ()
     window.location.href = 'index.html'
}


FRM_aIndex.addEventListener ( 'submit', inicio )