
// inputs ?
// peso e altura

// outputs ?
// imc

// Alinea 1 =============================================================================
/*
// assinatura da função
function calcuçateIMC(weight, height){
    var imc = weight/Math.pow(height, 2);
    return imc;
}

function logIMC(weight, height){
    var imc = calcuçateIMC(weight, height);
    if( imc < 18.5){
        console.log("IMC: "+ imc +" - Está abaixo do peso!");
    }else if(imc >= 18.5 && imc < 25){
        console.log("IMC: "+ imc +" - Está no peso normal!");
    }else if(imc >= 25 && imc < 30){
        console.log("IMC: "+ imc +" - Está acima do peso!");
    }else{
        console.log("IMC: "+ imc +" - Está obeso!");
    }
}

// invocação da função com argumentos e atribuição e variável
var imc = calcuçateIMC(80, 2);
// imprimir o resultado na consola
console.log(imc);

// Alinea 2 ===========================================================================


function invertWord(str){
    var inv = "";
    for(let index = str.length -1; index >= 0; index--){
        inv+=str[index];
    }
    return inv;
}

function invertString(str,pattern){
    var inv = "";
    var split = str.split(pattern);
    for(let index = 0; index < split.length; index++){
        var word = invertWord(split[index]);
        inv += word + pattern;
    }
    return inv;
}

var inveredStr = invertString("Hoje,e,Domingo", ",");
console.log(inveredStr);

// Alinea 3 ===========================================================================

function countVogals(str){
    var count = 0,
    var vogals = ["a","e","i","o","u"];
    for(let index = 0; index < str.length; index++){
        for(let j = 0; j < vogals.length; j++){
            if(str[index] == vogals[j]){
                count++;
            }
        }
    }
    return count;
}

var vogals = countVogals("Hello");
console.log(vogals);


// Alinea 4 ===========================================================================

function countLetter(str, letter){
    str = str.toLowerCase();
    var count = 0;
    for(let index = 0; index < str.length; index++){
        if(str[index] == letter){
            count++;
        }
    }
    return count;
}

var count = countLetter("Hello", "e");
console.log(count);

// Alinea 5 ===========================================================================

function calculateWorking(he,me,se,hs,ms,ss){

    if( he < 8 || hs > 18){
        console.log("Horario não permitido!!!");
        return;
    }

    var enterInSeconds = he * 3600 + me * 60 + se;
    var exitInSeconds = hs * 3600 + ms * 60 + ss;
    var timeInSeconds = exitInSeconds - enterInSeconds;

    var remainderHour = timeInSeconds % 3600;
    var hours = (timeInSeconds - remainderHour) / 3600;

    var remainderMinutos = remainderHour / 60;
    var minutos = (remainderHour - remainderMinutos) % 60;

    console.log("Tempo de trabalho: " + hours + ":" + minutos + ":" + remainderMinutos);
}

calculateWorking(8,30,0,16,0,0)


// Alinea 6 ===========================================================================

function drawRectangle(width, height){
    var line = "";
    for(let i = 0; i < width; i++){
        line+="*";    
    }
    for(let j = 0; j < height; j++){
        console.log(line);
    }
}

drawRectangle(20,10);

// Alinea 7 ===========================================================================

function draw( height){
    
    for(let j = 0; j <= height; j++){
        var line = "";
        for(let i = 0; i < j; i++){
            line+="*";    
        }
        console.log(line);
    }
}

draw(5);
*/
// Alinea 8 ===========================================================================

function drawBox(width, height) {
    for (let j = 0; j < height; j++) {
        var line = "";
        for (let i = 0; i < width; i++) {

            if(j == 0 || j == height - 1 || i == 0 || i == width - 1) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line);
    }
}

drawBox(10, 10);

// Alinea 9 ===========================================================================

var student1 = {firstname: "Pedro", lastname: "Marques", age: 20,grade: 16.5, getGrade: function(){return "O aluno "+this.firstname+" "+this.lastname+" com a idade "+this.age+" teve a nota "+this.grade}};
var student2 = {firstname: "Joao", lastname: "Freitas", age: 23,grade: 12.5, getGrade: function(){return "O aluno "+this.firstname+" "+this.lastname+" com a idade "+this.age+" teve a nota "+this.grade}};
var student3 = {firstname: "Raul", lastname: "Sousa", age: 15,grade: 15, getGrade: function(){return "O aluno "+this.firstname+" "+this.lastname+" com a idade "+this.age+" teve a nota "+this.grade}};
var student4 = {firstname: "Manuel", lastname: "Pereira", age: 18,grade: 13, getGrade: function(){return "O aluno "+this.firstname+" "+this.lastname+" com a idade "+this.age+" teve a nota "+this.grade}};
var student5 = {firstname: "Ruca", lastname: "Dumas", age: 19,grade: 19, getGrade: function(){return "O aluno "+this.firstname+" "+this.lastname+" com a idade "+this.age+" teve a nota "+this.grade}};
var student6 = {firstname: "Diniz", lastname: "jesus", age: 17,grade: 12, getGrade: function(){return "O aluno "+this.firstname+" "+this.lastname+" com a idade "+this.age+" teve a nota "+this.grade}};
var student7 = {firstname: "Afonso", lastname: "fernades", age: 21,grade: 14, getGrade: function(){return "O aluno "+this.firstname+" "+this.lastname+" com a idade "+this.age+" teve a nota "+this.grade}};
var student8 = {firstname: "Luis", lastname: "Sousa", age: 17,grade: 15.5, getGrade: function(){return "O aluno "+this.firstname+" "+this.lastname+" com a idade "+this.age+" teve a nota "+this.grade}};
var student9 = {firstname: "Raquel", lastname: "Carvalho", age: 18,grade: 16, getGrade: function(){return "O aluno "+this.firstname+" "+this.lastname+" com a idade "+this.age+" teve a nota "+this.grade}};

var studentsList = [];

studentsList.push(student1);
studentsList.push(student2);
studentsList.push(student3);
studentsList.push(student4);
studentsList.push(student5);
studentsList.push(student6);
studentsList.push(student7);
studentsList.push(student8);
studentsList.push(student9);

function displayGrades(array){
    for (let i = 0; i < array.length; i++) {
        const student = array[i];
        console.log(student.getGrade());
    }
}

displayGrades(studentsList);

function getBestGrade(array){
    var max = array[0].grade;
    for (let i = 0; i < array.length; i++) {
        if(array[i].grade > max){
            max = array[i];
        }
    }
    return max;
}

var bestGrade = getBestGrade(studentsList);
console.log(bestGrade.getGrade);

function getAverage(array){
    var average = 0;
    for (let i = 0; i < array.length; i++) {
        average += array[i].grade;
    }
    average = average / array.length;
    return average;
}

function getClosestFromAverage(array){
    var average = getAverage(array);
    var min = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        var diff = Math.abs(average - array[i].grade);
        if(diff < min){
            min = diff;
            index = i;
        }
    }
    return array[index];
}