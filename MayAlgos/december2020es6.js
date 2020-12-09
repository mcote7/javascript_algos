function sumItUp (strings, ...values) {
  let sum = values.reduce((a,b)=>a+b);
  // TODO: sum up all interpolated values into a sum variable
  return `the total sum was ${sum}`
}