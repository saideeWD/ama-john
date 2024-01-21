import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    // console.log(props);
    const {description,brand,quantity,category,key} =props.product;
    console.log(props.product.quantity)
    return (
        <div className='review-item'>
            <h4 className='product-name'>{description}</h4>
            <p> brand: {brand}</p>
            <p>category : {category}</p>
            <p>{}</p>
            <h5>Quantity : {quantity}</h5>
            <br />
            <button 
            className='main-btn' onClick={()=>props.removeProduct(key)}>
             Remove</button>
        </div>
    );
};

export default ReviewItem;