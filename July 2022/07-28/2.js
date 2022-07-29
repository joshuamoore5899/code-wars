// Greed is Good
//
// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
//
//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
//
// Example scoring
//
//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

function score( dice ) {
  // Fill me in!
  let tracker = {};
  let score = 0;
  for (let i = 0; i < dice.length; i++) {
    tracker[dice[i]] = tracker[dice[i]] + 1 || 1;
  }

  if (tracker[1] >= 3) {
    score += 1000;
    tracker[1] = tracker[1] - 3;
  }
  if (tracker[6] >= 3) {
    score += 600;
    tracker[6] = tracker[6] - 3;
  }
  if (tracker[5] >= 3) {
    score += 500;
    tracker[5] = tracker[5] - 3;
  }
  if (tracker[4] >= 3) {
    score += 400;
    tracker[4] = tracker[4] - 3;
  }
  if (tracker[3] >= 3) {
    score += 300;
    tracker[3] = tracker[3] - 3;
  }
  if (tracker[2] >= 3) {
    score += 200;
    tracker[2] = tracker[2] - 3;
  }
  if (tracker[1] === 2) {
    score += 200;
  }
  if (tracker[1] === 1) {
    score += 100;
  }
  if (tracker[5] === 2) {
    score += 100;
  }
  if (tracker[5] === 1) {
    score += 50;
  }
  return score;
}
