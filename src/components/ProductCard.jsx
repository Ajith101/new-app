import React, { useContext } from "react";
import { FcLike } from "react-icons/fc";
import { BsFillCaretRightFill } from "react-icons/bs";
import { CartStateContext, DispatchContext } from "../cart/CartManaging";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ItemDetails } from "./itemesDetails/ItemDetails";
import AddToCartBTN from "./AddToCartBTN";
import RemoveCartBTN from "./RemoveCartBTN";

const ProductCard = ({ item }) => {
  const dispatch = useContext(DispatchContext);
  const cartState = useContext(CartStateContext);

  // console.log(cartState.cartItemes);

  const navigate = useNavigate();

  let checkCartItemes = cartState.cartItemes.filter(
    (items) => items.id === item.id
  );

  return (
    <div className="flex justify-between bg-white shadow-2xl rounded-xl flex-col gap-3 p-2">
      <div
        onClick={() => navigate(`/itemdetails/${item.id}`)}
        className="h-[350px] rounded-xl overflow-hidden relative"
      >
        <img
          className="w-full h-full object-cover"
          src={item.thumbnail}
          alt=""
        />
        <button className="bg-red-500 absolute bottom-3 text-xs left-3 text-white rounded-xl px-2 py-1 text-center">
          {item.category}
        </button>
      </div>
      <div className="font-semibold text-xl">
        <h1>{item.title}</h1>
        <h1>{item.brand}</h1>
      </div>
      <h3>
        {"$"} {item.price}
      </h3>
      <span className="w-[95%] border-[.5px]"></span>
      <div className="flex justify-between items-center">
        <FcLike size={"25px"} />
        {checkCartItemes.map((itemess, id) =>
          itemess.id === item.id ? (
            <RemoveCartBTN key={id} item={item} />
          ) : undefined
        )}
        {checkCartItemes.length === 0 ? (
          <AddToCartBTN item={item} />
        ) : undefined}
        <BsFillCaretRightFill
          onClick={() => navigate(`/itemdetails/${item.id}`)}
          size={"25px"}
        />
      </div>
    </div>
  );
};

export default ProductCard;
