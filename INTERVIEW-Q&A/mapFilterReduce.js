// MAP    : array.map(()=>{ return .... })
// FILTER : array.filter(()=>{ return .... })
// REDUCE : array.reduce((accumulator,currentValue)=>{ return ....},initialValue)

const nums=[10,20,30,40]

// map
const result = nums.map((num)=>{
    return num=num*10
})
console.log(result)


// filter
const fourMultiples = nums.filter((num)=>{
    return num % 4 === 0
})
console.log(fourMultiples)


// reduce
const sum = nums.reduce((acc,curr)=>{
    return acc=acc+curr
},0)
console.log(sum)

