/*

You are in an infinite 2D grid where you can move in any of the 8 directions :

 (x,y) to
    (x+1, y),
    (x - 1, y),
    (x, y+1),
    (x, y-1),
    (x-1, y-1),
    (x+1,y+1),
    (x-1,y+1),
    (x+1,y-1)
You are given a sequence of points and the order in which you need to cover the points. Give the minimum number of steps in which you can achieve it. You start from the first point.

Example :

Input : [(0, 0), (1, 1), (1, 2)]
Output : 2
It takes 1 step to move from (0, 0) to (1, 1). It takes one more step to move from (1, 1) to (1, 2).

This question is intentionally left slightly vague. Clarify the question by trying out a few cases in the “See Expected Output” section.
 */

function coverPoints(A, B) {
  var steps = 0;

  for (var i = 1; i < A.length; i++) {
    steps += Math.max(Math.abs(A[i] - A[i - 1]), Math.abs(B[i] - B[i-1]));
  }

  return steps;
}

const A=[0, 0];
const B=[1, 2];

console.log(coverPoints(A, B));