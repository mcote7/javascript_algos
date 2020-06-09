// You are given a string representing an attendance record for a student. The record only contains the following three characters:
// 'A' : Absent.
// 'L' : Late.
// 'P' : Present.
// A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

// You need to return whether the student could be rewarded according to his attendance record.

// Example 1:
// Input: "PPALLP"
// Output: True
// Example 2:
// Input: "PPALLL"
// Output: False
// /**
//  * @param {string} s
//  * @return {boolean}
//  */


// var checkRecord = function(s) {
//     let count = 0;
//     for(let i = 0; i < s.length; i++) {
//         if(s[i] === 'A') {
//             count += 1;
//         }
//     }
//     let result = count > 1 || s.includes('LLL') ? false : true;
//     return result;
// };

// console.log(checkRecord('PPALLLLP'));

// ----------------------------------------------------------------------------------------------------------------------


// /**
//  * @param {number[]} heights
//  * @return {number}
//  */
// var heightChecker = function(heights) {
//     let moves = 0;
//     let temp = 0;
//     for(var i = 0; i < heights.length; i++) {
//         for(var j = 1; j < heights.length; j++) {
//             if(heights[i] > heights[j]) {
//                 temp = heights[i];
//                 heights[i] = heights[j];
//                 heights[j] = temp;
//                 moves++;
//                 console.log(`Moves:  ${moves}`);
//                 break;
//             }
//         }
//     }
//     console.log(`Moves returned:  ${moves}`);
//     return moves;

// };

// heightChecker([1,1,4,2,1,3]);
//                 [1,1,2,1,3,4]

// ------------------------------------------------------------------------------

// /**
//  * @param {number[]} bits
//  * @return {boolean}
//  */
// var isOneBitCharacter = function(bits) {
//     let length = bits.length;
//     if(length % 2 === 0) {
//         return false;
//     }
//     else {
//         return true;
//     }
// };

// console.log(isOneBitCharacter([1,1,1,0]));

// ______________________________________________________________________________



/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    output = [];
    for(let i = 0; i < A.length; i++) {
        let subArray = A[i];
        // console.log(`initial: ${subArray}`);
        subArray.reverse();
        // console.log(`reversed: ${subArray}`);//--------------
        // output.push(subArray);
        // console.log(`output: ${output}`);//--------------
        for(let j = 0; j < subArray.length; j++) {
            if(subArray[j] === 0) {
                subArray[j] = 1;
                // output.push(subArray[j]);
            }
            else if(subArray[j] === 1) {
                subArray[j] = 0;
                // output.push(subArray[j]);
            }
        }
        output.push(subArray);
    }
    return output; 
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));