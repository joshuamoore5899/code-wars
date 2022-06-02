// Highest Scoring Word
//
// Given a string of words, you need to find the highest scoring word.
//
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//
// You need to return the highest scoring word as a string.
//
// If two words score the same, return the word that appears earliest in the original string.
//
// All letters will be lowercase and all inputs will be valid.

function high(x){
  let y = x.split(' ');
  let alphabet = "0abcdefghijklmnopqrstuvwxyz".split('');
  let max = "";
  let maxNum = 0;
  for (let i = 0; i < y.length; i++) {
    y[i].split('');
    let total = 0;
    for (let j = 0; j < y[i].length; j++) {
      total += alphabet.indexOf(y[i][j]);
    }
    if (total > maxNum) {
      max = y[i];
      maxNum = total;
    }
  }
  return max;
}
