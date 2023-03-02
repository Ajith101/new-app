import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { AllitemesContext } from "../../AllItemesContext/AllItemes";
import AddComments from "../../cart/AddComments";
import { CartStateContext, DispatchContext } from "../../cart/CartManaging";
import NavBarOne from "../navbar/NavBarOne";

export const ItemDetails = () => {
  const dispatch = useContext(DispatchContext);
  const cartItemesList = useContext(CartStateContext);
  const allItemes = useContext(AllitemesContext);
  const params = useParams();
  const filteredItem = allItemes.filter((itemes) => {
    return itemes.id == params.id;
  });

  // input comment section
  const [showType, setShowType] = useState(false);

  // onChange Imgae
  const [image, setImage] = useState([]);
  const [id, setId] = useState("");

  let DisplayData = filteredItem.map((item, id) => {
    return (
      <div className="flex p-2 gap-3 text-xl overflow-hidden" key={id}>
        <div className="flex flex-col gap-5 w-[50%]">
          <div className="h-[500px] relative">
            <img
              src={image.length === 0 ? item.thumbnail : image}
              className="w-full rounded-2xl h-full object-cover"
              alt=""
            />
            <div className="absolute bottom-3 left-3 rounded-lg bg-orange-700 text-white px-2 py-1 text-center">
              <h2 className="text-sm">{item.category}</h2>
            </div>
          </div>
          <div className="flex gap-5 h-[100px]">
            {item.images.map((itemess, id) => {
              return (
                <div
                  key={id}
                  onClick={() => setImage(itemess)}
                  className="w-[25%] cursor-pointer"
                >
                  <img
                    className="w-full rounded-2xl h-full object-cover"
                    src={itemess}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[50%] flex flex-col gap-5 my-5">
          <h1 className="font-bold">{item.title}</h1>
          <h1>{item.brand}</h1>
          <h1>
            {"$ "}
            {item.price}
          </h1>
          <p className="text-sm">{item.description}</p>
          <h1>Discount Percentage : {item.discountPercentage}</h1>
          <h1>Ratings : {item.rating}</h1>
          <h2>Available stocks : {item.stock}</h2>
          <div className="">
            <button className="bg-yellow-500 text-white px-5 text-center text-xl py-1 rounded-xl">
              By Now
            </button>
            <button
              onClick={() => setShowType(!showType)}
              className="bg-green-500 text-white px-5 text-center text-xl py-1 rounded-xl"
            >
              {showType ? "close commets" : "add coments"}
            </button>
          </div>
        </div>
      </div>
    );
  });

  // adding comment
  // console.log(cartItemesList.commentItemes);
  let displayComments = cartItemesList.commentItemes.filter(
    (itemss) => itemss.id == params.id
  );
  let show = displayComments.map((list, id) => {
    return (
      <h1 key={id} className="text-xl">
        {" "}
        * {list.text}
      </h1>
    );
  });

  return (
    <>
      <NavBarOne />
      <div className="bg-[#2144b724] w-full px-40 py-10 h-full">
        <section className="bg-white rounded-3xl shadow-2xl">
          {DisplayData}
          {filteredItem.map((itemess, id) =>
            showType ? <AddComments key={id} item={itemess} /> : null
          )}
          <button onClick={() => dispatch({ type: "add_comment" })}></button>
          <div className="border=[1px] flex flex-col gap-3 border-red-500 px-10">
            {show.length !== 0 ? (
              <>
                <h1 className="text-xl font-bold">User Comments</h1> {show}
              </>
            ) : undefined}
          </div>
          <br />
        </section>
      </div>
    </>
  );
};
