//1.	If you have 500 revisions of a program, write a program that will find and return the FIRST bad revision given a isBad(revision i) function.  


function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] < target) right = mid;
    else if (arr[mid] > target) left = mid + 1;
    else return mid;
  }

  return -1;
}

console.log(binarySearch([1,3,5,6,8,9,10,12], 5));

function isBad(i) {
  return (i >= 5);
}

function searchBadRevision(arr, isBad) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (isBad(arr[mid])) right = mid - 1;
    else left = mid + 1;
  }

  return left;
}

console.log(searchBadRevision([1,2,3,4,5,5,5,8], isBad));


