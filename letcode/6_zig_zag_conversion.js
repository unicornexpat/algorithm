/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 */

const convert = function(s, numRows) {
  let string = s.split("");
  let result = [];

  let index = 0;
  let zag = false;

  while (string.length > 0) {
    while (index < numRows) { //zig loop
      result[index] = string.shift();
      index++;
    }

    while (numRows >= 0) {
      result
    }

    index = 0;
    zag = !zag;
  }
};

console.log(convert("PAYPALISHIRING", 3));