let arr = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
let arr2 = [1, 2, 3];
const convertToInt = (arr) => {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        temp += (arr[i] * (Math.pow(10, arr.length - 1 - i)));
    }
    return temp;
}
const plusOne = (arr) => {
    const myInt = (arr.toString().split(',').join('')) * 1;
    // convert array to int with looping

    return myInt
    // return String(myInt).split("").map((num) => {
    //     return Number(num)
    // })
}
// console.log(plusOne(arr))
console.log(convertToInt(arr));
