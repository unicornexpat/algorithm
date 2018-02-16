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

console.log(binaryIndexOf([1,3,4,5,8,23], 5));