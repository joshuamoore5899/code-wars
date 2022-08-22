// Scramblies
//
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
// Notes:
//
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
 //code me
  if (str1.length < str2.length) {
    return false;
  }
  let tracker1 = {};
  let tracker2 = {};
  for (let i = 0; i < str1.length; i++) {
    tracker1[str1[i]] = tracker1[str1[i]] + 1 || 1;
  }
  for (let i = 0; i < str2.length; i++) {
    tracker2[str2[i]] = tracker2[str2[i]] + 1 || 1;
  }
  for (const key in tracker2) {
    if (!tracker1[key]) {
      return false;
    }
    if (tracker1[key] < tracker2[key]) {
      return false;
    }
  }
  return true;
}
