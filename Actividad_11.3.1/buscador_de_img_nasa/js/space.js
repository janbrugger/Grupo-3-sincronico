const boton = document.getElementById("btnBuscar")
const contenedor = document.getElementById("contenedor");
boton.addEventListener("click", () => {
    var busqueda = document.getElementById("inputBuscar").value
    fetch(`https://images-api.nasa.gov/search?q=${busqueda}`)
        .then(response => response.json())
        .then(data => {
            showData(data) //aca va data
        }).catch(error => {
            console.log(error);
        });
    function showData(data) {
        contenedor.innerHTML = ''; 
        data.collection.items.forEach(item => {
            const imgSrc = item.links[0].href;
            const titulo = item.data[0].title;
            const descripcion = item.data[0].description;
            const fecha = item.data[0].date_created;
            contenedor.innerHTML += `
            
        
            <div class="col-md-4" style="height: 500px;">
                <div class="card mb-4">
                <div style="height: 200px; overflow: hidden;">
                    <img src="${imgSrc}" alt="${titulo}" class="card-img-top">
                </div>
                    <div class="card-body overflow-auto" style=" max-height: 230px;" >
                        <h2 class="card-title">${titulo}</h2>
                        <p class="card-text">${descripcion}</p>
                        <p class="card-text">${fecha}</p>
                    </div>
                </div>
            </div>
       
        `;
            });
            document.getElementById("inputBuscar").value = ""; // Limpia el campo de búsqueda
        }
    });
  