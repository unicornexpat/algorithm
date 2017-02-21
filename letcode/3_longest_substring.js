/*
 Given a string, find the length of the longest substring without repeating characters.

 Examples:

 Given "abcabcbb", the answer is "abc", which the length is 3.

 Given "bbbbb", the answer is "b", with the length of 1.

 Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

function longest_substring_without_repeating_characters(input) {
    var chars = input.split('');
    var curr_char;
    var str = "";
    var longest_string = "";
    var hash = {};

    for (var i = 0; i < chars.length; i++) {
        curr_char = chars[i];
        if (!hash[chars[i]]) {
            str += curr_char;
            hash[chars[i]] = {index: i};
        }
        else {
            if (longest_string.length <= str.length) {
                longest_string = str;
            }
            var prev_dupeIndex = hash[curr_char].index;
            var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
            str = str_FromPrevDupe + curr_char;
            hash = {};
            for (var j = prev_dupeIndex + 1; j <= i; j++) {
                hash[input.charAt(j)] = {index: j};
            }
        }
    }
    return longest_string.length > str.length ? longest_string : str;
}

function longestString(s) {
    let chars = s.split('');
    let currentChar;
    let length = 0;
    let longestLength = 0;
    let holder = {};
    let lastIndex = 0;

    for (let i = 0; i < chars.length; i++) {
        currentChar = chars[i];
        if (holder[currentChar]) {
            length = i - lastIndex;
            if (length > longestLength) longestLength = length;
            lastIndex = i;
        } else {
            holder[currentChar] = i;
        }
    }

    return longestLength;

}


console.log(longestString("google.com"));

console.log(longestString("example.com"));

