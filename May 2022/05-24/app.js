// Build a pile of Cubes
// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.
//
// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
//
// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
//
// Examples:
// findNb(1071225) --> 45
//
// findNb(91716553919377) --> -1
// P - m=total volume of the building
// R - return int which equals total number of cubes needed to equal m
// E - findNb(1071225) --> 45
//     findNb(91716553919377) --> -1
// P - create variable of sum = 0
//     create for loop starting at 1 and increasing n by 1 until sum >= m
//     in each iteration add n^3 to sum
//     if sum === m return n
//     if sum > m return -1

function findNb(m) {
    // your code
  let sum = 0;
  let n = 1;
  while (sum < m) {
    sum += (n ** 3);
    n++;
  }
  if (sum === m) {
    return n - 1;
  }
  else {
    return -1;
  }
}
