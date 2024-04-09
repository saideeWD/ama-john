import React from 'react';
import './Cart.css'


const Cart = (props) => {
    console.log(props.cart)
    const cart = props.cart ;
    // const total = cart.reduce((sum , product)=>sum+ product.price);

    // const total= cart.reduce((total , prd) => total + prd.price,0);
    let total = 0;
    for(let i = 0 ; i < cart.length; i++){
        const product = cart[i];
        total =total  + product.price * product.quantity || 1;
       
    }

    let result = 0;

    for(let i = 0 ; i<cart.length; i++){
        const discount = cart[i];
       result = result + discount.discountPercentage;
    }

    let shipping = 0;
    if(total > 30){
        shipping = 0;
      }

       else if(total > 15){
          shipping = 3.99;
        }

        else if(total > 0){
           shipping = 2.99;
        }
        const tax = (total/100);

        const formatNumber = num=>{
            const precision = num.toFixed(2);
            return Number(precision)
        }
    return (
        <div className='cart-shop'>
         
            <h4 className='text-primary'>Order summary </h4>
            <p>Itmes ordered : {cart.length}</p>
            <p> Product Price : {formatNumber(total)}</p>
            <p>Shiipig Cost : {shipping}</p>
            <p><small>Tax + Vat :  {tax}</small></p>
            <h5>Total price : {total + shipping + tax  }</h5>
            <br />
            {
                props.children
            }
            
            
        </div> 
    );
};

export default Cart;