// 1002. Find Common Characters
//
// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.
//
//
//
// Example 1:
//
// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:
//
// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]
//
//
// Constraints:
//
// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists of lowercase English letters.

// with splice
var commonChars = function(words) {
    let ans = [];

    for (let i = 0; i < words[0].length; i++) {
        let temp = words[0][i];
        let tracker = true;
        for (let j = 1; j < words.length; j++) {
            if (!words[j].includes(temp)) {
                tracker = false;
                break;
            }
            else {
                if (typeof(words[j]) === 'string') {
                    words[j] = words[j].split('');
                }
                words[j].splice(words[j].indexOf(temp), 1)
            }
        }
        if (tracker) {
            ans.push(temp)
        }

    }
    return ans;
};

//with replace
var commonChars = function(words) {
    let ans = [];

    for (let i = 0; i < words[0].length; i++) {
        let temp = words[0][i];
        let tracker = true;
        for (let j = 1; j < words.length; j++) {
            if (!words[j].includes(temp)) {
                tracker = false;
                break;
            }
            else {
                words[j] = words[j].replace(temp, '')
            }
        }
        if (tracker) {
            ans.push(temp)
        }

    }
    return ans;
};
