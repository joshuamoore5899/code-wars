// Counting Valleys
//
// You need count how many valleys you will pass.
//
// Start is always from zero level.
//
// Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.
//
// One passed valley is equal one entry and one exit of a valley.
//
// s='FUFFDDFDUDFUFUF'
// U=UP
// F=FORWARD
// D=DOWN
// To represent string above
//
// (level 1)  __
// (level 0)_/  \         _(exit we are again on level 0)
// (entry-1)     \_     _/
// (level-2)       \/\_/
// So here we passed one valley

function countingValleys(s) {
  let level = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'U') {
      level += 1;
      if (level === 0) {
        count += 1;
      }
    }
    else if (s[i] === 'D') {
      level -= 1;
    }
  }
  return count;
}
