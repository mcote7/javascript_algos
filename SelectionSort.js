
// Selection Sort


// Selection sort works by iterating through the list, finding the minimum value, and moving it to the beginning of the list.
// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.

function selectionSort(arr){
    var len = arr.length;
    for(var i = 0; i < len; i++){
        var min = i;
        for(var j = i + 1; j < len; j++){
            if(arr[min] > arr[j]){
                min = j
            }
            if(min !== i) {
                var temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
    }
    return arr;
}

// [9, 4, 1];
//     i
//         j
//


// min = 0


// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)


// Selection sort is one of the slower sorts.
// It can be used for pagination,
// where page 1 displays 10 records for example,
// you run selection sort for 10 iterations only to display the first 10 sorted items

// https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/

//<--------------------------------------------------------------------------------------------------------------------------------<<<<<<<