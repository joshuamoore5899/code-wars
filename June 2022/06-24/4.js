// 2032. Two Out of Three
//
// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.
//
//
// Example 1:
//
// Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
// Output: [3,2]
// Explanation: The values that are present in at least two arrays are:
// - 3, in all three arrays.
// - 2, in nums1 and nums2.
// Example 2:
//
// Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
// Output: [2,3,1]
// Explanation: The values that are present in at least two arrays are:
// - 2, in nums2 and nums3.
// - 3, in nums1 and nums2.
// - 1, in nums1 and nums3.
// Example 3:
//
// Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
// Output: []
// Explanation: No value is present in at least two arrays.
//
//
// Constraints:
//
// 1 <= nums1.length, nums2.length, nums3.length <= 100
// 1 <= nums1[i], nums2[j], nums3[k] <= 100

// filtering as arrays
var twoOutOfThree = function(nums1, nums2, nums3) {

    let first = nums1.filter(x=>nums2.includes(x) || nums3.includes(x));
    let second = nums2.filter(x=>nums1.includes(x) || nums3.includes(x));
    let third = nums3.filter(x=>nums2.includes(x) || nums1.includes(x));


    let final = first.concat(second).concat(third);
    let ans = new Set(final);
    return [...ans]

};

//creating sets first
var twoOutOfThree = function(nums1, nums2, nums3) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let set3 = new Set(nums3);

    let total = [...set1].concat([...set2]).concat([...set3]);

    let filtered = total.filter(x => total.indexOf(x) != total.lastIndexOf(x));

    let ans = new Set(filtered);

    return [...ans]

};
