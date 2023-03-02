import React from "react";
import { AllItemes } from "./AllItemesContext/AllItemes";
import MainPage from "./MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./cart/Cart";
import { CartManaging } from "./cart/CartManaging";
import Category from "./components/pages/Category";
import { ItemDetails } from "./components/itemesDetails/ItemDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "category",
    element: <Category />,
  },
  {
    path: "itemdetails/:id",
    element: <ItemDetails />,
  },
]);

const App = () => {
  return (
    <>
      <AllItemes>
        <CartManaging>
          <RouterProvider router={router} />
        </CartManaging>
      </AllItemes>
    </>
  );
};

export default App;
