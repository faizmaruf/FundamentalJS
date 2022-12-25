let nums = [1, 1, 1, 1, 0, 0, 2, 3, 1, 4]
let removeDuplicate = (nums) => {
    nums.sort();
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        nums[i] != nums[i + 1] ? newArr.push(nums[i]) : null
    }
    let oldArrLength = nums.length;
    let newArrLength = newArr.length;
    let trueLength = oldArrLength - newArrLength;
    for (let i = 0; i < trueLength; i++) {
        newArr.push('_')
    }

    return console.log(newArr);
}
console.log(nums)
removeDuplicate(nums);