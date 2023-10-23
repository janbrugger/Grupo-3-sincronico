const formulario = document.getElementById("form");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email");

document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('terminosCheck');
    const parrafoTerminos = document.getElementById('parrafo_terminos');

    // Agregar un evento de cambio al checkbox
    checkbox.addEventListener('change', function () {
        // Ajustar la visibilidad del párrafo dependiendo del estado del checkbox
        if (checkbox.checked) {
            // Ocultar el párrafo
            parrafoTerminos.classList.add('d-none');
            parrafoTerminos.classList.remove('d-block');
        } else {
            // Mostrar el párrafo
            parrafoTerminos.classList.add('d-block');
            parrafoTerminos.classList.remove('d-none');
        }
    });
});



formulario.addEventListener('submit', function(event) {

    const checkbox = document.getElementById('terminosCheck');
    const parrafoTerminos = document.getElementById('parrafo_terminos');

    // Agregar un evento de cambio al checkbox
    checkbox.addEventListener('change', function () {
        // Ajustar la visibilidad del párrafo dependiendo del estado del checkbox
        if (checkbox.checked) {
            // Ocultar el párrafo
            parrafoTerminos.classList.add('d-none');
            parrafoTerminos.classList.remove('d-block');
        } else {
            // Mostrar el párrafo
            parrafoTerminos.classList.add('d-block');
            parrafoTerminos.classList.remove('d-none');
        }
    });

    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
  
    if (password1.length < 6) {
     // alert("La contraseña debe tener al menos 6 caracteres");
      event.preventDefault();
      return;
    }
  

if (password1 !== password2) {
    //alert('Las contraseñas no coinciden');
 event.preventDefault();
 return;
  }

 const email = document.querySelector("#email").value;
    if(!valEmail(email)) {
        alert('El email no es válido');
        event.preventDefault();
        return;
    }
  
    /*
    if (!checkTerminos.checked) {
        // parrafoTerminos.innerText = "Debe aceptar los términos de servicio";
         parrafoTerminos.removeAttribute("hidden");
     }
     */

     if (checkTerminos.checked) {
        // Ocultar el párrafo
        parrafoTerminos.classList.add('d-none');
        parrafoTerminos.classList.remove('d-block');
    } else {
        // Mostrar el párrafo
        parrafoTerminos.classList.add('d-block');
        parrafoTerminos.classList.remove('d-none');
    }



});
//Aqui termina el Event de submit




   


(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


 