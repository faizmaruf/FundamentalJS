//  Valid Parentheses
// let isValid = function (s) {};
// console.log("d");
// let listNumber = [1, 6, 9, 2, 5, 7, 8, 9];
// function getBiggest(listNumb) {
//   let arr = [];
//   let temp = 0;
//   for (let i = 0; i < listNumb.length; i++) {
//     for (let j = listNumb.length - 1; j > i; j--) {
//       if (listNumb[i] < listNumb[j]) {
//         temp = listNumb[i];
//         listNumb[i] = listNumb[j];
//         listNumb[j] = temp;
//       }
//     }
//   }
//   let ulang = true;
//   let i = 0;
//   let k = 1;
//   while (ulang) {
//     if (listNumb[i] == listNumb[k]) {
//       k++;
//     } else {
//       ulang = false;
//     }
//   }
//   return console.log(listNumb[i] + listNumb[k]);
// }
// getBiggest(listNumber);

// function isPalindrome(x) {
//   let number = x.toString();

//   let isPalindrome = false;
//   let j = x.toString().length - 1;

//   for (let i = 0; i < x.toString().length; i++) {
//     if (number.charAt(i) == number.charAt(j)) {
//       isPalindrome = true;
//     } else {
//       return false;
//     }
//     j = j - 1;
//   }
//   return console.log(isPalindrome);
//   let k = number.includes("");
//   return console.log(k);
// }
// isPalindrome("katak");

// function validateBracketString(S) {
//   let validateBracket = false;
//   if ((S.includes("(") && S.includes(")")) || (S.includes("{") && S.includes("}")) || (S.includes("[") && S.includes("]"))) {
//     let j = S.length - 1;
//     const bracket = new Map(["", 500], ["bananas", 300], ["oranges", 200]);
//     console.log(j);
//     for (let i = 0; i < S.length; i++) {
//       console.log(S.charAt(i));
//       console.log(S.charAt(j));
//       if (S.charAt(i) == S.charAt(j)) {
//         validateBracket = true;
//       } else
//         return console.log(validateBracket);
//       }
//       j = j - 1;
//     }
//   } else {
//     return console.log("s");
//   }
//   return console.log(validateBracket);
// }
// validateBracketString("[]");

// function getByValue(map, searchValue) {
//   for (let [key, value] of map.entries()) {
//     if (value === searchValue) return key;
//   }
// }

// let bracket = new Map();
// bracket.set("(", ")");
// bracket.set("{", "}");
// bracket.set("[", "]");

// console.log(getByValue(bracket, "}"));
// console.log(getByValue(bracket, "]"));
// 1

let isValid = function (S) {
  let validateBracket = false;
  if ((S.includes("(") && S.includes(")")) || (S.includes("{") && S.includes("}")) || (S.includes("[") && S.includes("]"))) {
    validateBracket = true;
  }
  return console.log(validateBracket);
};
isValid("()");
