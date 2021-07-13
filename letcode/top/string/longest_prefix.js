/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
*/
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    let prefix = strs[0];
    for(let i = 0; i < strs.length; i++) {
    	while(strs[i].indexOf(prefix) !== 0) {
    		prefix = prefix.slice(0, -1);
    		if (prefix.length === 0) return '';
    	}
    }
    return prefix;
};

const strs = ["c","acc","ccc"];
console.log(longestCommonPrefix(strs));