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
  let row = numRows;

  let index = 0;
  let zag = false;
  let column = 0;

  while (string.length > 0) {
    while (index < row && !zag) { //zig loop
      console.log('zig');
      let arr = result[index] ? result[index] : [];
      arr.push(string.shift());
      result[index++] = arr;
    }

    while (row > 0 && zag) { //zag
      let arr = result[column] ? result[column] : [];
      arr.push(string.shift());
      result[column] = arr;
      column++;
    }

    row = numRows;
    index = 0;
    zag = !zag;
    console.log(row, index, zag, column, result);
  }
};

console.log(convert("PAYPALISHIRING", 3));