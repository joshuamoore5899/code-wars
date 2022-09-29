// 392. Is Subsequence
//
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
//
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
//
//
//
// Example 1:
//
// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:
//
// Input: s = "axc", t = "ahbgdc"
// Output: false
//
//
// Constraints:
//
// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.
//
//
// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

var isSubsequence = function(s, t) {
    let previous;
    let current;
    if (t.length < 2) {
        return s === t;
    }
    for (let i = 0; i < s.length - 1; i++) {
        previous = t.indexOf(s[i], previous + 1);
        current = t.indexOf(s[i + 1], previous + 1);
        if (current < 0 || previous < 0) {
            return false;
        }
        if (previous >= current) {
            return false;
        }
    }
    return true;
};
