const express = require('express');
const fs = require('fs');

// instacionar o express
const app = express();
// definir a porta do servidor http
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// default get endpoint
app.get('/', (request, response) => {
    var body = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body></body></html>';
    response.writeHead(200,{
        'Content-length': Buffer.byteLength(body),
        'Content-type': 'text/plain'
    });
    response.end(body);
});

// metodo que arranca os servidor http e fica à escuta
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    fs.open('log.txt','a', function(err, fd){
        console.log("File was created " + fd);
    });
});