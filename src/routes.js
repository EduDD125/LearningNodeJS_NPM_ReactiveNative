const express = require('express');
const routes = express.Router();

routes.post('/login', (resquest, response) => {
    response.send("login");
});

module.exports = routes;