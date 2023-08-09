
function showAlertSuccess() {
    document.getElementById("alert-success").classList.toggle("show");
        setTimeout(() => {
    document.getElementById("alert-success").classList.toggle("show")
        }, 3000);

}

function showAlertError() {
    document.getElementById("alert-danger").classList.toggle("show");
    setTimeout(() => {
        document.getElementById("alert-danger").classList.toggle("show")
    }, 3000);
    

}


// Obtener referencia al botón de registro
const regBtn = document.getElementById("regBtn");


// Agregar evento de click al botón de registro
regBtn.addEventListener("click", function () {
    // Obtener los valores ingresados por el usuario
    const nombre = document.getElementById("nombre").value;          // Obtener el valor del campo "Nombre"
    const apellido = document.getElementById("apellido").value;      // Obtener el valor del campo "Apellido"
    const email = document.getElementById("email").value;            // Obtener el valor del campo "Email"
    const password1 = document.getElementById("password1").value;    // Obtener el valor del campo "Contraseña"
    const password2 = document.getElementById("password2").value;    // Obtener el valor del campo "Repetir contraseña"
    const terminos = document.getElementById("terminos").checked;    // Verificar si el checkbox de términos está marcado


    // Realizar validaciones
    if (
        nombre.trim() === "" ||           // Verificar si el campo "Nombre" está vacío
        apellido.trim() === "" ||         // Verificar si el campo "Apellido" está vacío
        email.trim() === "" ||            // Verificar si el campo "Email" está vacío
        password1.length < 6 ||           // Verificar si la contraseña tiene menos de 6 caracteres
        password1 !== password2 ||        // Verificar si las contraseñas no coinciden
        !terminos                         // Verificar si los términos no han sido aceptados
    ) {
        // Mostrar alerta de error
        showAlertError();
       
    } else {
        // Mostrar alerta de éxito
        showAlertSuccess();
    }
});


