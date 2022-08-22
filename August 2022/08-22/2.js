// Email Validation
//
// Write a function to test whether a given input is a valid email address.
//
// For the purposes of this kata, here is what makes a valid email:
//
// At least one letter character at the beginning
// All characters between the first character and the @ (if any) must be letters, numbers, or underscores
// There must be an @ character (after the points listed just now)
// After the @ character, there must be at least one word character (letter, number, or underscore) or hyphen
// The email must end with at least one set of a dot followed by one or more word characters.
// The input must NOT be case-sensitive
// The function should return true or false.

function validate(input){
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let numeric = "0123456789_";
  let alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789_";
  input = input.toLowerCase();
  if (!alpha.includes(input[0]) || (!alpha.includes(input[input.length - 1]) && (!numeric.includes(input[input.length - 1])))) {
    return false;
  }
  let at = input.indexOf('@');
  if (at === -1) {
    return false;
  }
  let dot = input.indexOf('.', at);
  if (dot === -1) {
    return false;
  }
  let start = input.slice(0, at);
  let middle = input.slice(at + 1, dot);
  if (middle.length < 1) {
    return false;
  }
  let end = input.slice(dot + 1);


  for (let i = 0; i < start.length; i++) {
    if (!alphanumeric.includes(start[i])) {
      return false;
    }
  }
  for (let i = 0; i < middle.length; i++) {
    if (middle[i] != "-") {
      if (!alphanumeric.includes(middle[i])) {
        return false;
      }
    }
  }
  for (let i = 0; i < end.length; i++) {
    if (end[i] != "-" && end[i] != '.') {
      if (!alphanumeric.includes(end[i])) {
        return false;
      }
    }
  }
  return true;
}
