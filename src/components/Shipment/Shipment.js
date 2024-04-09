import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import "./Shipment.css";
import { UserContaxt } from "../../App";
import { deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";

const Shipment = () => {
  const [loggedInUser, setloggedInUser] = useContext(UserContaxt);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const savedCart = getShoppingCart();
    const orderDetails = {
      ...loggedInUser,
      products: savedCart.products,
      shaipment: data,
      order: new Date(),
    };
    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res)
      .then((data) => {

        if (data) {
          deleteShoppingCart()
          alert(" your order placed Successfully ");
        }
      });
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="ship-from" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}

      <input
        defaultValue={loggedInUser.name}
        placeholder=" Your name"
        {...register("name", { required: true })}
      />
      {errors.name && (
        <span className="error">This name field is required</span>
      )}
      <input
        defaultValue={loggedInUser.email}
        placeholder="Your email"
        {...register("email", { required: true })}
      />
      {errors.email && (
        <span className="error">This email field is required</span>
      )}
      <input
        placeholder="Your Address"
        {...register("address", { required: true })}
      />
      {errors.address && (
        <span className="error">This address field is required</span>
      )}
      <input
        placeholder=" Your Phone number "
        {...register("phone", { required: true })}
      />
      {errors.phone && (
        <span className="error">This Phone number field is required</span>
      )}
      <input
        placeholder="Districts"
        {...register("districts", { required: true })}
      />
      {errors.districts && (
        <span className="error">This Districts field is required</span>
      )}

      <button onClick={() => onSubmit}>Submit</button>
    </form>
  );
};

export default Shipment;
