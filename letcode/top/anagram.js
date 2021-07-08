/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
*/
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const map = {};
    for (let c of s) {
    	map[c] = (map[c] || 0) + 1;
    }

    for (let c of t) {
    	if (!map[c]) return false;
    	else map[c]--;
    }
    return true;
};

var isAnagramSlower = (s, t) => {
	return s.split('').sort().join('') === t.split('').sort().join('');
}
const s = "anagram", t = "nagaram";
// const s = "rat", t = "car"
console.log(isAnagram(s, t));