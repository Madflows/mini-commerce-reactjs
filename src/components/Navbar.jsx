import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { MdOutlineSettingsSuggest, MdShoppingCart } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";

import { useCart } from "react-use-cart";

const Navbar = () => {
  const { totalItems } = useCart();
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = [
    {
      icon: MdOutlineSettingsSuggest,
      text: "Settings",
      link: "/settings",
      itemCount: null,
    },
    {
      icon: MdShoppingCart,
      text: "Cart",
      link: "/cart",
      itemCount: totalItems,
    },
  ];
  return (
    <nav className="bg-yellow-300 shadow-md fixed top-0 w-full z-20">
      <div className="px-4 lg:px-0 py-4 max-w-[950px] mx-auto flex w-full items-center text-white justify-between">
      <Link
        to={"/"}
        className="flex items-center justify-center gap-1 text-white bg-slate-800 rounded-sm px-2 py-2 max-w-[100px]"
      >
        <FaFire />
        <p className="text-md">Market</p>
      </Link>

      <div className="gap-8 items-center justify-center hidden md:flex">
        {menuItems.map((item, index) => (
          <div key={index}>{menuItem(item)}</div>
        ))}
      </div>

      <div className="flex md:hidden">
        <CgMenuGridO
          onClick={() => setShowMenu(!showMenu)}
          className="text-3xl text-slate-900 cursor-pointer"
        />
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } absolute top-[4rem] left-[50%] z-20 w-[280px] -translate-x-[50%] bg-slate-100 shadow-md py-2 rounded-md flex flex-col justify-start items-start`}
        >
          {menuItems.map((item, index) => (
            <Link
              to={item.link}
              onClick={() => setShowMenu(false)}
              key={index}
              className="px-6 py-2"
            >
              <div className="flex items-center justify-start gap-2">
                <item.icon className="text-xl" />
                <p className="text-slate-800 font-bold">{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </nav>
  );
};

const menuItem = (item) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link
      to={item.link}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative"
    >
      {item.itemCount ? (
        <>
          <item.icon className="text-2xl text-slate-700 relative" />
          <span className="absolute -right-[0.2em] -top-[1.1rem] border-3 border-white text-xs px-1.5 py-0.5 text-white bg-slate-700 rounded-full">{item.itemCount}</span>
        </>
      ) : (
        <item.icon className="text-2xl text-slate-700 " />
      )}
      <p
        className={`text-xs ${
          isHover ? "opacity-1" : "opacity-0"
        } ease-in pointer-events-none transition absolute -bottom-8 left-[50%] translate-x-[-50%] text-slate-50 bg-slate-800 rounded-sm py-1 px-3`}
      >
        {item.text}
      </p>
    </Link>
  );
};

export default Navbar;
