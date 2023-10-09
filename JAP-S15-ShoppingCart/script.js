const URL = "https://fakestoreapi.com/products";
const container = document.getElementById("items");
let data_cart; // Variable global para almacenar los datos del carrito

// Fetch Carrito
function getCartInfo(data) {
  return new Promise((resolve, reject) => {
    fetch(data)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error))
  });
}

// Mostrar información del carrito
async function showData() {
  try {
    data_cart = await getCartInfo(URL);
    showCartInfo(data_cart);
  } catch (error) {
    console.log(error);
  }
}



// Mostrar información del carrito
function showProductInfo(data_cart) {
  for (const [index, product] of data_cart.entries()) {
    container.innerHTML += `
      <tr data-index="${index}">
        <td><img src="${product.image}" 
        class="img-fluid mt-2 cursor-active" style="max-height: 80px;"></td>
        <td onclick="agregarAlCarrito(item)">${product.title}</td>
        <td> <span>${product.price}</span></td>
        <td><button>Comprar</td>
      </tr>
    `;
  }
}



function agregarAlCarrito(item) {
    const listaCarrito = document.getElementById('listaCarrito');

    // Crear un elemento de lista para el nuevo artículo
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.textContent = item;

    // Agregar el nuevo elemento a la lista del carrito
    listaCarrito.appendChild(listItem);
  }



/* TODO ESTO ES LO QUE IRIA DENTRO DEL CARRITO
// Agregar evento input a los elementos de cantidad
container.addEventListener("input", function (event) {
    if (event.target.classList.contains("quantity-input")) {
      updateSubtotal(event.target);
    }
  });  

// Mostrar información del producto DENTRO DEL CARRITO
function showCartInfo(data_cart) {
    for (const [index, product] of data_cart.entries()) {
      container.innerHTML += `
        <tr data-index="${index}">
          <td><img src="${product.image}" 
          class="img-fluid mt-2 cursor-active" style="max-height: 80px;"></td>
          <td>${product.title}</td>
          <td> <span>${product.price}</span></td>
          <td><input class="col-lg-2 quantity-input" type="number" min="0" max="${product.rating.count}" value="1"></td>
          <td><strong><span>${product.price * product.rating.count}</span></strong></td>
        </tr>
      `;
    }
  }

// Actualizar subtotal en tiempo real
function updateSubtotal(inputElement) {
    const rowIndex = inputElement.closest("tr").getAttribute("data-index");
    const quantity = parseInt(inputElement.value);
    const product = data_cart[rowIndex];
    const subtotal = quantity * product.price;
  
    const subtotalElement = inputElement.closest("tr").querySelector("td:last-child strong span");
    subtotalElement.textContent = subtotal;
  }
*/

document.addEventListener("DOMContentLoaded", function () {
  showData();
});
