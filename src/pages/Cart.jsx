import React, { useContext } from "react";
import { useCart } from "react-use-cart";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";

const Cart = () => {
  const { totalItems } = useCart();
  return (
    <>
      <AllItems />
      <div>Total items in cart: {totalItems}</div>
    </>
  );
};

const AllItems = () => {
  const { items, emptyCart, isEmpty, updateItemQuantity, removeItem } = useCart();
  console.log(items);

  if (isEmpty) {
    return (
      <div className="text-2xl font-black text-center text-slate-400 min-h-[300px] flex items-center justify-center">
        Cart is empty
      </div>
    );
  }

  return (
    <div className="min-h-[300px]">
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between px-4 py-4 bg-slate-200 rounded-sm"
          >
            <div className="flex justify-center gap-2 items-center">
              <img src={item.image} className="w-8 h-8" />
              <p className="text-md font-bold">{item.title}</p>
            </div>
            <div className="flex items-center justify-center gap-6">
              <p className="text-sm font-bold">${item.price}</p>
              <div className="flex gap-1 items-center justify-center">
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  className="text-sm bg-slate-400 px-1"
                >
                  -
                </button>
                <p className="text-md">{item.quantity}</p>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  className="text-sm bg-slate-400 px-1"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="bg-slate-800 text-white rounded-full w-15 h-15 p-3 hover:bg-red-400 hover:text-slate-900 transition"
              >
                <FaRegTrashAlt className="text-md" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col mt-[2rem] gap-3">
        <Link
          to={"/"}
          className="w-full border-4 border-slate-900 max-w-xs mx-auto px-4 py-3 bg-slate-100 hover:bg-slate-900 transition ease-out text-slate-900 hover:text-white rounded-sm flex font-bold gap-2 items-center justify-center"
        >
          <BsArrowLeft className="text-lg" />
          Continue Shopping
        </Link>
        <Link
          to={"/checkout"}
          className="w-full border-4 border-slate-900 max-w-xs mx-auto px-4 py-3 bg-slate-100 hover:bg-slate-900 transition ease-out text-slate-900 hover:text-white rounded-sm flex font-bold gap-2 items-center justify-center"
        >
          Proceed to Checkout
          <BsArrowRight className="text-lg" />
        </Link>
      </div>
    </div>
  );
};



export default Cart;
