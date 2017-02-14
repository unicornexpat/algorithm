/*
 Question: From a unsorted array, check whether there are any two numbers that will sum up to a given number?
 */

function sumFinder(arr, sum) {
    return arr.some((el1, key1) => {
        return arr.some((el2, key2) =>{
            if (key1 !== key2) return el1 + el2 === sum;
        });
    });
}

sumFinder([6,4,3,2,1,7], 9);

