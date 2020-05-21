/*
    Given two arrays of ints
    return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
        think of a venn diagram filled in except the ovlerapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included
    Examples:
    Input: [1, 2], [2, 1]
    Output: []
    Input: [1, 2, 3], [4, 5, 6]
    Output: [1, 2, 3, 4, 5, 6]
    Input: [4, 1, 2, 3, 4], [1, 2, 3, 5, 5]
    Output: [4, 5]
    Bonus: Make it work when given a set of sets (array of arrays of ints)



*/

// https://prod.liveshare.vsengsaas.visualstudio.com/join?6A1DE7F6EEDE4B3BEBA881C4A9A64C0F052A

// 1. USE ARRAY METHODS - includes()

// 2. USE OBJECTS(HASH MAPS) TO KEEP TRACK OF NUMBERS

// R - REITERATE
// I - INPUT
// O - OUTPUT
// T - TEST CASES

console.log(deltaOfTwoSets([1, 2], [2, 1]))
console.log(deltaOfTwoSets([1, 2, 3], [4, 5, 6]))
console.log(deltaOfTwoSets([4, 1, 2, 3, 4], [1, 2, 3, 5, 5]))

function deltaOfTwoSets(setA, setB) {
    const symDiff = [];

    for (const n of setA) {
    if (setB.includes(n) === false && symDiff.includes(n) === false) {
        symDiff.push(n);
    }
    }
    for (const n of setB) {
    if (setA.includes(n) === false && symDiff.includes(n) === false) {
        symDiff.push(n);
    }
    }
    return symDiff;
}

function deltaOfTwoSetsHashTable(setA, setB) {
    const symDiffHash = {};

    for (const num of setA) {
    symDiffHash[num] = num;
    }

    for (const num of setB) {
    if (symDiffHash.hasOwnProperty(num)) {
        delete symDiffHash[num];
    } else {
        symDiffHash[num] = num;
    }
    }
    return Object.values(symDiffHash);
}