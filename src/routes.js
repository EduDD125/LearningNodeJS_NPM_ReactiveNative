const express = require('express');
const routes = express.Router();

routes.post('/login', (request, response) => {
   //response.send("login");
   const {email, password} = request.body;

    response.send(email + " |dfndlkfjdlskafjlkdsajfl " + password);
    if (password == "123456")
        console.log("senha correta")

});

module.exports = routes;