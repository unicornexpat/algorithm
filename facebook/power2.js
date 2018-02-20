//Given a positive integer which fits in a 32 bit signed integer, find if it can be expressed as A^P where P > 1 and A > 0. A and P both should be integers

function isPower(A) {
  const upperLimit = Math.sqrt(A);
  for (let i = 2; i <= upperLimit; i++) {
    let power = Math.pow(A, 1/i);
    if (power >=2 && Number.isInteger(power)) return 1;
  }
  return 0;
}

// console.log(isPower(15));
console.log(isPower(823543));

//ES5
function isPowerByES5(A) {
  if (A == 1) return 1;

  var upperLimit = Math.sqrt(A);

  for (var i = 2; i <= upperLimit; i++) {
    var power = Math.pow(A, 1/i);
    if (parseInt(Number(power)) == power) return 1;
  }
  return 0;
}
console.log(isPowerByES5(823543));
