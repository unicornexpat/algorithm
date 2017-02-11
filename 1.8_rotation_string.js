/*
 Assume you have a method isSubstring which checks if one word is asubstring of another.
 Given two strings, s1 and s2, write code to check If s2 is a rotation of s1 using only one call to isSubstring
 (e.g., "waterbottLe" is a rotation of "erbottLewat").
 */


function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false;

  const s = s1 + s1;
  return s.includes(s2);

}

console.log(isRotation("waterbottle","bottlewater")); // True
console.log(isRotation("waterbottle","ewaterbottl")); // True
console.log(isRotation("waterbottle","aterbottlew")); // True
console.log(isRotation("waterbottle","aterbostlew")); // False
console.log(isRotation("waterbottle","aterbow")); // False