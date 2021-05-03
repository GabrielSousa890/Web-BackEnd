
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

function readFileSync(path){
    var content = fs.readFileSync(path);
    return content;
}

function writeFileSync(path,data){
    fs.writeFileSync(path,data);
}


// instacionar o express
const app = express();
// definir a porta do servidor http
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// default get endpoint
app.get('/', (req, res) => {
  res.send('Hello Postman!');
})

// list all persons endpoint
app.get('/users', (req, res) => {
  var persons = readFileSync("./persons.json");
  res.send(JSON.parse(persons));
})

// list all persons endpoint
app.post('/users', (req, res) => {

  var persons = JSON.parse(readFileSync('./persons.json'));

  var length = Object.keys(persons).length;
  var id = ++length;

  var newPerson = req.body;
  newPerson.id = id;

  persons["person"+id] = newPerson;
  writeFileSync('./persons.json', JSON.stringify(persons));

  res.send(persons);
})

app.delete('/users/:id', (request, response) => {

  var persons = JSON.parse(readFileSync('./persons.json'));
  var id = request.params.id;

  var person = persons["person"+id];
  if(person != undefined){
    delete persons["person"+id];
    response.send(persons);
  }else{
    response.send("ID inexistente");
  }

})

// metodo que arranca os servidor http e fica à escuta
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})