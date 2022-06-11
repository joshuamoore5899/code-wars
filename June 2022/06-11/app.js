// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
//
//
// Example 1:
//
// Input: s = "()"
// Output: true
// Example 2:
//
// Input: s = "()[]{}"
// Output: true
// Example 3:
//
// Input: s = "(]"
// Output: false
//
//
// Constraints:
//
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

var isValid = function(s) {
    let left = [];
    let keyObject = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    s = s.split('');
    if (s.length < 2) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            left.push(s[i]);
        }
        else {
            if (s[i] != keyObject[left.pop()]) {
                return false;
            }
        }
    }
    return left.length === 0 ? true : false;


};
