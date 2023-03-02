import React, { createContext, useReducer } from "react";

const CartStateContext = createContext();
const DispatchContext = createContext();

const initialValue = {
  cartItemes: [],
  commentItemes: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add-to-cart":
      if (
        state.cartItemes.some((item) => item.title === action.payload.title)
      ) {
        return state;
      }
      return { ...state, cartItemes: [...state.cartItemes, action.payload] };

    case "qty_increase":
      return {
        ...state,
        cartItemes: state.cartItemes.map((item) =>
          item.title === action.payload.title
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      };
    case "decrese_qty":
      return {
        ...state,
        cartItemes: state.cartItemes.map((item) =>
          item.title === action.payload.title
            ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
            : item
        ),
      };
    case "remove_cart":
      return {
        ...state,
        cartItemes: state.cartItemes.filter(
          (item) => item.title !== action.payload.title
        ),
      };
    case "add_comment":
      return {
        ...state,
        commentItemes: [...state.commentItemes, action.payload],
      };
    case "submit_comment":
      return { ...state, commentItemes: [state.commentItemes, "hello"] };
    default:
      return state;
  }
};

const CartManaging = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <CartStateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export { CartManaging, CartStateContext, DispatchContext };
