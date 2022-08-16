// Simple Fun #90: Rows Rearranging
//
// Given a rectangular matrix of integers, check if it is possible to rearrange its rows in such a way that all its columns become strictly increasing sequences (read from top to bottom).
//
// Note, that you should not rearrange the elements of rows.
//
// Example
// For
//
// matrix = [[6, 4],
//             [2, 2],
//             [4, 3]]```
// the output should be `true`.
//
//  It can rearrange to:
// [[2, 2], [4, 3] [6, 4]] 2,4,6 and 2,3,4 all are the strictly increasing sequence
//
//
//  For
// matrix = [[2, 7, 1], [0, 2, 0], [1, 3, 1]]``` the output should be false;
//
// It can not rearrange to a strictly increasing sequences
//
// Input/Output
// [input] 2D integer array matrix
//
// A 2-dimensional array of integers.
//
// Constraints:
//
// 1 ≤ matrix.length ≤ 20,
//
// 1 ≤ matrix[0].length ≤ 10,
//
// -300 ≤ matrix[i][j] ≤ 300.
//
// [output] a boolean value

function rowsRearranging(matrix) {
  matrix = matrix.sort((a, b)=> a[0] - b[0]);

  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] >= matrix[i + 1][j]) {
        return false;
      }
    }
  }

  return true;

}
