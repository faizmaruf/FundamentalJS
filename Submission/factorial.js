// with recursive function
const factorial = (n) => {
    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }

}

//with for
// const factorial = (n) => {
//     let temp = 1;
//     for (let i = 1; i <= n; i++) {
//         temp = temp * i;
//     }
//     return temp;
// }
console.log(factorial(4))