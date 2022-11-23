// Efficiently remove adjacent duplicate characters from BIG strings

// Remove all adjacent duplicate characters from a string, as soon as you encounter them walking left to right, and ensuring that at the end NO two adjacent characters remain.

// Examples
// dedup('abc') -> 'abc'
// dedup('abbc') -> 'ac'
// dedup('abbbc') -> 'ac'
// dedup('abbcccbad') -> 'abad'
// dedup('abccbbad') -> 'abbbad' -> 'aad' -> 'd'
// As stated in the title, be prepared to get a few really big strings.


//using a find and delete approach
function dedup(string) {
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === string[i + 1]) {
      let counter = 1;
      let pointer = i + 1;
      while (string[pointer] === string[i] && pointer < string.length) {
        pointer++;
        counter++;
      }
      string = string.slice(0, i) + string.slice(pointer);
      i -= 2;
    }
  }
  return string
}

//adding nonduplicates to separate string
function dedup(string) {
  let ans = []
  let not = ""
  for (let i = 0; i < string.length; i++) {
    
    if (string[i] != string[i + 1] && (string[i] != ans[ans.length - 1] && string[i] != not[not.length - 1])) {
      ans.push(string[i]);
    }
    
    else if (string[i] != string[i + 1] && string[i] != ans[ans.length - 1]) {
      if (string[i] != string[i-1]) {
         ans.push(string[i]);
      }
    }
    
    else {
      if (string[i] === ans[ans.length - 1]) {
        ans.pop()
      }
      not += string[i];
    }
  }
  return ans.join('');
}

//more concise version
function dedup(string) {
  let newArr=[];
  for (let i=0; i<= string.length; i++){
    if (string[i] == newArr[(newArr.length-1)]){
     newArr.pop();
  }else if
    (string[i] == string[i-1]){
continue 
  }
  else {newArr.push(string[i]);}
}
return newArr.join("")
}
