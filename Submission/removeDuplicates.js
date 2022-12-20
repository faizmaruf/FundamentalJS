let nums = [1,1,1,1,0,0,2,3,1,4]
let removeDuplicate = (nums) => {
    nums.sort();
    let newArr = [];
    let range = 0;
    for (let i = 0; i < nums.length; i++) {
        nums[i]!=nums[i+1] ? newArr.push(nums[i]) : null
    }
    
    return console.log(newArr);
}
console.log(nums)
removeDuplicate(nums);