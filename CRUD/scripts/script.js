const btnBuscar = document.getElementById("btnGet1");
const btnAgregar = document.getElementById("btnPost");
const btnModificar = document.getElementById("btnPut");
const btnEnviarCambios = document.getElementById("btnSendChanges");
const btnBorrar = document.getElementById("btnDelete");
const inputBuscarRegistro = document.getElementById("inputGet1Id");
const inputAgregarNombre = document.getElementById("inputPostNombre");
const inputAgregarApellido = document.getElementById("inputPostApellido");
const inputModificarRegistro = document.getElementById("inputPutId");
const inputModificarNombre = document.getElementById("inputPutNombre");
const inputModificarApellido = document.getElementById("inputPutApellido");
const inputBorrarRegistro = document.getElementById("inputDelete");
const pizarra = document.getElementById("results");
const apiURL = "https://65427af5ad8044116ed37020.mockapi.io/users/";

// Función para mostrar alerta
function showAlert(message) {
    const alert = document.getElementById("alert-error");
    alert.textContent = message;
    alert.classList.add("show");

    setTimeout(() => {
        alert.classList.remove("show");
    }, 3000);
}

let fetchJSONData = function (url, type) {
    let result = {};
    return fetch(url, type)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(function (response) {
            result.status = 'ok';
            result.data = response;
            return result;
        })
        .catch(function (error) {
            result.status = 'error';
            result.data = error;
            return result;
        });
}

// Deshabilitar los botones al cargar la página
btnAgregar.disabled = true;
btnModificar.disabled = true;
btnBorrar.disabled = true;

// Función para habilitar o deshabilitar los botones según si hay entrada en los campos respectivos
function toggleButtons() {
    btnAgregar.disabled = inputAgregarNombre.value.trim() === "" || inputAgregarApellido.value.trim() === "";
    btnModificar.disabled = inputModificarRegistro.value.trim() === "";
    btnEnviarCambios.disabled = inputModificarNombre.value.trim() === "" || inputModificarApellido.value.trim() === "";
    btnBorrar.disabled = inputBorrarRegistro.value.trim() === "";
}

// Agregar listeners de evento de entrada para cada campo
inputAgregarNombre.addEventListener("input", toggleButtons);
inputAgregarApellido.addEventListener("input", toggleButtons);
inputModificarRegistro.addEventListener("input", toggleButtons);
inputModificarNombre.addEventListener("input", toggleButtons);
inputModificarApellido.addEventListener("input", toggleButtons);
inputBorrarRegistro.addEventListener("input", toggleButtons);


// Deshabilitar los botones al cargar la página
toggleButtons();


btnBuscar.addEventListener("click", function () {

    listAllUsers(inputBuscarRegistro.value);
});


function listAllUsers(id) {

    let type = { method: "GET", headers: { "Content-type": "application/json; charset=UTF-8" } };
    fetchJSONData(apiURL + id, type).then(function (resultObj) {
        if (resultObj.status === "ok") {
            pizarra.innerHTML = "";
            let users = resultObj.data;
            console.log(users);

            if (inputBuscarRegistro.value === "") {
                users.forEach(element => {
                    pizarra.innerHTML += `
                        <li class="list-group-item bg-dark text-white">
                        <div>ID: ${element.id}</div> 
                        <div>NAME: ${element.name}</div>
                        <div>LASTNAME: ${element.lastname}</div> 
                        </li>
                        `
                })
            } else {
                pizarra.innerHTML = `
                    <li class="list-group-item bg-dark text-white">
                    <div>ID: ${users.id}</div> 
                    <div>NAME: ${users.name}</div>
                    <div>LASTNAME: ${users.lastname}</div>
                    </li> 
                `
                inputBuscarRegistro.value = "";
            }

        } else {
            showAlert("Algo salió mal...");
            pizarra.innerHTML = "";
            inputBuscarRegistro.value = "";

        }
    });
}

btnAgregar.addEventListener("click", function () {

    addUser(inputAgregarNombre.value, inputAgregarApellido.value);
    inputAgregarNombre.value = "";
    inputAgregarApellido.value = "";
    toggleButtons()
});

function addUser(nombre, apellido) {

    const newUser = {
        "name": nombre,
        "lastname": apellido,
    }

    let type = { method: "POST", body: JSON.stringify(newUser), headers: { "Content-type": "application/json; charset=UTF-8" } };
    fetchJSONData(apiURL, type).then(function (resultObj) {
        if (resultObj.status === "ok") {
            pizarra.innerHTML = "";
            let users = resultObj.data;
            console.log(users);

            listAllUsers("");

        } else {
            showAlert("Algo salió mal...");
            pizarra.innerHTML = "";
        }
    });
}

btnEnviarCambios.addEventListener("click", function () {

    updateUser(inputModificarRegistro.value, inputModificarNombre.value, inputModificarApellido.value);
    var dataModal = document.getElementById('dataModal');
    var modal = bootstrap.Modal.getInstance(dataModal)
    modal.hide();

    inputModificarRegistro.value = "";
    inputModificarNombre.value = "";
    inputModificarApellido.value = "";

    toggleButtons()
});



function updateUser(id, nombre, apellido) {

    const modifiedUser = {
        "name": nombre,
        "lastname": apellido,
    }

    let type = { method: "PUT", body: JSON.stringify(modifiedUser), headers: { "Content-type": "application/json; charset=UTF-8" } };
    fetchJSONData(apiURL + id, type).then(function (resultObj) {
        if (resultObj.status === "ok") {
            pizarra.innerHTML = "";
            let users = resultObj.data;
            console.log(users);

            listAllUsers("");


        } else {
            showAlert("Algo salió mal...");
            pizarra.innerHTML = "";
        }
    });
}


btnBorrar.addEventListener("click", function () {

    deleteUser(inputBorrarRegistro.value)

    inputBorrarRegistro.value = "";
    toggleButtons()
});

function deleteUser(id) {

    let type = { method: "DELETE", headers: { "Content-type": "application/json; charset=UTF-8" } };
    fetchJSONData(apiURL + id, type).then(function (resultObj) {
        if (resultObj.status === "ok") {
            pizarra.innerHTML = "";
            let users = resultObj.data;
            console.log(users);

            listAllUsers("");
            
        } else {
            showAlert("Algo salió mal...");
            pizarra.innerHTML = "";           
        }
    });
}