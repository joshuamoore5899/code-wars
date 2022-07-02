// 500. Keyboard Row
//
// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
//
// In the American keyboard:
//
// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".
//
//
//
// Example 1:
//
// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]
// Example 2:
//
// Input: words = ["omk"]
// Output: []
// Example 3:
//
// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]
//
//
// Constraints:
//
// 1 <= words.length <= 20
// 1 <= words[i].length <= 100
// words[i] consists of English letters (both lowercase and uppercase).

var findWords = function(words) {
    let topRow = new Set("qwertyuiop".split(''));

    let middleRow = new Set("asdfghjkl".split(''));

    let bottomRow = new Set("zxcvbnm".split(''));

    let ans = [];

    for (let i = 0; i < words.length; i++) {
        let first = "";
        let second = "";
        let third = "";
        for (let j = 0; j < words[i].length; j++) {
            if (topRow.has(words[i][j].toLowerCase())) {
                first += words[i][j];
            }
            else if (middleRow.has(words[i][j].toLowerCase())) {
                second += words[i][j];
            }
            else if (bottomRow.has(words[i][j].toLowerCase())) {
                third += words[i][j];
            }
            else {
                break;
            }
        }
        if (first.length === words[i].length || second.length === words[i].length || third.length === words[i].length) {
            ans.push(words[i]);
        }
    }
    return ans;


};
