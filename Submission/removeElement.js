let arr = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

const removeElement = (arr, val) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        arr[i] != val ? newArr.push(arr[i]) : null
    }
    return console.log(newArr);
}
removeElement(arr, val)