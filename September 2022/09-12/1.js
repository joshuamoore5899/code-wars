// Number , number ... wait LETTER !
//
// Your task is to write a function named do_math that receives a single argument. This argument is a string that contains multiple whitespace delimited numbers. Each number has a single alphabet letter somewhere within it.
//
// Example : "24z6 1x23 y369 89a 900b"
// As shown above, this alphabet letter can appear anywhere within the number. You have to extract the letters and sort the numbers according to their corresponding letters.
//
// Example : "24z6 1x23 y369 89a 900b" will become 89 900 123 369 246 (ordered according to the alphabet letter)
// Here comes the difficult part, now you have to do a series of computations on the numbers you have extracted.
//
// The sequence of computations are + - * /. Basic math rules do NOT apply, you have to do each computation in exactly this order.
// This has to work for any size of numbers sent in (after division, go back to addition, etc).
// In the case of duplicate alphabet letters, you have to arrange them according to the number that appeared first in the input string.
// Remember to also round the final answer to the nearest integer.
// Examples :
// "24z6 1x23 y369 89a 900b" = 89 + 900 - 123 * 369 / 246 = 1299
// "24z6 1z23 y369 89z 900b" = 900 + 369 - 246 * 123 / 89 = 1414
// "10a 90x 14b 78u 45a 7b 34y" = 10 + 45 - 14 * 7 / 78 + 90 - 34 = 60
// Good luck and may the CODE be with you!

function doMath(s){
  let numbers = '0123456789';
  s = s.split(" ");
  for (let i = 0; i < s.length; i++) {
    let temp = "";
    let letter = "";
    for (let j = 0; j < s[i].length; j++) {
      if (!numbers.includes(s[i][j])) {
        letter = s[i][j];
        temp = s[i].replace(letter, "");
      }
    }
    s[i] = letter + temp;
  }
  let copy = s.slice();
  s = s.sort((a, b) => a[0].localeCompare(b[0]) || copy.indexOf(a) - copy.indexOf(b));
  s = s.map((x) => Number(x.slice(1, x.length)));
  let total = s[0];
  for (let i = 0; i < s.length - 1; i++) {
    if (i % 4 === 0) {
      total += s[i + 1];
    }
    else if ( i % 4 === 1) {
      total -= s[i + 1];
    }
    else if ( i % 4 === 2) {
      total *= s[i + 1];
    }
    else if ( i % 4 === 3) {
      total /= s[i + 1];
    }
  }
  return Math.round(total);
}
