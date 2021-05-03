var array = [];

array.push(
    function(index){
        console.log("Hello World "+index);
    }
);

array.push(function(params){

});

for (let i = 0; i < 10; i++) {
    array[0](i + 1);
}