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

// let strsi = ["a"];
// let longestCommonPrefix = function (strs) {
//   let s = "";
//   for (let i = 0; i < strs[0].length; i++) {
//     for (let j = strs.length - 1; j >= 0; j--) {
//       if (strs[i].slice(0, i) == strs[j].slice(0, i)) {
//       }
//     }
//   }
// };
// console.log(longestCommonPrefix(strsi));

// let strsi = ["abc", "ab", "ab"];
// let longestCommonPrefix = function (strs) {
//   let arr = new Map();
//   let h = strs.length - 1;

//   for (let i = 0; i < strs.length; i++) {
//     let k = 0;
//     for (let j = 0; j < strs[i].length; j++) {
//       if (strs[i].charAt(j) == strs[h].charAt(k)) {
//         arr.set(i, strs[i].charAt(j));
//       }

//       k = k + 1;
//     }
//     h = h - 1;
//   }
//   return arr;
// };
// console.log(longestCommonPrefix(strsi));
// console.log(strsi[0].charAt(1));

// let strsi = ["c", "acc", "acc"];

// let longestCommonPrefix = function (strs) {
//   let arr = [];
//   let i = 0;
//   let k = 0;
//   let temp = 0;
//   let ulang = true;
//   while (ulang) {
//     for (let j = 0; j < strs.length; j++) {
//       temp = strs[0].charAt(i);
//       let isValid = strs[j].includes(temp, i);
//       console.log(temp);
//       // console.log(isValid);
//       console.log(strs[1].includes(temp, 0, 0));
//       // console.log(strs[2].includes("a", 0));
//       if (isValid) {
//         arr[i] = temp;
//       } else {
//         arr.pop();
//         return arr.join("");
//       }
//     }
//     i++;
//     k++;
//     if (k > strs[0].length) {
//       ulang = false;
//     }
//   }
//   return arr.join("");
// };
// console.log(longestCommonPrefix(strsi));
//  if ((strs[j].includes(temp), i)) {
//    arr[i] = temp;
//    console.table(arr);
//  }

let strsi = ["c", "acc", "ccc"];

let longestCommonPrefix = function (strs) {
  let arr = [];
  let i = 0;
  let k = 0;
  let temp = 0;
  let temp1 = 0;
  let ulang = true;
  while (ulang) {
    for (let j = 0; j < strs.length; j++) {
      temp = strs[0].charAt(i);
      temp1 = strs[j].charAt(i);
      if (temp == temp1) {
        arr[i] = temp;
      } else {
        arr.pop();
        return arr.join("");
      }
    }
    i++;
    k++;
    if (k > strs[0].length) {
      ulang = false;
    }
  }
  return arr.join("");
};
console.log(longestCommonPrefix(strsi));
