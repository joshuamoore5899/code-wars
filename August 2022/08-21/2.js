// String incrementer
//
// Your job is to write a function which increments a string, to create a new string.
//
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
//
// foo -> foo1
//
// foobar23 -> foobar24
//
// foo0042 -> foo0043
//
// foo9 -> foo10
//
// foo099 -> foo100
//
// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (strng) {
  // return incrementedString
  strng = strng.toString()
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let index = -1;
  for (let i = 0; i < numbers.length; i++) {
    if (strng.includes(numbers[i])) {
      index = strng.indexOf(numbers[i]);
      break;
    }
  }
  if (index < 0) {
    return strng + '1'
  }
  let strngPart = strng.slice(0, index);
  let numberPart = strng.slice(index);
  let numLength = numberPart.length;
  numberPart = Number(numberPart) + 1;
  numberPart = numberPart.toString();
  let zeros = "";
  if (numberPart.length < numLength) {
    for (let i = numberPart.length; i < numLength; i++) {
      zeros += '0';
    }
  }

  numberPart = zeros + numberPart

  return strngPart + numberPart;

}
