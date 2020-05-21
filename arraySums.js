// challenge #1

// https://leetcode.com/problems/two-sum/

// twoSums(nums, target)

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

function twoSums (num, target) {
    output = [];
    for(i = 0; i < num.length -1; i++){
        for(j = i + 1; j < num.length; j++ ){
            if(num[i] + num[j] === target){
                output.push(i);
                output.push(j);
                return output;
            }
        }
    }
};



function twoSums(nums,target){
    let p1 = 0;
    let p2 = 1;
    let newArr = [];
    while(p1 !== nums.length){
        if(nums[p1] + nums[p2] === target){
            newArr.push(p1);
            newArr.push(p2);
            return newArr;
        }
        else if(p2 === nums.length){
            p1++;
            p2 = p1+1;
        }
        else {
            p2++;
        }
    }
}
console.log(twoSums([2,7,11,15], 22))
// console.log(twoSums([2,7,11,15], 9));


// unsorted, positive integers, no floats

// [5, 5, 6]
// 10
// [0, 1]

// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].



// challenge #2

// https://www.codewars.com/kata/58f8b35fda19c0c79400020f

// allNonConsecutive(nums)

// Given a sorted array of positive ints, find all the non-consecutive integers
// A number is non-consecutive if it is NOT exactly 1 larger than the previous element.

// The first element is never considered non-consecutive.

// Return an array of objects where each object contains the number itself
// and it's index.

function allNonConsecutive(num){
    output = [];
    for(i = 0; i < num.length -1; i++){
        if(num[i] +1 !== num[i +1]){
        output.push({'idx': i+1, 'num': num[i+1]});
        }
    }
    return output;
};

console.log(allNonConsecutive([1,2,3,4,6,7,8,10,11,12,17]))

// Input: [1,2,3,4,6,7,8,10]

// 6 and 10 are the only non-consecutive numbers

// Output: [
//  {i: 4, n:6},
//  {i: 7, n:10}
// ]


