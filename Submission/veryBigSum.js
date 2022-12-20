let arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
let aVeryBigSum = (ar) => {
  let temp = 0;
  for (let i = 0; i < ar.length; i++) {
    temp += ar[i];
  }
  return temp;
};

console.log(aVeryBigSum(arr));
