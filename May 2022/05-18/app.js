// Split Strings
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
// Examples:
//
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
  let ans = [];
  str = str.split('')
  if (str.length % 2 != 0) {
    str.push('_')
  }

  for (let i = 0; i < str.length; i += 2) {
    ans.push(str[i] + str[i + 1]);
  }
  return ans;
}
