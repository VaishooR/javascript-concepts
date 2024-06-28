// pure functions
function sum(a,b){
    console.log('Sum = ',a + b)
}
sum(5,3)
sum(5,3)
sum(5,3)



// impure funcions
let count=0;
function counter(){
    console.log('counter = ',count++)
}
counter()
counter()
counter()