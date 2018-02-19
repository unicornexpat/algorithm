/*
 N light bulbs are connected by a wire. Each bulb has a switch associated with it, however due to faulty wiring, a switch also changes the state of all the bulbs to the right of current bulb. Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all the bulbs. You can press the same switch multiple times.

 Note : 0 represents the bulb is off and 1 represents the bulb is on.

 Example:

 Input : [0 1 0 1]
 Return : 4

 Explanation :
 press switch 0 : [1 0 1 0]
 press switch 1 : [1 1 0 1]
 press switch 2 : [1 1 1 0]
 press switch 3 : [1 1 1 1]

 */
function lightBulbsByXor(A){
  var sum = 0;

  A.forEach(function(item) {
    if (sum % 2 == 0 && item == 0) sum++;
    else if ((sum % 2 == 1) && (item^1== 0)) sum++;
  });

  return sum;
}

const A =[ 1, 1, 0, 0, 1, 1, 0, 0, 1 ];

console.log(lightBulbsByXor(A));

function lightBulbsByMath(A) {
  var sum = 0;

  A.forEach(function(item) {
    if (!(sum % 2) && !item) sum++;
    else if (sum % 2 && !(1 - item)) sum++;
  });

  return sum;
}

console.log(lightBulbsByMath(A));
