const btnBuscar = document.getElementById("btnGet1");
const btnAgregar = document.getElementById("btnPost");
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
function showErrorAlert(message) {
    const alert = document.getElementById("alert-error");
    alert.textContent = message;
    alert.classList.add("show");

    setTimeout(() => {
        alert.classList.remove("show");
    }, 3000);
}

// Función para mostrar alertas de éxito
function showSuccessAlert(message) {
    const alert = document.getElementById("alert-error");
    alert.textContent = message;
    alert.classList.add("show", "success");

    setTimeout(() => {
        alert.classList.remove("show", "success");
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

btnBuscar.addEventListener("click", function () {

    listAllUsers(inputBuscarRegistro.value)
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
            }
            showSuccessAlert("Consulta exitosa");
        } else {
            showErrorAlert("Error en la consulta");
        }
    });
}

btnAgregar.addEventListener("click", function () {

    addUser(inputAgregarNombre.value, inputAgregarApellido.value)
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
            showSuccessAlert("Usuario agregado exitosamente");
        } else {
            showErrorAlert("Error al agregar usuario");
        }
    });
}

btnEnviarCambios.addEventListener("click", function () {

    updateUser(inputModificarRegistro.value, inputModificarNombre.value, inputModificarApellido.value)
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
            showSuccessAlert("Usuario actualizado exitosamente");
        } else {
            showErrorAlert("Error al actualizar usuario");
        }
    });
}


btnBorrar.addEventListener("click", function () {

    deleteUser(inputBorrarRegistro.value)
});

function deleteUser(id) {

    let type = { method: "DELETE", headers: { "Content-type": "application/json; charset=UTF-8" } };
    fetchJSONData(apiURL + id, type).then(function (resultObj) {
        if (resultObj.status === "ok") {
            pizarra.innerHTML = "";
            let users = resultObj.data;
            console.log(users);

            listAllUsers("");
            showSuccessAlert("Usuario eliminado exitosamente");
        } else {
            showErrorAlert("Error al eliminar usuario");
        }
    });
}