/*
 Counting sort
 */

function countingSort(arr, min, max) {
    let i;
    let z = 0;
    let count = [];
    let sortedArr = [];

    for (i = min; i <= max; i++) {
        count[i] = 0;
    }

    for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            sortedArr[z++] = i;
        }
    }

    return sortedArr;
}

console.log(countingSort([5,3,2,0,6,4,3,6,10,0,3,2], 0, 10));

