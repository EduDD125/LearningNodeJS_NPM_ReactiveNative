const express = require('express');
const routes = express.Router();

routes.post('/login', (request, response) => {
   const {email, password} = request.body;
    
    if (email == "user@gmail.com" && password == "123456")
        console.log(email + " | " + password);
        response.send("usuário foi logado com sucesso");

});

module.exports = routes;