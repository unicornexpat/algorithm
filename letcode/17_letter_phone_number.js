/*
 Given a digit string, return all possible letter combinations that the number could represent.

 A mapping of digit to letters (just like on the telephone buttons) is given below.

 Input:Digit string "23"
 Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
    const keys = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let res = [];

    for (let i = 0; i < digits.length; i++) {
        for (let j  = 0; j < digits[i].length; j++){
            let st = digits[i][j];
            let k = i + 1;
            while (k < digits.length) {

            }

        }
    }
}



console.log(letterCombinations([2, 3]));

