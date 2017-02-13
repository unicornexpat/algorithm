/*
 Question: How would you find the greatest common divisor of two numbers?
 */

//Using array index
function divisors(n) {
    let divisors = [];

    for (let i = 0; i < n; i++) {
        if (n % i === 0) divisors.push(i);
    }
    return divisors;
}

function greatestCommonDivisor(a, b) {
    if (isNaN(a) && isNaN(b)) return false;

    a = (a > 0) ? a : Math.abs(a);
    b = (b > 0) ? b : Math.abs(b);

    const divisorsA = divisors(a).reverse();
    const divisorsB = divisors(b).reverse();

    let greatest;

    divisorsA.some(function(divisor) {
        if (divisorsB.indexOf(divisor) !== -1) {
            greatest = divisor;
            return true;
        }
    });

    return greatest;
}