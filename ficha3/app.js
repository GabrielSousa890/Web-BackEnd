
function started(){
    console.log("Started Download");
}

function completed(){
    console.log("Completed Download");
}

function update(value){
    console.log(value+"% of Download");
}

function performDonwload(started, update, completed){
    started();
    for (let i = 0; i <= 100; i++) { 
        update(i);
    }
    completed();
}

// performDonwload(started, update, completed);


// =====================================================================================

var log = require("./log.js");

console.log(log.message);

console.log(log.functionObj("Hello"));



var arrayUtils =  require("./ArrayUtils.js");
var array = [12,4,6,88,9,0];

console.log("O array está vazio? "+arrayUtils.isEmpty(array));
console.log("O maximo do array é: "+arrayUtils.max(array));
console.log("O minimo do array é: "+arrayUtils.min(array));
console.log("O media do array é: "+arrayUtils.average(array));


