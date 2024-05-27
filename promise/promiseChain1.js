
const addToCart = () => {
    const cartPromise = new Promise ( (resolve,reject) => {
        // let cart = [];
        let cart = ["Fruits","Veggies","Chicken","Cakes","Sweets"]
        if(cart.length > 0){
            let cartLength = cart.length
            console.log("Products added")
            resolve(cartLength)
        } else if(cart.length == 0){
            reject("Cart is Empty")
        }  
    })
    return cartPromise
}


const paymentInfo = (cartLen) =>{
   const billPromise = new Promise ( (resolve,reject) => {
       if(cartLen > 0){
        console.log("Total Price = Rs ",100*cartLen)
           resolve(100*cartLen)
       }else if(cartLen == 0){
           reject("Total Price = Rs 0")
       }
   })
   return billPromise
}

const orderPlaced = (price) => {
    const orderPromise = new Promise ( (resolve,reject) => {
        if(price > 0){
            resolve("Order Placed Successfully")
        }else if(price == 0){
            reject("No Order Placed")
        }
    })
    return orderPromise
}


addToCart()
.then((cartLen) => {
    return paymentInfo(cartLen)
})
.catch((err)=>{
    console.log(err)
})
.then((price) => {
    return orderPlaced(price)
})
.catch((err)=>{
    console.log(err)
})
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})
