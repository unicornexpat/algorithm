

// function takes a int returns: 'fizz' if the int is divisible by 3,
//'buzz' if the int is divisible by 5,
//'fizzbuzz' if the int is divisible by 3 and 5
// otherwise just return the int

function fizzbuzz(n) {
    if !Number.isNumber(n) return false

    if (n % 3  === 0) {
        if (n % 5 === 0) return 'fizzbuzz';
        else return "fizz";
    } else if (n % 5 === 0) return 'buzz';
    else return n;
}

// list = ['a', 'b', 'hello', ...]
// example_1 = ['a', 'a', 'a', 'b'] -> 'a'
// example_2 = ['a', 'a', 'b', 'b'] -> ['a', 'b']


function mostCommon(arr) {
    if !Array.isArray(arr) return false;

    let obj = {};

    for (let i of arr) {
        if (obj[i]) obj[i] = obj[i]++
        else obj[i] = 1;
    }

    let max = 0;
    let maxEl = [];

    for (let index in obj) {
        if (obj[i] == max) {
            mxEl.push(obj[i].key);
        else (obj[i] > max) {
                max = obj[i];
                maxEl = [Obj[i]];
            }
        }

        return maxEl;
    }