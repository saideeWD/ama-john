import React, { useEffect, useState } from "react";
import "../Shop/Shop.css";
import "../Product/Product";
import Product from "./../Product/Product";
import Cart from "../Cart/Cart";

import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Shop = () => {
  // const [products , setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // const frist30 = fakeData.slice(0, 30);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const savedCart = getShoppingCart();
    const productKeys = Object.keys(savedCart);
    console.log(products, productKeys);
    fetch('http://localhost:5000/productsByKeys',{
      method:'Post',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(productKeys)
    })
    .then(res=>res.json())
    .then(data => setCart(data))
  }, [products]);

  const handleAddProduct = (product) => {
    const toBeAddedKey = product.key;
    const sameProduct = cart.find((pd) => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== toBeAddedKey);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product.key, count);
  };
  return (
    <div className="twin-container">
      <div className="product-container">
        {products.map((pd) => (
          <Product
            showAddToCart={true}
            handleAddProduct={handleAddProduct}
            product={pd}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to={"/review"}>
            <button className="main-btn"> Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
