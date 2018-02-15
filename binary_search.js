/*
 Binary search. Return index of element
 */

function binaryIndexOf(arr, target) {
    let minIndex = 0;
    let maxIndex = arr.length - 1;

    while (minIndex < maxIndex) {
        let currentIndex = Math.floor((maxIndex + minIndex) / 2);
        let currentElement = arr[currentIndex];

        if (currentElement < target) {
            minIndex = currentIndex + 1;
        } else if (currentElement > target) {
            maxIndex = currentIndex - 1;
        } else {
            return currentIndex;
        }
    }
    return -1;
}

console.log(binaryIndexOf([1,5,7,3,5,2,8,5,23,7], 5));