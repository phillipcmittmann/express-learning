const express = require("express");

const app = express();

app.get("/", function(request, response) {
    response.send("Teste de resposta.");
});

app.get("/blog", function(request, response) {
    response.send("Teste de segunda rota.");
});

app.listen(4000, function(error) {
    if(error) {
        console.log("Ocorreu um erro.");
    } else {
        console.log("Servidor iniciado com sucesso.");
    };
})