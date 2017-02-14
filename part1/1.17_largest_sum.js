/*
 Question: How would you find the largest sum of any two elements?
 */

//using array sort
function topSum(arr) {
  arr.sort(function(a, b) {
    return b - a;
  });

  return arr[0] + arr[1];
}

topSum([1,2,3,5,1,0,7,3,9]);

