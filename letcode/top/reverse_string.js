/*
Write a function that reverses a string. The input string is given as an array of characters s.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/

var reverseString = function(s) {
    let i = 0;
    let j = s.length - 1;
    let temp;
    while (i < j) {
    	temp = s[i];
    	s[i] = s[j];
    	s[j] = temp;
    	i++;
    	j--;
    }
    return s;
};

const s = ["h","e","l","l","o"];
console.log(reverseString(s));