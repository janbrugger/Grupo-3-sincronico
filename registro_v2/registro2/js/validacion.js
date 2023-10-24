const formulario = document.getElementById("form");
const checkbox = document.getElementById('terminos');
const botonTerminos = document.getElementById('boton_terminos');
const feedbackTerminos = document.getElementById("feedback_terminos");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

document.addEventListener('DOMContentLoaded', function () {
//Da feedback en tiempo real si se modifica el checkbox
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            feedbackTerminos.setAttribute("hidden", "true");
            botonTerminos.classList.remove('link-danger');

        } else {
            feedbackTerminos.removeAttribute("hidden");
            botonTerminos.classList.add('link-danger');
            botonTerminos.classList.add('is-invalid');

        }
    });
});

//Feedback de Terminos del servicio al hacer submit
formulario.addEventListener('submit', function(event) {
    if (!checkbox.checked) {
        event.preventDefault()
        botonTerminos.classList.add('is-invalid');
        botonTerminos.classList.add('link-danger');

      }
});

// Validar que las contraseñas coincidan
password2.addEventListener('input', function () {
    if (password1.value !== password2.value) {
        password2.setCustomValidity('Las contraseñas no coinciden');
    } else {
        password2.setCustomValidity('');
    }
});



//Aplicar estilos de validación de Bootstrap
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


 