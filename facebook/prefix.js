/*
Find shortest unique prefix to represent each word in the list.

Example:

Input: [zebra, dog, duck, dove]
Output: {z, dog, du, dov}
where we can see that
zebra = z
dog = dog
duck = du
dove = dov
NOTE : Assume that no word is prefix of another. In other words, the representation is always possible.
 */

function prefix(A) {
  let prefixes = [];
  for (let i = 0; i < A.length; i++) {
    let prefix;

    for (let j = 1; j <= A[i].length; j++) {
      prefix = A[i].substring(0, j);
      let index = 0;

      for (let z = i+1; z < A.length; z++) {
        index = A[z].indexOf(prefix);
        if (index === 0) break;
      }

      if (index !== 0) break;
    }

    prefixes.push(prefix);
  }

  return prefixes;
}

const test = [ "bearcat", "bert" ];

console.log(prefix(test));