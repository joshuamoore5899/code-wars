// CamelCase Method
//
// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.
//
// For instance:
//
// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

String.prototype.camelCase=function(){
  //your code here

  if (this.length > 0) {
    let split = this.trim().split(" ");
    console.log(split)
    for (let i = 0; i < split.length; i++) {
      let first = split[i][0].toUpperCase();
      let remainder = split[i].slice(1);
      split[i] = first + remainder;
    }
    return split.join('');
  }
  else {
    return "";
  }

}
