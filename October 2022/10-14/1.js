// O(n) solution for Two Sum

var twoSum = function(nums, target) {
    let tracker = {};
    for (let i = 0; i < nums.length; i++) {
        if (tracker[target - nums[i]] != undefined) {
            return [tracker[target - nums[i]], i];
        }
        tracker[nums[i]] = i;
    }
};
