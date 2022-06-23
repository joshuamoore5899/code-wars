// 3. Longest Substring Without Repeating Characters
//
// Given a string s, find the length of the longest substring without repeating characters.
//
//
//
// Example 1:
//
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
//
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
//
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
//
//
// Constraints:
//
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

var lengthOfLongestSubstring = function(s) {
    let longest = "";
    let temp = "";
    let pointer = 0;
    while (pointer < s.length) {
        if (!temp.includes(s[pointer])) {
            temp += s[pointer];
            if (temp.length > longest.length) {
                longest = temp;
            }
        }
        else {
            let index = temp.indexOf(s[pointer]);
            temp = temp.slice(index + 1, pointer);
            temp += s[pointer];
        }
        pointer++;
    }
    return longest.length;
};
