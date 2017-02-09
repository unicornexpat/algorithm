/*

1.1 Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures?

*/
//case sensitive
function checkDuplicateUsingObject(str) {
    let chars = {};

    for (let c of str){
        if (chars[c.charCodeAt(0)]) return false;
        chars[c.charCodeAt(0)] = c;
    }

    return true;
}

function checkDuplicateUsingMap(str) {
    let chars = Array.prototype.map.call(str, function (c) {
        return c.charCodeAt(0);
    });

    return (new Set(chars)).size !== chars.length;
}

//non case sensitive
function checkDuplicateUsingArray(str) {
    let chars = [];

    for (let c of str){
        if (chars.indexOf(c) !== -1) return false;
        chars.push(c);
    }

    return true;
}


