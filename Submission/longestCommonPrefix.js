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
