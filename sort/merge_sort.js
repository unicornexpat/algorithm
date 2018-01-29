let mergeSort = (array) => {
  return mergeSortRec(array);
};

let mergeSortRec = (array) => {
  const length = array.length;
  if (length === 1) return array;

  const mid = Math.floor(length / 2);
  const left = array.splice(0, mid);
  const right = array.splice(mid, length);

  return merge(mergeSortRec(left), mergeSortRec(right));
};

let merge = (left, right) => {
  let result = [];
  let il = 0;
  let ir = 0;

  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) result.push(left[il++]);
    else result.push(right[ir++]);
  }

  while (il < left.length) {
    result.push(left[il++]);
  }

  while (ir < right.length) {
    result.push(right[ir++]);
  }

  return result;
};

const array = [5, 4, 3, 2, 1];
console.log(mergeSort(array));