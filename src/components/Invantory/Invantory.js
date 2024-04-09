import React from "react";
import { fakeData } from "./../Data/fakedata";

const Invantory = () => {
  const product = {};
  const handleAddProduct = async () => {
    await fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  };
  return (
    <div>
      <from action="">
        <p><span>Nmae : </span><input type="text" /></p>
        <p><span> price :</span><input type="text" /></p>
        <p><span>Quantity :</span><input type="text" /></p>
        <p><span>Product Images :</span><input type="file" /></p>
        <button onClick={handleAddProduct}>add Product</button>
      </from>
    </div>
  );
};

export default Invantory;
