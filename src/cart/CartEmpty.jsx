import React from "react";

const CartEmpty = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded-2xl p-20">
        <h1 className="text-2xl">Sorry Cart Is Empty Now !!!!!</h1>
      </div>
    </div>
  );
};

export default CartEmpty;
