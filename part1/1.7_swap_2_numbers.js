/*
 Question: How would you swap two numbers without using a temporary variable?
 */

function swap(a, b) {
  console.log(a, b);
  b = [a, a = b][0];
  console.log(a, b);
}

swap(1, 2);

function swap(a, b) {
  console.log(a, b);
  [a, b] = [b, a];
  console.log(a, b);
}

swap(1, 2);
