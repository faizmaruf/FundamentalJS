let a='9875';
let b=4;


function superDigit(n, k){
    let  numberArray=0;
    let temp='';
    n.toString();
    for (let i = 0; i < k; i++) {
        temp += n;
    }
    numberArray = temp.split('').map(Number).reduce((prev, cur)=>prev+cur);
    if(numberArray<10){
        return console.log(numberArray.toString())
    }else{
        return superDigit(numberArray,1);
    }
}
superDigit(a, b)
function superDigit(n, k){
    const nums = n.split("").map(num => parseInt(num));
    if(nums.length === 1) 
    {
        return nums[0]
    }
    
    const sum = nums.reduce((a,b) => a + b) * k;
    return superDigit(sum.toString(), 1);
}
superDigit(a, b)