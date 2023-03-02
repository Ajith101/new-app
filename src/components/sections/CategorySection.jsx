import React, { useContext, useState } from "react";
import { AllitemesContext } from "../../AllItemesContext/AllItemes";
import ProductCard from "../ProductCard";

const CategorySection = () => {
  const itemList = useContext(AllitemesContext);

  const categoryName = itemList.map((item) => {
    return item.category;
  });
  const filteredNames = categoryName.filter((item, id) => {
    return categoryName.indexOf(item) === id;
  });
  const [currentCategory, setCurrentCategory] = useState("laptops");
  let displayCatergoryNames = filteredNames.map((item, id) => {
    return (
      <button
        onClick={() => BTNclick(item)}
        key={id}
        className={`text-white px-2 py-1 text-center rounded-full text-xl ${
          item === currentCategory ? "bg-red-500" : "bg-yellow-500"
        }`}
      >
        {item}
      </button>
    );
  });
  const [filterderProducts, setFilteredProducts] = useState([]);

  // product list
  const displayProductLIst = filterderProducts.map((item, id) => {
    return <ProductCard key={id} item={item} />;
  });
  function BTNclick(any) {
    const filterProductByCategory = itemList.filter((item, id) => {
      if (item.category === any) {
        return item;
      }
    });
    setFilteredProducts(filterProductByCategory);
    setCurrentCategory(any);
  }

  let defaultList = itemList
    .filter((item) => {
      if (item.category === "laptops") {
        return item;
      }
    })
    .map((item, id) => {
      return <ProductCard item={item} key={id} />;
    });

  return (
    <section id="category" className="px-40 pt-12 bg-[#2144b724] pb-16">
      <div className="">
        <div className="bg-black flex flex-wrap rounded-md">
          <h1 className=" text-2xl p-2 text-white">CategorySection</h1>
        </div>
        <div className="flex my-5 justify-center items-center flex-wrap gap-5">
          {displayCatergoryNames}
        </div>
        <div className="grid grid-cols-5 gap-5">
          {displayProductLIst}
          {displayProductLIst.length === 0 ? defaultList : null}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
