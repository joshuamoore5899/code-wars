// 1356. Sort Integers by The Number of 1 Bits
// Easy
//
// 1091
//
// 48
//
// Add to List
//
// Share
// You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.
//
// Return the array after sorting it.
//
//
//
// Example 1:
//
// Input: arr = [0,1,2,3,4,5,6,7,8]
// Output: [0,1,2,4,8,3,5,6,7]
// Explantion: [0] is the only integer with 0 bits.
// [1,2,4,8] all have 1 bit.
// [3,5,6] have 2 bits.
// [7] has 3 bits.
// The sorted array by bits is [0,1,2,4,8,3,5,6,7]
// Example 2:
//
// Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
// Output: [1,2,4,8,16,32,64,128,256,512,1024]
// Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.
//
//
// Constraints:
//
// 1 <= arr.length <= 500
// 0 <= arr[i] <= 104

var sortByBits = function(arr) {
    let duplicates = [];
    let mapped = arr.map(x => x.toString(2));
    let tracker = {};
    for (let i = 0; i < mapped.length; i++) {
        mapped[i].split('');
        let counter = 0;
        for (let j = 0; j < mapped[i].length; j++) {
            if (mapped[i][j] === '1') {
                counter++;
            }
        }
        if (!tracker[arr[i]]) {
            tracker[arr[i]] = counter;
        }
        else {
            duplicates.push(arr[i].toString())
        }

    }
    let final = Object.keys(tracker).sort((a, b)=>tracker[a] - tracker[b])
    if (duplicates.length > 0) {
        for (let i = 0; i < duplicates.length; i++) {
            let temp = final.indexOf(duplicates[i]);
            final.splice(temp, 0, duplicates[i])
        }
    }
    return final;

};
