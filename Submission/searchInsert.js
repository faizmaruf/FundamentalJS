let arr = [1, 3, 5, 6]
let target = 5;

const searchInsert = (nums, target) => {
    // for (let i = 0; i < nums.length; i++) {
    //     target == nums[i] ? nums.splice(i, 0, target) : null;
    // }
    // return nums;
    // return nums.splice(0, 5, 8) 

    return nums.map((num) => {
        return num < target
    })
}

// console.log(searchInsert(arr, target))
console.log(arr)
// let arr2 = arr.toString();
console.log(arr.splice(arr.indexOf(3), 1))