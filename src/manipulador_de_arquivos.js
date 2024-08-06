const express = require("express");
const arquivos = express.Router();

const fileSystem = require("fs");

//leitura do conteudo do arquivo
fileSystem.readFile("../exemplo.txt", "utf8", (err, data) =>{
    if(err) throw err;
    console.log(data);
})