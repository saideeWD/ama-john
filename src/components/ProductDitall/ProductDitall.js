import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Product from "./../Product/Product";

const ProductDitall = () => {
    const { productkey } = useParams();
    const [product, setProduct] = useState({})
  useEffect(() => {
fetch('http://localhost:5000/product/' + productkey)
.then(res => res.json())
.then(data =>setProduct(data))

  }, [productkey]);

//   const product = fakeData.find((pd) => pd.key === productkey);

  return (
    <div>
      <br />
      <Product showAddToCart={false} product={product}></Product>
    </div>
  );
};

export default ProductDitall;
