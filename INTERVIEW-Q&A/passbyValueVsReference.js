// Pass by value
let a = 10;
function changeValue(a){
    a=a+100;
    console.log('Inside a = ',a)
}
changeValue(a)
console.log('Outside a = ',a)




console.log('------------');




// Pass by Reference
let obj={count:10}
console.log('Outside obj before = ',obj)
function changeObject(obj){
    obj.count=obj.count+100
   console.log('Inside obj = ',obj.count)
}
changeObject(obj)
console.log('Outside obj after = ',obj)