var a = 10;
var b = 5;

// Esta operação é a soma
var c = a + b;

console.log(c);

// Esta função é uma função de teste

function test (a,b){

}

// 5.

var miniProj = 16;
var freq = 10;
var projFinal = 12;

var notaFinal = miniProj * 0.3 + freq * 0.3 + projFinal * 0.4;

// Propriedade
Math.PI;

// concatenar uma string
console.log("A avaliação final é de "+ Math.round(notaFinal)+" valores")

// 6.

var month = 4;

if (month == 1){
    console.log("Janeiro");
}else if(month == 2){
    console.log("Feevereiro");
}

// 7

var operador1 = 2;
var operador2 = 3;
var operando = "+";
var resultado =0;

if (operando == "+"){
    resultado = operador1 + operador2;
}else if (operando == "-"){
    resultado = operador1 - operador2;
}else if (operando == "*"){
    resultado = operador1 * operador2;
}else if (operando == "/"){
    resultado = operador1 / operador2;
}else if (operando == "^"){
    resultado = operador1 ^ operador2;
}

console.log(resultado)

// 8.

// inicialização
var i = 0;

// guarda ou condiçã
while(i <20){
    // execução
    console.log(i);
    // incrementação
    i++;
}

// 9.

var sum = 0;

for(let j=0; j<=3; j++){
    sum += j;
}

console.log(sum);

// 10.

var fact = 1;

for(let j=0; j<=3; j++){
    fact *= j;
}

console.log(fact);

// 11.

var array = [1, 4, 5, 6, 8, 12];

var max = array[0]

for(let i=1; i < array.length; i++){
    if( array[i] > max){
        max = array[i];
    }
}

console.log(max);

var min = array[0]

for(let i=1; i < array.length; i++){
    if( array[i] < min){
        min = array[i];
    }
}

console.log(min);

