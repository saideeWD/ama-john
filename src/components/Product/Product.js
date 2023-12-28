import React from 'react';
import'./Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';





const Product = (props) => {
   const {image, description,title,category , price} = props.product ; 
   

    return (
        <div className='product'>
            <div>
                <img className='product-img' src={image} alt="" />
                

     </div>
        <div>
            <h4 className='product-name'>{description}</h4>
            <br />
            <div className="category-btn">
           
            <p><small>by : {title}</small></p>
            <h3>${price}</h3>
            <h5>Catagoty : {category}</h5>
            <p><small>Only Stock</small></p>
            <button className='main-btn ' onClick={()=>props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
            </div>
            
        </div>
    );
};

export default Product;