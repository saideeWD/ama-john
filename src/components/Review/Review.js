import React, { useEffect, useState } from "react";
import { deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import { fakeData } from "../Data/fakedata";
import ReviewItem from "./../ReviewItem/ReviewItem";
import Cart from './../Cart/Cart';
import happyImage from '../../images/giphy.gif'



const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
      setCart([]);
      setOrderPlaced(true);
     deleteShoppingCart();
  }

  
  const removeProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    deleteShoppingCart(productKey);
  };

  useEffect(() => {
    // cart

    const savedCart = getShoppingCart();
    const productKeys = Object.keys(savedCart);

    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  let thankyou;
    if(orderPlaced){
        thankyou = <img src={happyImage} alt=""/>
    } 
  return (
    <div className="twin-container">
     <div className="product-container">
     {cart.map((pd) => (
        <ReviewItem
          removeProduct={removeProduct}
          key={pd.key}
          product={pd}
        ></ReviewItem>
      ))}

{ thankyou }
     </div>
     <div className="cart-shop">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder}  className="main-btn">Place Order</button>
        </Cart>
     </div>
    
    </div>
  );
};

export default Review;
