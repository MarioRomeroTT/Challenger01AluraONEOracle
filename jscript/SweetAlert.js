function alertcopiadoCorrecto() {
    swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Copiado',
        showConfirmButton: false,
        timer: 1200,
      })  
    
}
function alertaTxtIngresado() {
    swal.fire({
        icon:  'warning',
        title: 'Solo son permitidas letras minúsculas y sin acentos',
        showConfirmButton: false,
        timer: 1000,
      })  
    
}

