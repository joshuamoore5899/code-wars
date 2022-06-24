// 7. Reverse Integer
//
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
//
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
//
//
//
// Example 1:
//
// Input: x = 123
// Output: 321
// Example 2:
//
// Input: x = -123
// Output: -321
// Example 3:
//
// Input: x = 120
// Output: 21
//
//
// Constraints:
//
// -231 <= x <= 231 - 1

var reverse = function(x) {
    x = x.toString().split('');
    isNegative = false;
    if (x[0] === '-') {
        x = x.splice(1, x.length)
        isNegative = true;
    }
    x = x.reverse().join('');
    x = Number(x);
    return x > (2**31) - 1 ? 0 : isNegative ? -x : x;
};
