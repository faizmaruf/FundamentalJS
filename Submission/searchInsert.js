let arr = [1, 3, 5, 6]
let target = 5;

function insertAt(array, index, ...elementsArray) {
    array.splice(index, 0, ...elementsArray);
}

// const searchInsert = (nums, target, callback) => {
//     let arr = [];
//     if (nums.includes(target)) {
//         arr = callback(nums, nums.indexOf(target), target);
//     }
//     return arr;
// }
function searchInsert(nums, target, callback) {
    let arr = [];
    if (nums.includes(target)) {
        arr = callback(nums, nums.indexOf(target), target);
    }
    return arr;
}
searchInsert(arr, target, insertAt)
console.log(arr)
// console.log(searchInsert(arr, target, insertAt))
// console.log(insertAt(arr, 1, 2, 3))
// console.log(arr)
// let arr2 = arr.toString();
// console.log(arr.splice(arr.indexOf(3), 1))