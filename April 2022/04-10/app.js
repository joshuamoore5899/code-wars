// Two to One
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  // your code
  let added = s1.concat(s2).split('');
  let ans = [];
  for (let i = 0; i < added.length; i++) {
    if ((s1.includes(added[i]) && !ans.includes(added[i])) || (s2.includes(added[i]) && !ans.includes(added[i]))) {
      ans.push(added[i]);
    }
  }
  return ans.sort().join('');
}
