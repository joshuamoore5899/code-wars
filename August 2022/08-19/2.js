// Strip Comments
//
// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.
//
// Example:
//
// Given an input string of:
//
// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:
//
// apples, pears
// grapes
// bananas
// The code would be called like so:
//
// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
  let strings = input.split('\n');
  let ans = [];
  for (let i = 0; i < strings.length; i++) {
    let temp = strings[i];
    let index = temp.length;
    for (let j = 0; j< markers.length; j++) {
      if (temp.includes(markers[j])) {
        index = temp.indexOf(markers[j]);
      }
    }
    temp = temp.slice(0, index);
    temp = temp.trim();
    ans.push(temp);
  }
  return ans.join('\n')
};
