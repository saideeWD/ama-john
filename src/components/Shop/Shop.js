import React, { useEffect, useState } from 'react';
import '../Shop/Shop.css';
import'../Product/Product'
import Product from './../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart ,setCart] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(x =>x.json())
        .then(data => setProducts(data))



    },[])
    const handleAddProduct = (addProduct)=>{
        console.log(addProduct);
        const newCart = [...cart,addProduct];
        setCart(newCart)
       }
   
    return (
        <div className='shop-container'>
            <div className="product-container">
           
                {products.map(x =><Product 
                handleAddProduct ={handleAddProduct}
                product ={x}></Product>)}
          
        </div>
        <div className="cart-container">
            <Cart cart ={cart}></Cart>
        </div>
          </div>
    );
};

export default Shop;