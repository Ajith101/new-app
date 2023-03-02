import React, { useContext, useState } from "react";
import { CartStateContext, DispatchContext } from "./CartManaging";

const AddComments = ({ item }) => {
  const dispatch = useContext(DispatchContext);
  const cartSatets = useContext(CartStateContext);
  const [input, setInput] = useState("");
  const [allDatas, setAllDatas] = useState([]);
  function clickBTN() {
    setAllDatas([...allDatas, input]);
  }
  function sbtHandler(e) {
    e.preventDefault();
  }

  let checking = cartSatets.commentItemes.map((value) => value.item);
  // console.log(cartSatets.commentItemes);

  return (
    <div className="mx-5">
      <form onSubmit={sbtHandler}>
        <input
          className="border-[2px] border-red-600"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />{" "}
        <button
          onClick={() =>
            dispatch({
              type: "add_comment",
              payload: { id: item.id, text: input },
            })
          }
          className="bg-red-800 text-white text-center p-2 rounded-xl"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default AddComments;
