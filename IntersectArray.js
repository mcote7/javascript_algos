// Union Sorted Arrays

// Efficiently combine two already-sorted multiset arrays
// into a new sorted array containing the multiset union.

// Unions by default will take the set of dupes
// that has the highest occurences from one array.

// Input: [1,2,2,2,7], [2,2,6,6,7]
// Output: [1, 6]



// arrays could be different sizes
// all positive integers
// could be empty


// https://prod.liveshare.vsengsaas.visualstudio.com/join?CB04E68C2F05CF5355590769EA2420480100
// share this if a group member drops or connects late










// arr1 = [1,2,2,2,7]
//                      5
// arr2 = [2,2,6,6,7] x
//                     5

// result = [2, 7];
// function intersection(array[19]){}

// {}
function intersectSortedArrays(arr1, arr2) {
    let idx1 = 0;
    let idx2 = 0;

    const len1 = arr1.length;
    const len2 = arr2.length;
    const result = [];

    while (idx1 < len1 && idx2 < len2) {
        if (arr1[idx1] < arr2[idx2]) {
            result.push(arr1[idx1]);
            idx1++;
        } else if (arr1[idx1] > arr2[idx2]) {
            result.push(arr2[idx2]);
            idx2++;
        }
        // current num from both arrays are equal
        else {
            if (result[result.length - 1] !== arr1[idx1]) {
                result.push(arr1[idx1]);
            }
            idx1++;
            idx2++;
        }
    }
    return result;
}

arr1 = [1,2,2,2,7]
arr2 = [2,2,6,6,7]

// === GLOSSARY ===

// collection: grouped data. arrays, lists, sets, multisets
// set: a collection with no duplicates, does not track count of values
// multiset: a collection that allows duplicates, tracks count of values
// intersection: all the values that exist across multiple collections, deduped

// union multiset: the higher count of duped values are kept. if there are 3 number ones
// in one set and 2 number ones in the other set, 3 number ones would be kept

function unionSortedArrs(arr1, arr2) {
    const res = [];
    let idx1 = 0;
    let idx2 = 0;

    while (idx1 < arr1.length || idx2 < arr2.length) {
        if (idx1 === arr1.length) {
            res.push(arr2[idx2]);
            idx2++;
            continue;
        } else if (idx2 === arr2.length) {
            res.push(arr1[idx1]);
            idx1++;
            continue;
        }

        if (arr1[idx1] === arr2[idx2]) {
            res.push(arr1[idx1]);
            idx1++;
            idx2++; // since both were same, increment both
        } else if (arr1[idx1] < arr2[idx2]) {
            res.push(arr1[idx1]);
            idx1++;
        } else {
            res.push(arr2[idx2]);
            idx2++;
        }
    }
    return res;
}