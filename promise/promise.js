const addToCart = new Promise( function(resolve,reject){
    // let cart = ["fruits","veggies","chicken"];
    let cart = [];
    if(cart.length === 0){
        reject("Cart is Empty.. Add some Products..")
    }else if(cart.length > 0){
        resolve("Products added to Cart")
    }
})
console.log(addToCart)
addToCart
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})