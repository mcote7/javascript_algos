// helper function for ngIf's 

// const and = (...x) => x.reduce( (x,y) => x && y );

// let boola = true;
// let boolb = false;
// let boolc = true;
// let boold = false;

// console.log(and(boola, !boolb, boolc, !boold));

// ex. 

// ngIf*="boola && !boolb && boolc && !boold" 

// ngIf*="and(boola, !boolb, boolc, !boold)" 


// let array = [1,2,3,4,5];

// console.log(array[4]);

// merge two sorted arrays
const merge = (arr1, arr2) => {if (arr1.length && arr2.length) return result = arr1.concat(arr2).sort((a,b)=> {return a - b}); else return 'no length';};
console.log("merge success? :::",merge([4,7,2,9], [3,6,5,8]));
console.log("merge success? :::",merge([], []));
