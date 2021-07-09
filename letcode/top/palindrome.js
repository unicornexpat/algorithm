/*
ven a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/
var isPalindrome = function(s) {
    for (let i=0, j = s.length - 1; i<j; i++, j--) {
    	while(i<j && !(/[a-zA-Z0-9]/).test(s[i])) {
    		i++;
    	}
    	while(i<j && !(/[a-zA-Z0-9]/).test(s[j])) {
    		j--;
    	}
    	if (s[i].toLowerCase() != s[j].toLowerCase()) {
    		return false;
    	}
    }
    return true;
};

const s = "0P";

console.log(isPalindrome(s));