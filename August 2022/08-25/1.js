// Framed Reflection

function mirror(text){
  let ans = "";
  text = text.split(' ');
  let max = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i].length > max) {
      max = text[i].length;
    }
    text[i] = text[i].split('').reverse().join('');
  }

  max = max + 4;


  for (let i = 0; i < text.length + 1; i++) {
    let temp = "";

    if (i === 0) {
      temp += ('*'.repeat(max) + '\n');
    }
    if (i === text.length) {
      temp += '*'.repeat(max);
    }
    else {
      let spaces;
      if (text[i].length < max - 4) {
        spaces = max - (text[i].length) - 3;
      }
      else {
        spaces = 1;
      }
      temp += (`* ${text[i]}` + " ".repeat(spaces) + "*" + '\n');
    }
    ans += temp;
  }
  return ans;
}
