// let strsi = ["a"];
// let longestCommonPrefix = function (strs) {
//   let s = "";
//   let j = strs.length - 1;
//   for (let i = 0; i < strs.length; i++) {
//     if (strs[i].slice(0, i) == strs[j].slice(0, i)) {
//       s = strs[i].slice(0, i);
//     } else {
//       return "";
//     }
//     j = j - 1;
//   }
//   return s;
// };
// console.log(longestCommonPrefix(strsi));
// console.log(strsi[2].slice(0, 2));

let strsi = ["a"];
let longestCommonPrefix = function (strs) {
  let s = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = strs.length - 1; j >= 0; j--) {
      if (strs[i].slice(0, i) == strs[j].slice(0, i)) {
      }
    }
  }
};
console.log(longestCommonPrefix(strsi));
