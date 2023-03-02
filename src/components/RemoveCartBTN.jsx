import React, { useContext } from "react";
import { CartStateContext, DispatchContext } from "../cart/CartManaging";

const RemoveCartBTN = ({ item }) => {
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
            type: "remove_cart",
            payload: item,
          })
        }
        className={`bg-red-600 border-[2px] border-yellow-500 rounded-full px-2 py-1 text-white text-xl text-center`}
      >
        Remove Cart
      </button>
    </>
  );
};

export default RemoveCartBTN;
