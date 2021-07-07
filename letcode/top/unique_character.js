/*
Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
*/

var firstUniqChar = function(s) {
    let map = new Map();
    for (let i in s) {
    	const el = s[i];
    	if (!map.has(el)) {
    		map.set(el, 1);
    	} else {
    		map.set(el, 2);
    	}
    }
    for (let i in s) {
    	const el = s[i];
    	if (map.has(el) && map.get(el) === 1) {
    		return i;
    	}
    }
    return -1;
};

var firstUniqChar2 = function(s) {
    for(let i in s) {
    	if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
    		return i;
    	}
    }
    return -1;
};

var firstUniqChar = function(s) {
    for(let i=0;i<s.length;i++){
         let el=s[i]
         if(s.indexOf(el)==i && s.indexOf(el,i+1)==-1){
                 return i
         }
    }
        return -1
};




const s = 'loveleetcode';

console.log(firstUniqChar(s));