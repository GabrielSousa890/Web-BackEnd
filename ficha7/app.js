const express = require('express');
const mysql = require('mysql');

// instacionar o express
const app = express();
// definir a porta do servidor http
const port = 3000;

// Funções middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha7'
});

app.get('/persons', (request, response) => {
    dbConnection.query("SELECT * FROM persons", function(error, results, fields) {
        if(error){
            response.status(404);
            response.end(error.message);
        }
        response.send(results);
    });
});

app.post('/persons', (request, response) =>{

    var details = request.body;

    // details 
    // {
    //     "firstname": "Ana",
    //     "lastname": "Matos",
    //     "profession": "DEV",
    //     "age": 34
    // }

    dbConnection.query("INSERT INTO persons ? ", details ,function(error, results, fields) {
        if(error){
            response.status(404);
            response.end(error.message);
        }
        response.send(results.insertId);
    });
});

// metodo que arranca os servidor http e fica à escuta
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});