/*
 Question: How do get nth Fibonacci number?
 */

function fibonacci(n) {
  if (n <= 2) return 1;

  let fi = [0, 1];

  for (let i = 2; i <= n; i++) {
    fi[i] = fi[i-1] + fi[i-2];
  }

  return fi[n];
}

fibonacci(12);

function fibonacciRec(n) {
  if (n <= 1) return n;
  else return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}

fibonacciRec(12);