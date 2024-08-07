const express = require('express');
const routes = require("./routes");
const arquivos = require("./manipulador_de_arquivos");
const fs = require('fs');

const app = express();

app.use(express.json()); // Middleware para interpretar o JSON

app.use(routes);

app.get('/', (request, response) => {
    response.send("Olá Mundo");
});



app.listen(3000, () => {
    console.log("conectando a porta padrão - 3000");
});
