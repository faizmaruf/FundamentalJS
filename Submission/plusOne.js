let arr = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
let arr2 = [1, 2, 3];

const plusOne = (arr) => {
    const myInt = (BigInt(arr.toString().split(',').join(''))) + 1n;
    const result = [...`${myInt}`].map(Number);
    return result;

}
console.log(plusOne(arr2))
// console.log(convertToInt(arr2));
