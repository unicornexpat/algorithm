
function stepnum(A, B) {
  let stepnum = [];
  for (let i = A; i<= B; i++) {
    let arr = (""+i).split('');
    let step = true;

    for (let j = 1; j < arr.length; j++) {
      if (Math.abs(parseInt(arr[j]) - parseInt(arr[j-1])) !== 1) {
        step = false;
        break;
      }
    }

    if (step) stepnum.push(i);
  }
  return stepnum;
}

console.log(stepnum(10, 20));