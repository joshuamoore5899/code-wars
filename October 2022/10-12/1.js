//O(n**2) of two sum problem

var twoSum = function(nums, target) {
    let left = 0;
    let right = 1;
    while (left < right && right < nums.length) {
        if (nums[left] + nums[right] === target) {
            return [left, right]
        }
        if (right === nums.length - 1) {
            left++;
            right = left + 1;
        }
        else {
            right++;
        }
    }
};
