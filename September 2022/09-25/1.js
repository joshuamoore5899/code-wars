// Vowel remover
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
//
// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut (string) {
  let lower = "aeiou";
  for (let i = 0; i < string.length; i++) {
    if (lower.includes(string[i])) {
      string = string.replace(string[i], "");
      i--;
    }
  }
  return string;
}
