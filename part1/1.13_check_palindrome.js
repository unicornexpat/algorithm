/*
 Question: How will you verify a word as palindrome?
 */

function isPalindrome(str) {
    return str == str.split('').reverse().join('');
}

isPalindrome('madam');