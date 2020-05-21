// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given a list of positive integers 0-255 arr
// You are given a value 1-255 k

// Find all the consecutive sets of integers that add up to the value k



// findConsqSums(arr, k);
// findConsqSums([2,99,5,3,6,7,0,0,23,12], 16)
//                      3
//                            j
// outputs: [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

function findConsqSums(arr, k) {
    const sums = [];

    for (let i = 0; i < arr.length; ++i) {
      const consecNums = [];
      let sum = 0;
      let j = i;

      while (sum <= k && j < arr.length - 1) {
        if (sum + arr[j] <= k) {
          sum += arr[j];
          consecNums.push(arr[j++]);

          if (sum === k) {
            sums.push([...consecNums]);
          }
        } else {
          break;
        }
      }
    }
    return sums;
  }



// Bonus Challenge Number 2
// this was an actual interview question given for an AWS engineer role

//  kMostFrequent(arr, k)

//   Given an unsorted non-empty array of integers and int k,
//   return the k most frequent elements (in any order)
//  * You can assume there is always a valid solution *
//   These example inputs are sorted for readability,
//   but the input is not guaranteed to be sorted and the output does not need to be in any specific order

//   Input: [1, 1, 1, 2, 2, 3], k = 2
//   Output: [1, 2]
//   Explanation: return the two most frequent elements,
//   1 and 2 are the two most frequent elements

//   Input: [0, 0, 0, 2, 2, 3], k = 1
//   Output: [0]
//   Explanation: k being 1 means return the single most frequent element

//   Input: [1, 1, 2, 2, 3, 3], k = 3
//   Output: [1, 2, 3]
//   Explanation: 3 is the only value that would be passed in for k
//   because it is the only value for k that has
//   a valid solution. Since 1, 2, and 3, all occur 3 times,
//   they are all the most frequent ints, so there is no
//   1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints.