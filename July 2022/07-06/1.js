//Convert string to camel case

// Complete the method/function so that it converts dash/underscore delimited words
// into camel casing. The first word within the output should be capitalized only
// if the original word was capitalized (known as Upper Camel Case, also often
// referred to as Pascal case).

function toCamelCase(str){
  str = str.split('');
  let alphabet = "qwertyuiopasdfghjklzxcvbnm";
  let final = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '_' || str[i] === '-') {
      continue;
    }
    else {
      if (str[i - 1] === '_' || str[i - 1] === '-') {
        final += str[i].toUpperCase();
      }
      else {
        final += str[i];
      }
    }
  }
  return final;
}
