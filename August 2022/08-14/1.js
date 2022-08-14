// Give me a Diamond
//
// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
//
// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
//
// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
//
// Examples
// A size 3 diamond:
//
//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

function diamond(n){
  if (n <= 0 || n % 2 === 0) {
    return null;
  }
  if (n === 1) {
    return "*\n";
  }
  let diam = [];
  let spaces = Math.floor(n / 2);
  let counter = 1;
  let spacesTemp = spaces;
  let counterTemp = counter;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let temp = "";
    while (spacesTemp > 0) {
      temp += " ";
      spacesTemp--;
    }
    while (counterTemp > 0) {
      temp += "*";
      counterTemp--;
    }
    temp += "\n";
    spacesTemp = spaces - (i+1);
    counterTemp = ((i + 1) * 2) + 1;
    diam.push(temp);
  }
  let middle = "";
  for (let i = 0; i < n; i++) {
    middle += "*";
  }
  middle += "\n"
  let reverse = diam.slice().reverse();
  diam.push(middle);
  diam.push(reverse.join(''))
  return diam.join('');
}
