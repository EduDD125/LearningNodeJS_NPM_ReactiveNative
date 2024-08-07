const express = require("express");
const arquivos = express.Router();

const fileSystem = require("fs");

//leitura do conteudo do arquivo
/*fileSystem.readFile("../exemplo.txt", "utf8", (err, data) =>{
    if(err) throw err;
    console.log(data);
})*/

arquivos.post("/escrever", (req, res) => {
    const {content} = req.body; // Pegando a string do query parameter 'content'
    const stringToWrite = content;


    if (!stringToWrite) {
        return res.status(400).send("O parâmetro 'content' é obrigatório.");
    }

    fs.writeFile('Novo.txt', stringToWrite, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Erro ao escrever no arquivo.");
        }
        res.send("Conteúdo escrito no arquivo com sucesso!");
    });
});

module.exports = arquivos;