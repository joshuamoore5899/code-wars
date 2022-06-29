// 852. Peak Index in a Mountain Array
// Let's call an array arr a mountain if the following properties hold:
//
// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].
//
//
//
// Example 1:
//
// Input: arr = [0,1,0]
// Output: 1
// Example 2:
//
// Input: arr = [0,2,1,0]
// Output: 1
// Example 3:
//
// Input: arr = [0,10,5,2]
// Output: 1
//
//
// Constraints:
//
// 3 <= arr.length <= 104
// 0 <= arr[i] <= 106
// arr is guaranteed to be a mountain array.

// mountain array [1,2,3,4,5,4,3,2,1]
// return index of the peak, or index of the element with the greatest value
// 4
//

//implementing binary search
var peakIndexInMountainArray = function(arr) {
    let left = 0;
    let right = arr.length - 1;
    let temp = undefined;
    let ans = undefined;

    while (left < right) {
        let middle = Math.floor((left + right) / 2);
        if (arr[middle + 1] > arr[middle]) {
            temp = Math.floor((left + middle) / 2);
            if (temp > left) {
                left = temp;
            }
            else {
                left++;
            }
        }
        else if (arr[middle - 1] > arr[middle]) {
            temp = Math.floor((right + middle) / 2);
            if (temp < right) {
                right = temp;
            }
            else {
                left--;
            }
        }
        else {
            ans = middle;
            break;
        }
    }

    return ans;
};

//using math.max
var peakIndexInMountainArray = function(arr) {
    return arr.indexOf(Math.max(...arr));
};
