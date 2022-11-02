// Changing letters
//
// When provided with a String, capitalize all vowels
//
// For example:
//
// Input : "Hello World!"
//
// Output : "HEllO WOrld!"
//


function swap (string) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let ans = string.split('').map((x) => {
    if (vowels.includes(x)) {
      return x.toUpperCase();
    }
    else {
      return x;
    }
  }).join('');
  return ans;
}
