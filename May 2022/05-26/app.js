// Simple Encryption #1 - Alternating Split
//
// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.
//
// Examples:
//
// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
//
// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.
//
// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {

  if (text === '') {
    return '';
  }
  if (text === null) {
    return null;
  }
  let i = 0;
  console.log(text);
  while (i < n) {
    let textArray = text.split('');
    let oddIndex = "";
    let evenIndex = "";
    for (let j = 0; j < textArray.length; j++) {
      if (j % 2 === 1) {
        oddIndex += textArray[j];
      }
      else {
        evenIndex += textArray[j];
      }
    }
    text = oddIndex.concat(evenIndex);
    i++;
  }
  return text;
}

function decrypt(encryptedText, n) {
  let ans = "";
  if (n < 1) {
    return encryptedText;
  }
  if (encryptedText === '') {
    return '';
  }
  if (encryptedText === null) {
    return null;
  }
  let i = 0;
  console.log(i)
  console.log(n)
  while (i < n) {
    let textArray = encryptedText.split('');
    ans = "";
    let right = Math.floor(textArray.length / 2);
    let rightOriginal = Math.floor(textArray.length / 2);
    let left = 0;

    while ((right < textArray.length) && (left < rightOriginal)) {
      ans += textArray[right];
      ans += textArray[left];
      right++;
      left++;
    }
    if (textArray.length % 2 === 1) {
      ans += textArray[textArray.length - 1]
    }

    encryptedText = ans;

    i++;
  }
  console.log(ans)
  return ans;
}
