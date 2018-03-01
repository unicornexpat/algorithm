/*

 Given an even number ( greater than 2 ), return two prime numbers whose sum will be equal to given number.

 NOTE A solution will always exist. read Goldbach’s conjecture

 Example:


 Input : 4
 Output: 2 + 2 = 4

 If there are more than one solutions possible, return the lexicographically smaller solution.

 If [a, b] is one solution with a <= b,
 and [c,d] is another solution with c <= d, then

 [a, b] < [c, d]

 If a < c OR a==c AND b < d.
 */

function eratosPrime(n) {
  let prime = new Array(n);
  prime.fill(true);

  const upperLimit = Math.sqrt(n);

  for (let p = 2; p <= upperLimit; p++) {
    if (prime[p]) {
      for (let i = 2*p; i<=n; i += p) {
        prime[i] = false;
      }
    }
  }

  let arr = [];
 
  for (let i = 2; i < n; i++) {
    if (prime[i]) arr.push(i);
  }

  return arr;
}

console.log(eratosPrime(50));

function primeSum(n) {
  const prime = eratosPrime(n);
 
  for (let i = 0; i <= prime.length; i++) {
    let halfPrime = n - prime[i];
    if (prime.indexOf(halfPrime) >= 0) return [prime[i], halfPrime];
  }
}

console.log(primeSum(50));


//FASTEST
function isPrime(n) {
  let divisor = 2;

  while (n > divisor) {
    if (n % divisor === 0) return false;
    else divisor++
  }

  return true;
}

function primeSumeByIsPrime(A) {
  for (let i = 2; i < A; i++ ){
    if (isPrime(i) && isPrime(A - i)) return [i, A - i];
  }
}

console.log(primeSumeByIsPrime(50));
