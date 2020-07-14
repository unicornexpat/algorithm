/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if (!strs.length) return '';

    let prefix=strs[0];

    for (let i = 0; i < strs.length; i++) {
    	while(prefix.length  && i + 1 < strs.length) {
			if (strs[i+1].indexOf(prefix) === 0) {
				break;
			}
			prefix = prefix.slice(0, -1);
		}
    }

    return prefix;
};


var longestCommonPrefixFaster = function(strs) {
	if (!strs.length) return '';

    let prefix=strs[0];

    strs.forEach((str, i) => {
    	//binary search here
    });

    for (let i = 0; i < strs.length; i++) {
    	while(prefix.length  && i + 1 < strs.length) {
			if (strs[i+1].indexOf(prefix) === 0) {
				break;
			}
			prefix = prefix.slice(0, -1);
		}
    }

    return prefix;
};

const test = ["flower","flow","flight"];

console.log('Test Result', longestCommonPrefix(test));

