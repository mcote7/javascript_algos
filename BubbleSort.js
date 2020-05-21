// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr){
    var len = arr.length;
    for(var i = 0; i < len; i++){
        for(var j = 0; j < len; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([88, 99, 111, 55, 122]));


// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.bigocheatsheet.com/
// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

//<----------------------------------------------------------------------------------------------------------------------<<<<<<<