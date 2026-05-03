export function getItem(array, position) {
  if (array.length - 1 < position) {
    return false;
  }
  return array[position];
}
export function setItem(array, position, replacemetnCard) {
  array.splice(position, 1, replacemetnCard);
  return array;
}
export function insertItemAtTop(array, newCard) {
  array.push(newCard);
  return array;
}

export function removeItem(array, position) {
  array.splice(position, 1);
  return array;
}

export function removeItemFromTop(array) {
  array.pop();
  return array;
}
export function insertItemAtBottom(array, newCard) {
  array.unshift(newCard);
  return array;
}
export function removeItemAtBottom(array) {
  array.shift();
  return array;
}

export function checkSizeOfStack(array, stackSize) {
  if (array.length === stackSize) return true;
  else return false;
}
/*
console.log("1:", getItem([1, 2, 4, 1], 2));
// 4

console.log("2:", setItem([1, 2, 4, 1], 2, 6));
// [1, 2, 6, 1]

console.log("3:", insertItemAtTop([5, 9, 7, 1], 8));
// [5, 9, 7, 1, 8]

console.log("4:", removeItem([3, 2, 6, 4, 8], 2));
// [3, 2, 4, 8]

console.log("5:", removeItemFromTop([3, 2, 6, 4, 8]));
// [3, 2, 6, 4]

console.log("6:", insertItemAtBottom([5, 9, 7, 1], 8));
// [8, 5, 9, 7, 1]

console.log("7:", removeItemAtBottom([8, 5, 9, 7, 1]));
// [5, 9, 7, 1]

console.log("8:", checkSizeOfStack([3, 2, 6, 4, 8], 4));
// false

console.log("8.1:", checkSizeOfStack([1, 2, 3, 4], 4));
// true
*/