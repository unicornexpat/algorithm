//1-28. [5] Write a function to perform integer division without using either the / or * operators. Find a fast way to do it.

//Complexity O(n)
function divide(n, d) {
  let c = 0;
  while (n > 0) {
    n -= d;
    c++;
  }

  return c
}

divide(10, 2);