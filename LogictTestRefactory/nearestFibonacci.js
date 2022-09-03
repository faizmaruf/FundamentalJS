function nearestFibonacci(x) {
  let temp;
  let arr = [];
  for (let i = 0; i < x; i++) {
    if (arr === undefined || arr.length == 0) {
      arr.push(i);
      arr.push(1);
    } else {
      temp = arr[i - 1] + arr[i];
      arr.push(temp);
    }
  }
  return arr;
}
console.log(nearestFibonacci(7));
