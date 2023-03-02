import React from "react";
import { NavLink } from "react-router-dom";
import SmallCart from "../../cart/SmallCart";
import { Link } from "react-scroll";

const Navnar = ({ children }) => {
  return (
    <>
      <div className="bg-[#2c4242] flex justify-between items-center text-white w-full px-32 py-3">
        <div className="bg-[#857800ed] text-white border-white border-[5px] text-center p-2 rounded-full ">
          <h2 className="text-2xl">
            Shopping <br />
            App
          </h2>
        </div>
        <div className="">
          <ul className="flex gap-4 justify-center items-center text-xl">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? undefined : undefined)}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <Link
                to="category"
                activeClass="underline"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="transition-all hover:cursor-pointer"
              >
                Category
              </Link>
            </li>
            <li>
              <NavLink
                to="cart"
                className={({ isActive }) => (isActive ? undefined : undefined)}
                end
              >
                Cart
              </NavLink>
            </li>
          </ul>
          <SmallCart />
        </div>
      </div>
      {children}
    </>
  );
};

export default Navnar;
