// Two Sum (mencari indeks yang memiliki nilai jika ditambahkan sama dengan target)
let arr = [2, 7, 11, 15];
let target = 9;

let twoSum = function (arr, target) {
  let arr1 = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[i] + arr[j + 1] == target) {
        arr1.push(i);
        arr1.push(j + 1);
      }
    }
  }
  return arr1;
};
let k = twoSum(arr, target);
console.table(k);
