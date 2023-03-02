import React, { useContext } from "react";
import { CartStateContext } from "../CartManaging";

const Pagination = ({ itemsPerPage, currentPage, setCurrentPAge }) => {
  const cartItemesNew = useContext(CartStateContext);

  let totalPages = [];
  for (
    let i = 1;
    i <= Math.ceil(cartItemesNew.cartItemes.length / itemsPerPage);
    i++
  ) {
    totalPages.push(i);
  }
  let DisplayPageNUmber = totalPages.map((item, id) => {
    return (
      <button
        onClick={() => setCurrentPAge(item)}
        className={`text-white p-2 text-center rounded-lg ${
          currentPage === item ? "bg-red-500" : "bg-teal-500"
        }`}
        key={id}
      >
        {item}
      </button>
    );
  });
  return <div className="flex gap-3">{DisplayPageNUmber}</div>;
};

export default Pagination;
