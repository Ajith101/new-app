import React, { useContext } from "react";
import { CartStateContext } from "./CartManaging";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const SmallCart = () => {
  const CartState = useContext(CartStateContext);
  let length = CartState.cartItemes.length;
  return (
    <Link to="/cart">
      {" "}
      <div className="fixed top-6 right-6">
        {length > 0 ? (
          <div className="absolute p-1 text-center rounded-full text-sm font-semibold text-white bg-green-500 top-0 right-0">
            <h2 className="">{CartState.cartItemes.length}</h2>
          </div>
        ) : null}
        <div className="">
          <FaShoppingCart className="absolute top-4 right-4" size={"25px"} />
        </div>
      </div>
    </Link>
  );
};

export default SmallCart;
