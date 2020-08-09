// export function rotLeft(a, d) {
//   let myArray = [...a];
//   const len = myArray.length -1;
//   let numOfTurns = d;
//   let i = 0;
//   while(i < numOfTurns) {
//     myArray.push(myArray.shift());
//     // myArray.unshift(myArray.pop()); --- reverse  <<<
//     i++;
//   }
//   return myArray;
// }
// console.log(rotLeft([1,2,3,4,5], 1));


// function sockMerchant(n, ar) {
//   var res = 0;
//   ar.sort();
//   console.log(ar.sort());
//   for(let i=0; i<n;i++){
//       if(ar[i] == ar[i+1]){
//           i++;
//                 res++;
//         }
//   }
// return res;
// }
// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

// function pageCount(n, p) {
//   const pageTurns = Math.floor(p / 2);
//   console.log("pt", pageTurns)
//   const totalTurns = Math.floor(n / 2);
//   console.log("tt", totalTurns)

//   return Math.min(pageTurns, totalTurns - pageTurns);
// }
// console.log(pageCount(6, 2))

// Complete the countingValleys function below.
// function countingValleys(n, s) {
//   const result = s.split("");
//   const len = result.length;
//   let i = 0;
//   let count = 0;
//   let valleys = 0;
//   for(i;i<len;i++) {
//     if(result[i] === 'U') {
//       count+=1;
//       if(count === 0) {
//         valleys+=1;
//       }
//     }
//     else {
//       count-=1;
//     }
//   }
//   console.log(result, len);
//   return valleys;
// }
// console.log(countingValleys(12, "DDUUDDUDUUUD"))
// //  >  2

// function getMoneySpent(keyboards, drives, b) {
//   let n = keyboards.length;
//   let m = drives.length;
//   let max = -1;
//   for(let i=0;i<n;i++)
//   {
//       for(let j=0;j<m;j++)
//       {
//         if(keyboards[i]+drives[j]<=b && keyboards[i]+drives[j]>max){
//           max=keyboards[i]+drives[j];
//         }
//       }
//   }
//   return max;
// };
// console.log(getMoneySpent([3,1], [5,2,8], 10));

// // Complete the catAndMouse function below.
// function catAndMouse(x, y, z) {
//   const catAdiff = Math.abs(x - z);
//   const catBdiff = Math.abs(y - z);
//   if(catAdiff === catBdiff) return "Mouse C";
//   return catAdiff < catBdiff ? "Cat A" : "Cat B";
// }
// console.log(catAndMouse(1,2,3))
// // Cat B

// // Complete the makeAnagram function below.
// function makeAnagram(a, b) {
//   let aSorted = a.sort();
//   let bSorted = b.sort();
//   console.log("a", aSorted);
//   console.log("b", bSorted);

// }
// console.log(makeAnagram(cde, abc))
// //  4

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
  let result = s.split("");
  console.log(result);
  let len = result.length;
  let i = 0;
  let j = 1;
  for(i;i<len;i++){
    for(j;j<len;j++) {
      if(result[i] === result[j]) {
        result.splice(result[j],1);
        return result;
      }
    }
  }
}
console.log(alternatingCharacters("ABBABBAA"));