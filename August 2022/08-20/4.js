//
// Make the Deadfish Swim
//
// Write a simple parser that will parse and run Deadfish.
//
// Deadfish has 4 commands, each 1 character long:
//
// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.
//
// parse("iiisdoso") => [ 8, 64 ]

function parse( data )
{
  let initial = 0;
  let ans = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'i') {
      initial++;
    }
    else if (data[i] === 'd') {
      initial--;
    }
    else if (data[i] === 's') {
      initial = initial * initial;
    }
    else if (data[i] === 'o') {
      ans.push(initial);
    }
  }
  return ans;
}
