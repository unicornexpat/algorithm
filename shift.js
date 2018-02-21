function getShiftedString(s, leftShifts, rightShifts) {
  let array = s.split("");

  const shift = -leftShifts + rightShifts;

  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let pos = i + shift;
    if (pos > (array.length - 1)) pos = pos - array.length -1;
    else if (pos < 0) {
      pos = array.length + pos;
    }
    newArray[pos] = array[i];
  }

  return newArray.join("");
}

function getShiftedStringByO1(s, leftShifts, rightShifts) {
  const shift = (rightShifts - leftShifts) % s.length;

  if (shift > 0) {
    const shiftPart = s.slice(-shift);
    return shiftPart + s.slice(0, -shift);
  } else if (shift < 0) {
    const shiftPart = s.substring(0, Math.abs(shift));
    return s.substring(Math.abs(shift), s.length) + shiftPart;
  } else {
    return s;
  }
}

console.log(getShiftedStringByO1("abcdefg", 1, 21));