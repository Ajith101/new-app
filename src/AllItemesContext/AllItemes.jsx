import React, { createContext, useEffect, useState } from "react";

const AllitemesContext = createContext();

const AllItemes = ({ children }) => {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getAlldata() {
    setLoading(true);
    fetch("https://dummyjson.com/products?&limit=100")
      .then((Response) => Response.json())
      .then((datas) => setItemList(datas.products));
    setLoading(false);
  }
  useEffect(() => {
    getAlldata();
  }, []);
  return (
    <AllitemesContext.Provider value={itemList}>
      {!loading ? (
        children
      ) : (
        <div className="fixed top-[50%] bg-green-500 text-white">Loading</div>
      )}
    </AllitemesContext.Provider>
  );
};

export { AllItemes, AllitemesContext };
