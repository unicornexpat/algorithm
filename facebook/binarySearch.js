//1.	If you have 500 revisions of a program, write a program that will find and return the FIRST bad revision given a isBad(revision i) function.  


function binarySearch(arr, target) {
  let minIndex = 0;
  let maxIndex = arr.length - 1;

  while (minIndex < maxIndex) {
    let currentIndex = Math.floor((maxIndex - minIndex) / 2);
    let currentElement = arr[currentIndex];

    if (currentElement < target) minIndex = currentIndex + 1;
    else if (currentIndex > target) maxIndex = currentIndex - 1;
    else return currentElement;
  }

  return -1;
}

function isBad(i) {
  return (i > 5);
}

function searchBadRevision(arr, isBad) {
  let minIndex = 0;
  let maxIndex = arr.length - 1;

  let currentIndex;
  let currentElement;

  while (minIndex < maxIndex) {
    currentIndex = Math.floor((maxIndex - minIndex)/2);
    currentElement = arr[currentIndex];

    if (isBad(currentElement)) maxIndex = currentIndex;
    else minIndex = currentIndex;
  }
  console.log(minIndex, maxIndex);
  return (arr[currentIndex]);
}

console.log(searchBadRevision([1,2,3,4,5,6,7,8], isBad));



// console.log(binarySearch([1,5,7,3,5,2,8,5,23,7], 5));