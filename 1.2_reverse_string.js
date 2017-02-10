/*
 1.2 Implement a function void reverse(char* str)
 */

function reverseString(str) {
    return Array.prototype.map.call(str, function(c) {
        return c;
    }).reverse().join('');
}