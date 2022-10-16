// Permute a Palindrome
//
// Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.
//
// Example
// madam -> True
// adamm -> True
// junk -> False
//
// Hint
// The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.

function permuteAPalindrome (input) {
  let tracker = {};
  for (let i = 0; i < input.length; i++) {
    tracker[input[i]] = tracker[input[i]] + 1 || 1;
  }
  let count = 0;
  for (const key in tracker) {
    if (tracker[key] % 2 === 1) {
      count++;
      if (count > 1) {
        return false;
      }
    }
  }
  return true;
}
