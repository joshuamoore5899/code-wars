// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot separating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F

function abbrevName(name){
  let ans = ''
  let firstInitial = name[0]
  let secondInitial = ''
  for (i = 0; i < name.length; i++) {
    if (name[i] === ' ') {
      secondInitial = name[i+1]
      break
    }
  }
  ans = firstInitial.toUpperCase() + '.' + secondInitial.toUpperCase()
  return ans

}
