/*
 Write a method to replace all spaces in a string with'%20'.
 You may assume that the string has sufficient space at the end
 of the string to hold the additional characters, and that you
 are given the "true" length of the string. (Note: if implementing
 in Java, please use a character array so that you can perform
 this operation in place.)

 EXAMPLE
 Input: "Mr John Smith    "
 Output: "Mr%20Dohn%20Smith"
 */

function replaceSpace(str) {
    for(let i = str.length - 1; i > 0; i--) {
        if (str[i] !== ' ') {
            return Array.prototype.map.call(str.substr(0, i + 1), function(c) {
                if (c === ' ') return '%20';
                return c;
            }).join('');
        }
    }
}

function replaceSpace2(str) {
    //remove back " "
  let i = str.length - 1;

  while(i--) {
    if (str[i] !== " ") break;
  }

  let newStr = str.substr(0, i + 1);

  let strArr = newStr.split("");
  let spaceIndex = strArr.indexOf(" ");

  while(spaceIndex >= 0) {
      strArr[spaceIndex] = "%20";
      spaceIndex = strArr.indexOf(" ");
  }
  return strArr.join("");
}

const input = "Mr John Smith    ";

console.log(replaceSpace2(input));