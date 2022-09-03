// cara 1

function maxRedigit(x) {
  let arr = [];
  if (Math.abs(x).toString().length == 3) {
    for (let i = 0; i < x.toString().length; i++) {
      arr.push(x.toString().charAt(i));
    }
    arr.sort();
    return parseInt(arr.reverse().join(""));
  } else {
    return null;
  }
}
console.log(maxRedigit(111));

// cara 2 menggunakan bubbleSort

// function maxRedigit(x) {
//   let temp;
//   let temp1 = x.toString().split("");
//   if (Math.abs(x).toString().length == 3) {
//     for (let i = 0; i < temp1.length; i++) {
//       for (let j = temp1.length - 1; j > i; j--) {
//         if (temp1[i] < temp1[j]) {
//           temp = temp1[i];
//           temp1[i] = temp1[j];
//           temp1[j] = temp;
//         }
//       }
//     }
//     return parseInt(temp1.join(""));
//   } else {
//     return null;
//   }
// }
// console.log(maxRedigit(100));
