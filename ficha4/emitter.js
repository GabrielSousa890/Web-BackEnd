// Classe
class Emitter {
    constructor(){
        // propriedade
        this.events = {};
    }
}

// função ou método
Emitter.prototype.on = function(type, listener){
    if(this.events[type] == undefined){
        this.event[type] = [];
    }
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){
    if(this.events[type] == undefined){
        this.event[type].array.forEach(function(element){
            listener();
        });
    }
}

// criação de uma nova instancia da classe Emitter
var emitter = new Emitter();

// Invocação do metodo ON
emitter.on("login",function(){
    console.log("O evento login foi despoletado");
});

emitter.on("logout",function(){
    console.log("O evento logout foi despoletado");
});

var x = 0;