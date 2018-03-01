function performOps(A){
  let B = new Array(2 * A.length);

  for (var i = 0; i < A.length; i++) {
    B[i] = A[i];
    console.log((A.length - i) % A.length);
    B[i + A.length] = A[(A.length - i) % A.length];
  }
  return B;
}

const A = [5, 10, 2, 1];

const B = performOps(A);
console.log(B);