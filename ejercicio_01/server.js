/* Declaración de constantes del servidor */

const express = require('express');
const app = express();

/* Funcionalidad */

app.use(express.static('public'));

app.get('/mensaje', (req, res) => {
  res.send('Proyecto node js con Git');
})

/* Configuraciones del servidor */

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error en servidor ${error}`))
