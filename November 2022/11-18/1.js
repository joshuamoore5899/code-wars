// 41. First Missing Positive
//
// Given an unsorted integer array nums, return the smallest missing positive integer.
//
//
//
//
// Example 1:
//
// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.
// Example 2:
//
// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.
// Example 3:
//
// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.
//
//
// Constraints:
//
// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1

var firstMissingPositive = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let index = nums.indexOf(1);
    if (index < 0) {
        return 1;
    }
    nums.push(nums[nums.length - 1] + 1);
    for (let i = index + 1; i < nums.length; i++) {
        if (i === nums.length - 1) {
            return nums[nums.length - 1]
        }
        if (nums[i] - nums[i - 1] > 1) {
            return nums[i - 1] + 1;
        }
    }
};
