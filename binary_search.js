/*
 Binary search. Return index of element
 */

function binaryIndexOf(arr, k) {
    let minIndex = 0;
    let maxIndex = arr.length - 1;

    while (minIndex < maxIndex) {
        let currentIndex = Math.floor((maxIndex + minIndex) / 2);
        let currentElement = arr[currentIndex];

        if (currentElement < k) {
            minIndex = currentIndex + 1;
        } else if (currentElement > k) {
            maxIndex = currentIndex - 1;
        } else {
            return "NO";
        }
    }
    return "YES";
}

console.log(binaryIndexOf([1,3,4,5,8,23], 5));