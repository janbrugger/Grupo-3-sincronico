const express = require("express"); // Importa ExpressJS. Más info de Express en =>https://expressjs.com/es/starter/hello-world.html

const app = express(); // Crea una instancia de ExpressJS

const port = `https://65427af5ad8044116ed37020.mockapi.io`;

app.use(express.json()); // Permite que el servidor analice el cuerpo de las peticiones como JSON

const people = require("./json/people.json"); // Importa los datos iniciales (generados en https://www.mockaroo.com/)

app.get("/", (req, res) => {
  // El primer parámetro SIEMPRE es asociado a la request (petición) y el segundo a la response (respuesta)
  res.send("<h1>Bienvenid@ al servidor</h1>");
});

app.get("/people", (req, res) => {
  res.json(people); // Enviamos todo el array
});

app.get("/people/:index", (req, res) => {
  /*La propiedad "params" del request permite acceder a los parámetros de la URL 
    (importante no confundir con la "query", que serían los parámetros que se colocan 
    luego del signo "?" en la URL)
   */
  res.json(people[req.params.index]); // Enviamos el elemento solicitado por su índice
});

app.post("/people", (req, res) => {
  /* La propiedad "body" del request permite acceder a los datos 
       que se encuentran en el cuerpo de la petición */

  people.push(req.body); // Añadimos un nuevo elemento al array

  res.json(req.body); // Le respondemos al cliente el objeto añadido
});

app.put("/people/:index", (req, res) => {
  /* COMPLETA EL CÓDIGO NECESARIO:
     Para que se pueda actualizar el objeto asociado al índice indicado en la URL 
   */
  const index = parseInt(req.params.index);
  const newData = req.body; 

  people[index] = newData;

  // Devuelve una respuesta de éxito
  res.status(200).json({ message: "Objeto actualizado correctamente" });
});

app.delete("/people/:index", (req, res) => {
/* COMPLETA EL CÓDIGO NECESARIO:*/
const index = parseInt(req.params.index);

  // Verifica si el índice es válido
  if (isNaN(index) || index < 0 || index >= people.length) {
    return res.status(400).json({ error: "Índice no válido" });
  }

  // Elimina el objeto en el índice especificado
  people.splice(index, 1);

  // Devuelve una respuesta de éxito
  res.status(200).json({ message: "Objeto eliminado correctamente" });
});

// Esta línea inicia el servidor para que escuche peticiones en el puerto indicado
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
