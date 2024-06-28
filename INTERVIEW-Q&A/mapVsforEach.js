// map vs forEach

const nums=[1,2,3,4,5];
console.log('Original Array = ',nums);

const mapResult=nums.map((num)=>{
    return num*10
})
console.log('Map New Array = ',mapResult);

const forEachResult = nums.forEach((num,i)=>{
    nums[i]=num*100
})
console.log('Original Array after FOREACH = ',nums)
console.log('forEach result will always be = ',forEachResult) // undefined because forEach doesnot return anything