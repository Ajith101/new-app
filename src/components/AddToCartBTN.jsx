import React, { useContext } from "react";
import { CartStateContext, DispatchContext } from "../cart/CartManaging";

const AddToCartBTN = ({ item }) => {
  const dispatch = useContext(DispatchContext);
  const cartState = useContext(CartStateContext);
  let checkCartItemes = cartState.cartItemes.filter(
    (items) => items.id === item.id
  );
  return (
    <>
      <button
        onClick={() =>
          dispatch({
            type: "add-to-cart",
            payload: {
              title: item.title,
              img: item.thumbnail,
              qty: 1,
              price: item.price,
              brand: item.brand,
              category: item.category,
              id: item.id,
            },
          })
        }
        className={`bg-green-400 border-[2px] border-yellow-500 rounded-full px-2 py-1 text-white text-xl text-center`}
      >
        Add to cart
      </button>
    </>
  );
};

export default AddToCartBTN;
