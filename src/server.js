const express = require('express');
const app = express();

app.use((express.json()));

app.get('/', (request, respose) => {
    respose.send("Olá mundo");
});

app.listen(3000, () => {
    console.log("conectando a porta padrao - 3000")
});