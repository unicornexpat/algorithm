/*
 Given two strings, write a method to decide if one is a permutation of the other.
 */

//Case sensitive
function isPermutation(str1, str2) {
    if (str1.length !== str2.length) return false;

    const chars1 = Array.prototype.map.call(str1, function (c) {
        return c;
    }).sort().join('');

    const chars2 = Array.prototype.map.call(str2, function (c) {
        return c;
    }).sort().join('');

    return chars1 === chars2;

}

function isPermutation(str1, str2) {
    if (str1.length !== str2.length) return false;

    const chars1 = Array.prototype.map.call(str1, function (c) {
        return c.charCodeAt(0);
    }).sort();

    const chars2 = Array.prototype.map.call(str2, function (c) {
        return c.charCodeAt(0);
    }).sort();

    for(let i=0; i < chars1.length; i++) {
        if (chars1[i] !== chars2[i]) return false
    }

    return true;

}
