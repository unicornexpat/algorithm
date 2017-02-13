/*
 Question: How would you remove duplicate members from an array?
 */

//using set
function removeDuplicate(array) {
  return [...(new Set(array))];
}

function removeDuplicate(array) {
  return Array.from(new Set(array));
}

function removeDuplicate(array) {
  let newArray = [];
   (new Set(array)).forEach(v => newArray.push(v));
   return newArray;
}

removeDuplicate([2, 2, 3, 4, 5, 2]);

//traditional object way
function removeDuplicate(array) {
  let unique = {};
  let newArray = [];

  array.map(value => {
    if (!unique[value]) {
      newArray.push(value);
      unique[value] = true;
    }
  });

  return newArray;
}

removeDuplicate([2, 2, 3, 4, 5, 2]);

//splice
function removeDuplicate(array) {
  let exist = {};
  
  array.map((value, key) => {
    if (!exist[value]) exist[value] = true;
    else array.splice(key, 1);
  });

  return array;
}

removeDuplicate([2, 2, 3, 4, 5, 2]);
