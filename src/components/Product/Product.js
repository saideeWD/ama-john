import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Reating from "../Reting/Reating";

const Product = (props) => {
  // console.log(props);
  const {key, thumbnail, description, title, category, stock, brand, price,  } =
    props.product;

  return (
    <div className="product">
      <div>
        <img className="product-img" src={thumbnail} alt="" />
      </div>
      <div>
        <h4 className="product-name">
          <Link to={"/product/" +key}>{description}</Link>
        </h4>

        <br />
        <div className="category-btn">
          <p>category : {category}</p>
          <p>Brand : {brand}</p>
          <p>Category : {category}</p>
          <p>
            <small>By : {title}</small>
          </p>
          <p>
            <small>Only Stock : {stock}</small>
          </p>
          <small>
          
            <Reating></Reating>
          </small>
          <h3>${price}</h3>

          {props.showAddToCart && (
            <button
              className="main-btn "
              onClick={() => props.handleAddProduct(props.product)}
            >
          
              <FontAwesomeIcon icon={faShoppingCart} /> add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
