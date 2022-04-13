// Find the odd interval
// Given an array of integers, find the one that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.
//
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// P - array of integers, one element will appear an odd number of times
// R - integer that appears an odd number of times
// E - [1,2,1,4,2] -> 4
// P - create empty object
//     loop through array from parameter
//     if already in map add 1 to value, else add element as key to object and set value to 1
//     loop through object with Object.entries method getting key, value from each iteration
//     if value is odd, return Number(key)

function findOdd(A) {
  //happy coding!
  let mapA = {};
  for (let i = 0; i < A.length; i++) {
    if (mapA[A[i]]) {
      mapA[A[i]] += 1
    }
    else {
      mapA[A[i]] = 1;
    }
  }
  for (const [key, value] of Object.entries(mapA)) {
    if (value % 2 === 1) {
      return Number(key);
    }
  }
}
