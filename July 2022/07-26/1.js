// Write Number in Expanded Form
//
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  // Your code here
  let ans = [];
  let counter = 0;
  num = num.toString();
  for (let i = num.length - 1; i >= 0; i--) {
    let temp = "";
    if (num[i] === '0') {
      counter++;
      continue;
    }
    temp += num[i];
    while (temp.length <= counter) {
      temp += '0';
    }
    ans.push(temp)
    counter++;
  }
  return ans.reverse().join(' + ')
}
