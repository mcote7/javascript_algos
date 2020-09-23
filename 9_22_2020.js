// const arr1 = [1, 3, 5, 7, 9, 5] // n
// const arr2 = [10, 13, 9, 8, 7, 6, 5] // m

// const duplicateNums = (arr1, arr2) => {
//   const result = [];
  
//   return result;
// }
// console.log(duplicateNums(arr1, arr2));

// **********************************************

// Given an array, shift all values one position to the left.  Change the final position to 0. Return the changed array
// Predicted Output: shiftLeft([1,2,3,4,5]) should return [2,3,4,5,0];

// const shiftLeft = (arr) => {
//   let result = [...arr];
//   result.shift()
//   // console.log("xx",result);
//   result.push(0);
//   return result;
// };
// console.log(shiftLeft([1,2,3,4,5]));

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// const isValid = (s) => {
//   const valid = {
//     0:'()',
//     1:'[]',
//     2:'{}'
//   };
//   const result = s;
//   if(result.includes(valid[1])) {
//     return true;
//   }
//   return false;
// };
// console.log(isValid('[]'));

