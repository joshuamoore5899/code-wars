// 1512. Number of Good Pairs
//
// Given an array of integers nums, return the number of good pairs.
//
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.
//
//
//
// Example 1:
//
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:
//
// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:
//
// Input: nums = [1,2,3]
// Output: 0
//
//
// Constraints:
//
// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

var numIdenticalPairs = function(nums) {
    let ans = 0;
    let left = 0;
    let right = 1;
    while (right < nums.length && left < right) {
        if (nums[left] === nums[right]) {
            ans++;
        }
        if (nums.lastIndexOf(nums[left]) === left) {
            left++;
            right = left + 1;
        }
        else if (nums.lastIndexOf(nums[left]) === right) {
            left++;
            right = left + 1;
        }
        else {
            right++;
        }
    }
    return ans;
};
