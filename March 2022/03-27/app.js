// I love you, a little , a lot, passionately ... not at all
//
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
//
// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
//
// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

function howMuchILoveYou(nbPetals) {
  let phrases = ["I love you", 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  let thisOne = nbPetals % phrases.length;
  console.log(nbPetals);
  if (nbPetals < 7) {
    return phrases[nbPetals - 1]
  }
  if (thisOne === 0) {
    return phrases[phrases.length - 1];
  }
  else {
    return phrases[thisOne - 1]
  }


}
