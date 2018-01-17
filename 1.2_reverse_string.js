/*
 1.2 Implement a function void reverse(char* str)
 */

function reverseString(str) {
    return Array.prototype.map.call(str, function(c) {
        return c;
    }).reverse().join('');
}

//Array reverse
function revString(str) {
    return str.split('').reverse().join('');
}

//Reduce reverse
function revString(str) {
    return str.split('').reduce((rev, c) => c + rev);
}

//Normal Loop O(n);
function revString(str) {
    let rev = '';
    for (let c of str) {
        rev = c + rev;
    }
    return rev;
}