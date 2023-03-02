import React, { useContext } from "react";
import { AllItemes, AllitemesContext } from "../../AllItemesContext/AllItemes";
import { CartStateContext } from "../../cart/CartManaging";
import ProductCard from "../ProductCard";

const FirstMenuSection = () => {
  const Allitems = useContext(AllitemesContext);
  const CartSates = useContext(CartStateContext);

  const menus = Allitems;
  let leng = menus.length;
  let randomItemes = [];

  if (menus.length > 0) {
    for (let i = 0; i < 4; i++) {
      let randomIndex = Math.floor(Math.random() * leng);
      let randomItem = menus[randomIndex];
      randomItemes.push(randomItem);
    }
  }
  let displayRAndomItemes = randomItemes.map((item, id) => {
    return <ProductCard key={id} item={item} />;
  });
  let DisplayProducts = Allitems.map((item, id) => {
    if (id < 4) {
      return <ProductCard key={id} item={item} />;
    }
  });

  return (
    <section className="px-40 bg-[#2144b724]">
      <div className="">
        <h1>Special menus</h1>
      </div>
      <div className="grid grid-cols-4 gap-5">{displayRAndomItemes}</div>
    </section>
  );
};

export default FirstMenuSection;
