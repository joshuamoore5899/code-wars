//
// Hamster me
//
// Hamsters are rodents belonging to the subfamily Cricetinae. The subfamily contains about 25 species, classified in six or seven genera. They have become established as popular small house pets, and, partly because they are easy to breed in captivity, hamsters are often used as laboratory animals. Wikipedia Link
//
// hamster
//
// And you could have skipped the introduction as it is entirely unrelated to your task. xD
//
// Task
// Write a function that accepts two inputs: code and message and returns an encrypted string from message using the code.
// The code is a string that generates the key in the way shown below:
//
//  1  | h a m s t e r
//  2  | i b n   u f
//  3  | j c o   v g
//  4  | k d p   w
//  5  | l   q   x
//  6  |         y
//  7  |         z
// All letters from code get number 1. All letters which directly follow letters from code get number 2 (unless they already have a smaller number assigned), etc. It's difficult to describe but it should be easy to understand from the example below:
//
//  1  | a e h m r s t
//  2  | b f i n     u
//  3  | c g j o     v
//  4  | d   k p     w
//  5  |     l q     x
//  6  |             y
//  7  |             z
// How does the encoding work using the hamster code?
//
// a => a1
// b => a2
// c => a3
// d => a4
// e => e1
// f => e2
// ...
// And applying it to strings :
//
// hamsterMe('hamster', 'hamster')   => h1a1m1s1t1e1r1
// hamsterMe('hamster', 'helpme')    => h1e1h5m4m1e1
// And you probably started wondering what will happen if there is no a in the code.
// Just add these letters after the last available letter (in alphabetic order) in the code.
//
// The key for code hmster is:
//
//  1  | e h m r s t
//  2  | f i n     u
//  3  | g j o     v
//  4  |   k p     w
//  5  |   l q     x
//  6  |           y
//  7  |           z
//  8  |           a
//  9  |           b
// 10  |           c
// 11  |           d
// Additional notes
// The code will have at least 1 letter.
// Duplication of letters in code is possible and should be handled.
// The code and message consist of only lowercase letters.


function hamsterMe(code, message) {
  let ans = "";
  let alphabetOriginal = "abcdefghijklmnopqrstuvwxyz";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let codeCopy = Array.from(new Set(code))
  codeCopy = codeCopy.sort((a, b)=>alphabet.indexOf(a)-alphabet.indexOf(b));
  let counter = -1;
  let remaining = "";
  for (let i = 0; i < alphabet.length; i++) {
    if (alphabetOriginal.indexOf(alphabet[i]) < alphabetOriginal.indexOf(codeCopy[0])) {
      remaining += alphabet[i];
      continue;
    }
    if (!code.includes(alphabet[i])) {
      codeCopy[counter] += alphabet[i];
    }
    else {
      counter++;
    }
  }

  if (remaining.length > 0) {
    codeCopy[codeCopy.length - 1] += remaining;
  }

  for (let i = 0; i < message.length; i++) {
    for (let j = 0; j < codeCopy.length; j++) {
      if (codeCopy[j].includes(message[i])) {
        ans += `${codeCopy[j][0]}${codeCopy[j].indexOf(message[i])+1}`
      }
    }
  }

  return ans;
}
