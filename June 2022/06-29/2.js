// 2085. Count Common Words With One Occurrence
//
// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.
//
//
//
// Example 1:
//
// Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
// Output: 2
// Explanation:
// - "leetcode" appears exactly once in each of the two arrays. We count this string.
// - "amazing" appears exactly once in each of the two arrays. We count this string.
// - "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
// - "as" appears once in words1, but does not appear in words2. We do not count this string.
// Thus, there are 2 strings that appear exactly once in each of the two arrays.
// Example 2:
//
// Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
// Output: 0
// Explanation: There are no strings that appear in each of the two arrays.
// Example 3:
//
// Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
// Output: 1
// Explanation: The only string that appears exactly once in each of the two arrays is "ab".
//
//
// Constraints:
//
// 1 <= words1.length, words2.length <= 1000
// 1 <= words1[i].length, words2[j].length <= 30
// words1[i] and words2[j] consists only of lowercase English letters.


//brute force
var countWords = function(words1, words2) {
    let uniqueWords = [];
    let counter = 0;
    let tracker1 = {};
    let tracker2 = {};

    for (let i = 0; i < words1.length; i++) {
        if (words1.indexOf(words1[i]) === words1.lastIndexOf(words1[i])) {
            if (tracker1[words1[i]]) {
                continue;
            }
            else {
                uniqueWords.push(words1[i]);
            }
            tracker1[words1[i]] = 1;
        }
    }

    for (let i = 0; i < words2.length; i++) {
        if (words2.indexOf(words2[i]) === words2.lastIndexOf(words2[i])) {
            if (tracker2[words2[i]]) {
                continue;
            }
            else {
                uniqueWords.push(words2[i]);
            }
            tracker2[words2[i]] = 1;
        }
    }



    for (let i = 0; i < uniqueWords.length; i++) {
        if (uniqueWords.indexOf(uniqueWords[i]) !== uniqueWords.lastIndexOf(uniqueWords[i])) {
            uniqueWords.splice(i, 1);
            counter++;
        }
    }

    return counter;

};


//using object/map

var countWords = function(words1, words2) {
    let uniqueWords = [];
    let counter = 0;
    let tracker = {};

    let totalInput = words1.concat(words2);

    for (let i = 0; i < totalInput.length; i++) {
        if (tracker[totalInput[i]]) {
            tracker[totalInput[i]]++;
        }
        else {
            tracker[totalInput[i]] = 1;
        }
    }

    for (const key in tracker) {
        if (tracker[key] === 2) {
            if (words1.includes(key) && words2.includes(key)) {
                counter++;
            }
        }
    }


    return counter;

};
