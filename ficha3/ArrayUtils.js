var arrayUtils = {
    isEmpty: function(array){
        if(array.length == 0){
            if(array != undefined){
                return array.length == 0;
            }else{
                return "Array is undefined";
            }
        }
    }, 
    max: function(array){
        var m = array[0];
        for (let i = 1; i < array.length; i++) {
            if(array[i] > m){
                m = array[i];
            }
        }
        return m;
    },
    min: function(array){
        var m = array[0];
        for (let i = 1; i < array.length; i++) {
            if(array[i] < m){
                m = array[i];
            }
        }
        return m;
    },
    average: function(array){
        var avg = 0;
        for (let i = 0; i < array.length; i++) {
          avg += array[i];
        }
        return avg / array.length;
    },
    indexOf: function(array, value){
        for (let i = 0; i < array.length; i++) {
            if(value == array[i]){
                return i;
            }
        }
        return -1;
    },
    subArray: function(array, startIndex, endIndex){
        var a = [];
        for (let i = 0; i < array.length; i++) {
            a.push(array[i]);
        }
        return a;
    },
    isSameLength: function (array, otherArray){
        return array.length == otherArray.length;
    },
    reverse: function(array){
        var r = [];
        for (let i = array.length-1; i >= 0 ; i--) {
            r.push(array[i]);
        }
        return r;
    },
    swap: function(array, index1, index2){
        var val1 = array[index1];
        var val2 = array[index2];

        array[index1] = val2;
        array[index2] = val1;

        return array;
    },
    contains: function(array, value){
        
    }
}; 

module.exports = arrayUtils;