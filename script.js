// Two Sum (mencari indeks yang memiliki nilai jika ditambahkan sama dengan target)
// let arr = [2, 7, 11, 15];
// let target = 9;

// let twoSum = function (arr, target) {
//   let arr1 = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i; j < arr.length - 1; j++) {
//       if (arr[i] + arr[j + 1] == target) {
//         arr1.push(i);
//         arr1.push(j + 1);
//       }
//     }
//   }
//   return arr1;
// };
// let k = twoSum(arr, target);
// console.table(k);

// ------------------------
// let arr = [1, 3, 4, 5];
// console.log(arr);

// let m = new Map();

// //add values to our hashmap
// m.set(1, 3);
// m.set("faiz", 10);
// m.set("kamu", true);
// m.set(1, 4);
// console.log(m);

// // for (t of m.values()) {
// //   console.log(t);
// // }
// //delete  a key

// m.delete("kamu");
// console.log(m);

// ------------------------
// Roman To Integer (mengubah angka romawi ke integer)

let romanToInt = function (s) {
  let m = new Map();
  m.set("I", 1).set("V", 5).set("X", 10).set("L", 50).set("C", 100).set("D", 500).set("M", 1000);
  let temp = "";
  let hsl = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    temp = s.charAt(i);
    if (s.charAt(i) == "V" || (s.charAt(i) == "X" && s.charAt(i - 1) == "I")) {
      m.set("I", -1);
    } else if (s.charAt(i) == "L" || (s.charAt(i) == "C" && s.charAt(i - 1) == "X")) {
      m.set("X", -10);
    } else if (s.charAt(i) == "D" || (s.charAt(i) == "M" && s.charAt(i - 1) == "C")) {
      m.set("C", -100);
    }
    hsl += m.get(temp);
  }
  return console.log(hsl);
};
romanToInt("MCMXCIV");
