const inputText = document.getElementById("item"); //accedo al campo a completar
const buttonAdd = document.getElementById("agregar"); //accedo al boton agregar
const contendedorResp = document.getElementById("contenedor"); // ahora accedo al contenedor a lo que guarda lo ingresado
const btnLimpiar = document.getElementById("limpiar"); //accedo al boton
let arrayDatosIngresados = [];

addEventListener("DOMContentLoaded", (event) => {
    arrayDatosIngresados = JSON.parse(localStorage.getItem("dato"))
    if (arrayDatosIngresados != null || arrayDatosIngresados != undefined){
        for (let element of arrayDatosIngresados){
            contendedorResp.innerHTML += `<li class="border p-2">  ${element} </li>`;   
        }
    } else {
        arrayDatosIngresados = []
    }
});

buttonAdd.addEventListener("click", agregarDato )

function agregarDato() {
    const datoIngresado = inputText.value.trim(); 
    if (datoIngresado !== '') {
    arrayDatosIngresados.push(datoIngresado)
    localStorage.setItem("dato", JSON.stringify(arrayDatosIngresados));
    contendedorResp.innerHTML += `<li class="border p-2">  ${datoIngresado} </li>`;    
    inputText.value = "";
    }
}

btnLimpiar.addEventListener("click", function() {
    localStorage.clear();
    contendedorResp.innerHTML = "";
    inputText.value = "";
    arrayDatosIngresados = [];
});

