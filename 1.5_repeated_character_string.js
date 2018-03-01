/*
 Implement a method to perform basic string compression
 using the counts of repeated characters.
 For example, the string aabcccccaaa would become a2blc5a3.
 If the "compressed" string would not become smaller than the
 original string, your method should return the original string.
 */

//Case Sensitive
function compressStringWhile(str) { //faster
    let newString = "";
    let count = 1;
    let char = str[0];
    let i = 1;

    while (i < str.length) {
        if (char === str[i]) {
            count++;
            i++;
        } else {
            newString += char + count;
            char = str[i];
            count = 0;
        }
    }

    newString += char + count;

    return newString.length >= str.length ? str : newString;
}

//Case Sensitive
function compressStringMap(str) {
    let chars = [];

    Array.prototype.map.call(str, function (c) {
        if (Number.isInteger(chars[chars.length -1])) {//mat continue counting
            if (c === chars[chars.length - 2]) chars[chars.length - 1] += 1;
            else chars.push(c);
        } else {
            if (c === chars[chars.length -1]) chars.push(2);
            else chars.push(c);
        }
    });

    return chars.length >= str ? str : chars.join('');
}

console.time("compressStringWhile");
compressStringWhile('aaaaabwjwkbbbbbbbbbbbbbbbBB');
console.timeEnd("compressStringWhile");

console.time("compressStringMap");
compressStringMap('aaaaabwjwkbbbbbbbbbbbbbbbBB');
console.timeEnd("compressStringMap");
