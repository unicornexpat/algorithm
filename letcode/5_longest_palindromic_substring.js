/*
 Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

 Input: "babad"

 Output: "bab"

 Note: "aba" is also a valid answer.
 */

function longestPalindrome(s){
    let lo = 0;
    let max = 0;

    if (s.length < 2) return s;

    let palidrome = function(s, j, k) {
        while (j >= 0 && k < s.length && s.charCodeAt(j) === s.charCodeAt(k)) {
            j--;
            k++;
        }

        if (max < k - j - 1) {
            lo = j + 1;
            max = k - j - 1;
        }
    };

    for (let i = 0; i < s.length - 1; i++) {
        palidrome(s, i, i);
        palidrome(s, i, i + 1);
    }

    return s.substring(lo, lo + max);
}

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('bananas'));
console.log(longestPalindrome('qabcddcbaw'));
