// 1260. Shift 2D Grid
// Easy
//
// 1431
//
// 301
//
// Add to List
//
// Share
// Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.
//
// In one shift operation:
//
// Element at grid[i][j] moves to grid[i][j + 1].
// Element at grid[i][n - 1] moves to grid[i + 1][0].
// Element at grid[m - 1][n - 1] moves to grid[0][0].
// Return the 2D grid after applying shift operation k times.
//
//
//
// Example 1:
//
//
// Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
// Output: [[9,1,2],[3,4,5],[6,7,8]]
// Example 2:
//
//
// Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
// Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
// Example 3:
//
// Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
// Output: [[1,2,3],[4,5,6],[7,8,9]]
//
//
// Constraints:
//
// m == grid.length
// n == grid[i].length
// 1 <= m <= 50
// 1 <= n <= 50
// -1000 <= grid[i][j] <= 1000
// 0 <= k <= 100

//using object
var shiftGrid = function(grid, k) {
    let keepTrack = [Math.floor(k / grid[0].length), k % grid[0].length]
    let tracker = {};
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let left = i + keepTrack[0];
            let right = j + keepTrack[1];
            while (left > grid.length - 1 || right > grid[i].length - 1) {
                if (left > grid.length - 1) {
                    left = left - grid.length
                }
                if (right > grid[i].length - 1) {
                    left = left + (Math.floor(right / grid[i].length));
                    right = right % grid[i].length;
                }
            }
            tracker[[left, right]] = grid[i][j];


        }
    }

    for (const key in tracker) {
        let temp = key.split(',')
        grid[temp[0]][temp[1]] = tracker[key]

    }

    return grid
};

//better solution
var shiftGrid = function (grid, k) {
  var arr = grid.flat(),
    len = grid[0].length,
    res = [];

  while (k--) {
    arr.unshift(arr.pop());
  }

  while (arr.length) {
    res.push(arr.splice(0, len));
  }

  return res;
};
