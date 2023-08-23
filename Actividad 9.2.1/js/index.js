const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");

buttonText.addEventListener("click", function() {
    const datoIngresado = inputText.value; 
    localStorage.setItem("dato", datoIngresado);
})
