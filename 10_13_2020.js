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

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const majorityElement = (nums) => {
//   nums.sort((a,b) => a - b);
//   return nums[Math.floor(nums.length/2)];
// };
// console.log(majorityElement([2,3,3,4]))
// //2

// const maskify = (cc) => {
//   const result = cc;
//   result.substr(result.length - 4);
//   console.log('sub', result);
//   result.concat('####');
//   return result;
// };
// console.log(maskify('122333445667890'));

// const maskify = (card) => {
//   let newString = '';
//   if(card.length > 4) {
//     for(let i = 0; i < card.length - 4; i++) {
//       newString += '#';
//     }
//     for(let j = card.length - 4; j < card.length; j++) {
//       newString += card[j];
//     }
//     return newString;
//   }
//   return card;
// };
// console.log(maskify('1234567891234567'));


//hides all except for last 4 digits
// const maskCreditCardNumber = (cardNumber) => {
//   return cardNumber.replace(/.(?=.{4,}$)/g, '#');
// };
// console.log(maskCreditCardNumber('12345675684563462'));

// function useSlice(array, start, end) {
//   // your code here
//   array.slice(start, end);
//   console.log("arr", array)
//   return array;
// }

// console.log(useSlice([ 1, 2, 3, 4, 5 ], 1, 4));

// const addProperty = (obj, key, value) => {
//   // your code here
//   obj[key] = value;
//   return obj;
// };

// console.log(addProperty({
//   key1: 'val1',
//   key2: 'val2'
// }, 'key3', 'val3'))

// const removeProperty = (obj, key) => {
//   console.log("xxx", obj[key])
//   // delete obj[key];
//   return obj;
// }
// console.log(removeProperty({a: 1, b: 2}, 'a'))

// const countAllCharacters = (str) => {
//   let dict = {};
//   if (str !== "") {
//       let arr = str.split("");
//       console.log("vvv", arr)
//       for (let i = 0; i < arr.length; i++) {
//           if (typeof dict[arr[i]] === "undefined") {
//               dict[arr[i]] = 1;
//           } else {
//               dict[arr[i]] += 1;
//           }
//       }
//   }
//   return dict;
// };
// console.log(countAllCharacters('b % anana'))

// function transformEmployeeData(array) {
//   var collection = [];
//   for(var i = 0; i < array.length; i++){
//     var obj = {};
//     var dataArray =array[i];
//     for(var j= 0; j < array[i].length; j++){
//       obj[dataArray[j][0]] = dataArray[j][1]
//     }
//     collection.push(obj);
//   }
//   return collection;
// }
// console.log(transformEmployeeData([
//   [
//       ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//   ],
//   [
//       ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//   ]
// ]))

let a = 5;
let x = a;
let b = x++;
let c = ++x;

console.log("a:", a,"b:", b,"c:", c, )