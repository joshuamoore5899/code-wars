//Rot13
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
//
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// PREP
// P - string, empty string?, number?, sentence, capital letter?
// R - string with letters replaced with ciphered letters
// E - 'abcd' -> 'nopq'; 'nopq' -> 'abcd'
// P - create array of alphabet
//     convert string paramater to array
//     loop through array
//     if between a and m, add 13, else subtract 13

function rot13(message){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let lowered = alphabet.split('');
    let upper = alphabet.toUpperCase().split('');
    console.log(alphabet);
    let messageArray = message.split('');
    console.log(messageArray);
    for (let i = 0; i < messageArray.length; i++) {
      if (alphabet.includes(messageArray[i].toLowerCase())) { //check if element is letter in alphabet

        if (messageArray[i] === messageArray[i].toLowerCase()) { //check if element is lower case
          let charIndex = lowered.indexOf(messageArray[i]); //get index of element in alphabet order
          if (messageArray[i] <= 'm') {
            messageArray[i] = lowered[charIndex + 13];
          }
          else {
            messageArray[i] = lowered[charIndex - 13];
          }
        }
        else {
          let charIndex = upper.indexOf(messageArray[i]);
          if (messageArray[i] <= 'M') {
            messageArray[i] = upper[charIndex + 13];
          }
          else {
            messageArray[i] = upper[charIndex - 13];
          }
        }
      }
    }
  console.log(messageArray)
  return messageArray.join('');
}
