import React, { useContext, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { CartStateContext, DispatchContext } from "./CartManaging";
import { MdOutlineRemoveCircle } from "react-icons/md";
import NavBarOne from "../components/navbar/NavBarOne";
import { useNavigate } from "react-router";
import Pagination from "./Pagination/Pagination";
import CartEmpty from "./CartEmpty";

const Cart = () => {
  const navigate = useNavigate();
  const CartSatate = useContext(CartStateContext);
  const dispatch = useContext(DispatchContext);

  // pagination
  let itemsPerPage = 4;
  const [currentPage, setCurrentPAge] = useState(1);
  const lastIndexOfpage = currentPage * itemsPerPage;
  const firstIndexOfpage = lastIndexOfpage - itemsPerPage;

  const slicedItemes = CartSatate.cartItemes.slice(
    firstIndexOfpage,
    lastIndexOfpage
  );
  let cartDisplay = slicedItemes.map((item, id) => {
    return (
      <div
        key={id}
        className="flex justify-between gap-3 w-[50%] shadow-2xl bg-white rounded-md p-2"
      >
        <div
          onClick={() => navigate(`/itemdetails/${item.id}`)}
          className="w-[150px] h-[150px] cursor-pointer"
        >
          <img src={item.img} className="w-full h-full object-cover" alt="" />
        </div>
        <div
          onClick={() => navigate(`/itemdetails/${item.id}`)}
          className="w-[250px] cursor-pointer"
        >
          <h1>{item.title}</h1>
        </div>
        <div className="min-w-[100px]">
          <h2>
            {"$ "}
            {item.price}
          </h2>
        </div>
        <div className="flex gap-3 w-[100px] mx-5 justify-between">
          <div>
            <button
              onClick={() => dispatch({ type: "decrese_qty", payload: item })}
              className="bg-red-500 rounded-2xl text-white p-1 text-center"
            >
              -
            </button>
          </div>
          <h1>{item.qty}</h1>
          <div>
            <button
              onClick={() => dispatch({ type: "qty_increase", payload: item })}
              className="bg-red-500 rounded-2xl text-white p-1 text-center"
            >
              +
            </button>
          </div>
        </div>
        <div className="">
          <MdOutlineRemoveCircle
            size={"32px"}
            onClick={() => dispatch({ type: "remove_cart", payload: item })}
            className="hover:text-green-500"
          >
            REmove
          </MdOutlineRemoveCircle>
        </div>
      </div>
    );
  });
  // total quantuty
  const TotalQuantity = CartSatate.cartItemes.map((item) => {
    return item.qty;
  });
  let displayTotalQuantity = [];
  if (TotalQuantity.length) {
    let sum = TotalQuantity.reduce((a, b) => {
      return a + b;
    });
    displayTotalQuantity.push(sum);
    // console.log(sum);
  }

  // total number of products
  let numbersOfproduct = CartSatate.cartItemes.length;

  // total Amount of iteme
  const TotalAmount = CartSatate.cartItemes.map((item) => {
    // return item.price;
    return item.qty * item.price;
  });
  let displayAmount = [];
  if (TotalAmount.length) {
    let totalAmountDisplay = TotalAmount.reduce((a, b) => {
      return a + b;
    });
    displayAmount.push(totalAmountDisplay);
  }

  return (
    <>
      <NavBarOne />

      <section className="px-40 bg-[#2144b724] flex h-screen py-10 gap-10 flex-col">
        <div className="bg-white p-10 rounded-lg">
          <div className="flex mr-5 gap-6 justify-between items-center">
            <h2 className="text-2xl font-semibold">Shopping Cart</h2>
            <br />
            <h3>{numbersOfproduct} Itemes</h3>
          </div>
          <div className="w-full border-[1px]"></div>
          {TotalQuantity.length !== 0 ? (
            <div className="">
              <h1 className="text-xl">
                Total Quantity :{" "}
                <span className="font-semibold">{displayTotalQuantity}</span>
              </h1>
              <h2 className="text-xl">
                Total Amount :{" "}
                <span className="font-semibold">
                  {"$ "} {displayAmount}
                </span>
              </h2>
            </div>
          ) : undefined}
          <div className="flex flex-col gap-5 text-xl">{cartDisplay}</div>
          <Pagination
            currentPage={currentPage}
            setCurrentPAge={setCurrentPAge}
            itemsPerPage={itemsPerPage}
          />
          {CartSatate.cartItemes.length === 0 ? <CartEmpty /> : null}
        </div>
      </section>
    </>
  );
};

export default Cart;
