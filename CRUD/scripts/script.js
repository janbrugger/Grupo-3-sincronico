const btnBuscar = document.getElementById("btnGet1");
const btnAgregar = document.getElementById("btnPost");
const btnModificar = document.getElementById("btnPut");
const btnBorrar = document.getElementById("btnDelete");
const inputBuscarRegistro = document.getElementById("inputGet1Id");
const inputAgregarNombre = document.getElementById("inputPostNombre");
const inputAgregarApellido = document.getElementById("inputPostApellido");
const inputModificarRegistro = document.getElementById("inputPutId");
const inputBorrarRegistro = document.getElementById("inputDelete");
const pizarra = document.getElementById("results");
const apiURL = "https://65427af5ad8044116ed37020.mockapi.io/users/";


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
            pizarra.innerHTML = ""
            let users = resultObj.data
            console.log(users)

            if (inputBuscarRegistro.value === "") {
                users.forEach(element => {
                    pizarra.innerHTML += `
                <div>ID: ${element.id}</div> 
                <div>NAME: ${element.name}</div>
                <div>LASTNAME: ${element.lastname}</div> 
                `})
            } else {
                pizarra.innerHTML = `
                <div>ID: ${users.id}</div> 
                <div>NAME: ${users.name}</div>
                <div>LASTNAME: ${users.lastname}</div> 
                `
            }
        }
    })

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
            pizarra.innerHTML = ""
            let users = resultObj.data
            console.log(users)


        }
    })

}

btnModificar.addEventListener("click", function () {

    updateUser(inputModificarRegistro.value)
});



function updateUser(id) {

    const modifiedUser = {
        "name": "Nombre actualizado",
        "lastname": "Apellido actualizado",
        "id": id
    }

    let type = { method: "PUT", body: JSON.stringify(modifiedUser), headers: { "Content-type": "application/json; charset=UTF-8" } };
    fetchJSONData(apiURL + id, type).then(function (resultObj) {
        if (resultObj.status === "ok") {
            pizarra.innerHTML = ""
            let users = resultObj.data
            console.log(users)

        }
    })

}


btnBorrar.addEventListener("click", function () {

    deleteUser(inputBorrarRegistro.value)
});

function deleteUser(id) {

    let type = { method: "DELETE", headers: { "Content-type": "application/json; charset=UTF-8" } };
    fetchJSONData(apiURL + id, type).then(function (resultObj) {
        if (resultObj.status === "ok") {
            pizarra.innerHTML = ""
            let users = resultObj.data
            console.log(users)


        }
    })

}