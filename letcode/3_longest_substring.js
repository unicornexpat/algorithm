/*
 Given a string, find the length of the longest substring without repeating characters.

 Examples:

 Given "abcabcbb", the answer is "abc", which the length is 3.

 Given "bbbbb", the answer is "b", with the length of 1.

 Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

function longestString(s) {
    let start = 0;
    let maxLength = 0;
    let usedChar = {};

    for (let i in s) {
        if (usedChar[s[i]] && start <= usedChar[s[i]]) {
            start = parseInt(usedChar[s[i]]) + 1;
        } else {
            maxLength = Math.max(maxLength, i - start + 1);
        }
        usedChar[s[i]] = i;
    }

    return maxLength;
}

console.log(longestString("abcabcbb"));
console.log(longestString("pwwkew"));


