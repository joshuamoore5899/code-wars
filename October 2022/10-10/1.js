// Reverse every other word in the string
//
// Reverse every other word in a given string, then return the string. Throw away
// any leading or trailing whitespace, while ensuring there is exactly one space
// between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str){
  str = str.trim();
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 1) {
      str[i] = str[i].split('').reverse().join('');
    }
  }
  return str.join(' ');
}
