// Moving Zeros To The End
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let zeroCounter = 0;
  for(i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCounter++
    }
  }
  let ans = arr.filter(value => value !== 0)
  if (zeroCounter > 0) {
    for (i = 0; i < zeroCounter; i++) {
      ans.push(0)
    }
  }
  return ans
}
