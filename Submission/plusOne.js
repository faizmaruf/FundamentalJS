let arr = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
const plusOne = (arr) => {
    const myInt = (arr.toString().split(',').join('')) * 1;
    return myInt
    // return String(myInt).split("").map((num) => {
    //     return Number(num)
    // })
}
console.log(plusOne(arr))
