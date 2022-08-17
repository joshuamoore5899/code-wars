// The Hashtag Generator
//
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
//
// Here's the deal:
//
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
  str = str.trim();
  if (str === "") {
    return false;
  }
  str = str.split(' ');
  let ans = ["#"]
  for (let i = 0; i < str.length; i++) {
    if (str[i].length != 0) {
      ans.push(capitalize(str[i]))
    }
  }
  let final = ans.join('');
  return final.length > 140 ? false : final;
}

function capitalize(val) {
  val = val.split('');
  val[0] = val[0].toUpperCase();
  return val.join('');
}
