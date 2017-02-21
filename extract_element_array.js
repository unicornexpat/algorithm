/*
 An array contain other array and so on. extract them all so a 1 dimension array.
 */

var newArray = [];

function readArray(array){
    array.forEach(function(el){
        if (el.constructor !== Array){
            newArray.push(el);
        }
        else{
            readArray(el);
        }
    });
}
