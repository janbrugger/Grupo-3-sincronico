const btnBuscar = document.getElementById("btnGet1")
const btnAgregar = document.getElementById("btnPost")
const btnModificar = document.getElementById("btnPut")
const btnBorrar = document.getElementById("btnDelete")
const valueBuscarRegistro = document.getElementById("inputGet1Id")
const pizarra = document.getElementById("results")
const apiURL = "https://65427af5ad8044116ed37020.mockapi.io/users/";



// fetch Guille
let fetchJSONData = function(url, type){
    let result = {};
    return fetch(url, type)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
}

//Buscar registro
btnBuscar.addEventListener("click", function(){

  if(valueBuscarRegistro.value === ""){
    listAllUsers(valueBuscarRegistro.value)  
    } else if(valueBuscarRegistro.value >= 1 && valueBuscarRegistro.value <= 6) {
      listAllUsers(valueBuscarRegistro.value)
    } else {
        alert("ingrese un valor entre 1 y 6");
    } 
});

//function fetch users
function listAllUsers(id){
    let type = { method: "GET", headers: {"Content-type": "application/json; charset=UTF-8"}};
    fetchJSONData(apiURL + id, type).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            pizarra.innerHTML = ""
            let users = resultObj.data
            console.log(users)

            if(valueBuscarRegistro.value === ""){
            users.forEach(element => {
                pizarra.innerHTML +=  `
                <div>ID: ${element.id}</div> 
                <div>NAME: ${element.name}</div>
                <div>LASTNAME: ${element.lastname}</div> 
                `})   
            } else if(valueBuscarRegistro.value >= 1 && valueBuscarRegistro.value <= 6) {
                pizarra.innerHTML =  `
                <div>ID: ${users.id}</div> 
                <div>NAME: ${users.name}</div>
                <div>LASTNAME: ${users.lastname}</div> 
                `
            } else {
                alert("ingrese un valor entre 1 y 6");
            } 
      }})
    }


//Ingresa un nuevo registro
btnAgregar.addEventListener("click", function(){
  console.log('btnAgregar.addEventListener' )
  let nombre = document.getElementById("inputPostNombre")
  let apellido = document.getElementById("inputPostApellido")
  introduceNewUsers(nombre, apellido)
  

});

function introduceNewUsers(){
  /*
let newUser = {
        'id': id,
        'nombre': nombre,
        'apellido': apellido
    }
  */

  }
/*
// Ejemplo implementando el metodo POST:
async function postData(apiURL = '', data = {}) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(apiURL, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('https://example.com/answer', { answer: 42 })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
*/





    




// Borrar tro
/*async function deleteUser () {
const id = document.getElementById("inputDelete").value;
if (id) {
    try {
        await axios.delete('apiURL'${id});
        
    }
}
axios.delete('apiURL'/id`)
  .then(response => {
    console.log('Resource deleted successfully:', response.data);
  })
  .catch(error => {
    console.error('Error deleting resource:', error`);
  });
    
}

    
})


// Modificar registro 
btnModificar.addEventListener("click", ()=> {*/

/*
document.getElementById('buscarButton').addEventListener('click', function() {
  const id = document.getElementById('idInput').value;
  const resultsDiv = document.getElementById('resultsDiv');
  let url = 'https://SECRET.mockapi.io/users';

  if (id) {
    url = `https://SECRET.mockapi.io/users/${id}`;
  }

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('No se encontró ningún registro con ese ID.');
      }
    })
    .then(data => {
      resultsDiv.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      resultsDiv.innerHTML = error.message;
      console.error('Error:', error);
    });
});
*/




