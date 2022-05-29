// Duplicate Encoder
//
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("




function duplicateEncode(word){
    // ...
  let ans = "";
  let wordArray = word.toLowerCase().split('');
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray.indexOf(wordArray[i]) === wordArray.lastIndexOf(wordArray[i])) {
      ans += "(";
    }
    else {
      ans += ")";
    }
  }
  return ans;
}
