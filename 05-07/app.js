// String ends with?
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//
// Examples:
//
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
  // TODO: complete
  let subOne = str.substring(str.length - ending.length);
  if (subOne === ending) {
    return true;
  }
  else {
    return false;
  }
}
