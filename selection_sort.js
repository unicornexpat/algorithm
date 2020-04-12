//Quick Sort
function quickSort(arr, left = 0, pivot = arr.length -1) {
  if (left < pivot) {
    for (let i = left; i < pivot; i++) {
      if (arr[i] <= arr[pivot]) {
        swap(arr, left, i);
        left++;
      }
    }
    swap(arr, left, pivot);

    quickSort(arr, 0, left - 1);
    quickSort(arr, left + 1, pivot)
  }
  return arr;
}

function swap(arr, i, j) {
  const holder = arr[i];
  arr[i] = arr[j];
  arr[j] = holder;
  return arr;
}

console.log(quickSort([6, 5, 1, 7, 4, 3, 10, 12, 11, 6, 3]));
