import React from 'react';
import { useParams } from 'react-router-dom';
import {fakeData} from '../Data/fakedata'
import Product from './../Product/Product';

const ProductDitall = () => {
    const {productkey} = useParams();
    const product = fakeData.find(pd => pd.key === productkey);
    
    return (
        <div>
       <br />
            <Product showAddToCart ={false} product = {product}></Product>
    
        </div>
    );
};

export default ProductDitall;