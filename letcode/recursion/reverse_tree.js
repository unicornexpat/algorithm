/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if (!s.length) return;
    const holder = s[0];
    s.shift();
    reverseString(s);
    s.push(holder)
};

const s = ["h","e","l","l","o"];
reverseString(s);
console.log(s);