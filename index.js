const express = require("express");

const app = express();

app.get("/", function(request, response) {
    response.send("Teste de resposta.");
});

app.get("/blog/:artigo?", function(request, response) {
    var artigo = request.params.artigo;

    if (artigo) {
        response.send(`<h2>Artigo: ${artigo}.</h2>`)
    } else {
        response.send("Teste de segunda rota.");
    }
});

app.get("/ola/:nome/:empresa", function(request, response) {
    response.send(`<h1>Oi ${request.params.nome} da empresa.</h1>`);
});

app.get("/canal/youtube", function(request, response) {
    var canal = request.query["canal"];
    
    if (canal) {
        response.send(canal);
    } else {
        response.send("Nenhum canal fornecido.");
    }
});

app.listen(4000, function(error) {
    if(error) {
        console.log("Ocorreu um erro.");
    } else {
        console.log("Servidor iniciado com sucesso.");
    }
});