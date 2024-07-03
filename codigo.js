function validarRobot (res) {
    let mensaje =document.getElementById('msj')
    if (res) {
        //no moestrar nada
        mensaje.style.display = 'none' 
    } else{
        //dale la bienvenida
        mensaje.style.display = 'block'
    }

} 