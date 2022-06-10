// 14. Longest Common Prefix
//
// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
//
//
// Example 1:
//
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//
//
// Constraints:
//
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

var longestCommonPrefix = function(strs) {
    let ans = "";
    if (strs.length === 0) {
        return ans;
    }
    if (strs.length === 1) {
        return strs[0]
    }
    strs = strs.sort();
    let lengths = [];
    for (let i = 0; i < strs.length; i++) {
        lengths.push(strs[i].length);
    }
    let min = Math.min(...lengths);
    if (min === 0) {
        return ans;
    }
    let tracker = true;
    let countX = 1;
    let countY = 0;
    while (tracker) {
        if (strs[countX][countY] !== strs[countX - 1][countY]) {
            tracker = false;
            break;
        }
        if (countX === strs.length - 1) {
            ans += strs[countX][countY];
            countY++;
            countX = 0;
        }
        countX++;
        if (countY >= min) {
            tracker = false;
            break;
        }
    }
    return ans;
};
