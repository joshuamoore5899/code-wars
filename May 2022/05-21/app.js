// Unique In Order
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
//
// For example:
//
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// P - string or array
// R - array of elements in order but with no duplicates next to each other
// E - uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//     uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
//     uniqueInOrder([1,2,2,3,3])       == [1,2,3]
// P - check if element is string or array
//     if string, convert to array
//     filter array to make sure that next element isn't duplicate (make sure that you don't try to access index outside of array)

function uniqueInOrder (iterable){
  if (typeof(iterable) === 'string') {
    iterable = iterable.split('')
  }
  console.log(iterable)
  let ans = iterable.filter((x,y) => {
    if (y < iterable.length - 1) {
      return x != iterable[y + 1]
    }
    else {
      return x
    }
  })
  return ans;
}
