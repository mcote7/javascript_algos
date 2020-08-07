export function rotLeft(a, d) {
  let myArray = [...a];
  const len = myArray.length -1;
  let numOfTurns = d;
  let i = 0;
  while(i < numOfTurns) {
    myArray.push(myArray.shift());
    // myArray.unshift(myArray.pop()); --- reverse  <<<
    i++;
  }
  return myArray;
}
console.log(rotLeft([1,2,3,4,5], 1));