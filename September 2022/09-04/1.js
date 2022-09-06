//
// Most frequently used words in a text
//
// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
//
// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
// Examples:
// top_3_words("In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.")
// # => ["a", "of", "on"]
//
// top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// # => ["e", "ddd", "aa"]
//
// top_3_words("  //wont won't won't")
// # => ["won't", "wont"]
// Bonus points (not really, but just for fun):
// Avoid creating an array whose memory footprint is roughly as big as the input text.
// Avoid sorting the entire array of unique words.

function topThreeWords(text) {
  let valid = "abcdefghijklmnopqrstuvwxyz '";
  for (let i = 0; i < text.length; i++) {
    if (!valid.includes(text[i].toLowerCase())) {
      text = text.substring(0, i).concat(text.substring(i + 1, text.length));
      i--;
    }
  }
  valid = "abcdefghijklmnopqrstuvwxyz";
  text = text.split(' ');
  if (text.length < 3) return text;
  let tracker = {};
  for (let i = 0; i < text.length; i++) {
    let temp = text[i].toLowerCase();
    tracker[temp] = tracker[temp] + 1 || 1;
  }
  let array = []
  for (const key in tracker) {
    if (key === "") {
      continue;
    }
    else {
      array.push([key, tracker[key]])
    }

  }
  array.sort((a, b) => b[1] - a[1])
  console.log(array)
  let ans = [];
  for (let i = 0; i < array.length; i++) {
    let temp = array[i][0];
    let isValid = true;
    for (let j = 0; j < temp.length; j++) {
      if (!valid.includes(temp[j]) || temp[j] == "") {
        if (temp[j] === "'" && (valid.includes(temp[j + 1]) || valid.includes(temp[j - 1]))) {
          continue;
        }
         else {
          isValid = false;
          break;
        }
      }
    }
    if (isValid) {
      ans.push(temp)
    }
    if (ans.length === 3) {
      break;
    }
  }
  return ans;
}
