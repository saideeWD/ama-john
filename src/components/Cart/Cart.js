import React from 'react';

const Cart = (props) => {
    const cart = props.cart ;
    console.log(cart)
    // const total= cart.reduce((total , prd) => total + prd.price,0);
    let total = 0;
    for(let i = 0 ; i < cart.length; i++){
        const product = cart[i];
        total =total  + product.price;
    }
    let shipping = 0;
    if(total > 30){
        shipping = 0;
      }

       else if(total > 15){
          shipping = 3.99;
        }

        else if(total > 0){
           shipping = 4.99;
        }
        const tax = (total / 10).toFixed(2) ;
        const formatNumber = num=>{
            const precision = num.toFixed(2);
            return Number(precision)
        }
    return (
        <div>
         
            <h2>Order summary </h2>
            <h3>Itmes ordered : {cart.length}</h3>
            <h2> Product Price : {formatNumber(total)}</h2>
            <p>Shiipig Cost : {shipping}</p>
            <p><small>Tax + Vat :  {tax}</small></p>
            <h4>Total price : {total + shipping + tax }</h4>
            
        </div>
    );
};

export default Cart;