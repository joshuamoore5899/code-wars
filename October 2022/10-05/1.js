// Remove Zeros
//
// Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.
//
// For example, the following array
//
// [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]
//
// is transformed into
//
// [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
//
// Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.
//
// You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.

function removeZeros(array) {
  for (let j = 0; j < array.length; j++)
    for (let i = array.length - 1; i > 0; i--) {
      if (array[i - 1] === 0 || array[i - 1] === '0') {
        if (array[i] !== 0 && array[i] !== '0') {
          let temp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = temp;
        }
      }
    }
  return array;
}
