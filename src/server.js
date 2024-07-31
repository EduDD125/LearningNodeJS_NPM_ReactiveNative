const express = require('express');
const routes = require("./routes");

const app = express();

app.use((express.json()));
app.use(routes);

app.get('/', (request, response) => {
    response.send("Olá Mundo");
});

app.listen(3000, () => {
    console.log("conectando a porta padrao - 3000")
});