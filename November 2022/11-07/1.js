// Kooka-Counter
//
// A family of kookaburras are in my backyard.
//
// I can't see them all, but I can hear them!
//
// How many kookaburras are there?
//
// The trick to counting kookaburras is to listen carefully
//
// The males sound like HaHaHa...
//
// The females sound like hahaha...
//
// And they always alternate male/female
//
// Examples
// ha = female => 1
// Ha = male => 1
// Haha = male + female => 2
// haHa = female + male => 2
// hahahahaha = female => 1
// hahahahahaHaHaHa = female + male => 2
// HaHaHahahaHaHa = male + female + male => 3

var kookaCounter = function(laughing) {
  if (laughing.length < 1) {
    return 0;
  }
  let filtered = laughing.split('').filter((x) => x === 'h' || x === 'H');
  let count = [filtered[0]];
  let tracker = {
    'h': 'H',
    'H': 'h'
  }
  for (let i = 0; i < filtered.length; i++) {
    if (filtered[i] === tracker[count[count.length - 1]]) {
      count.push(filtered[i]);
    }
  }
  return count.length;
}
