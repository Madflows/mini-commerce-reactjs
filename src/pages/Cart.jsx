import React, { useContext } from "react";
import { useCart } from "react-use-cart";

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
  const { items, emptyCart, isEmpty } = useCart();
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
            <div className="flex items-center">
              <img src={item.image} className="w-8 h-8" />
              <p className="text-sm">{item.title}</p>
            </div>
            <div className="flex items-center">
              <p className="text-sm">{item.price}</p>
              <button className="text-sm">-</button>
              <p className="text-sm">{item.quantity}</p>
              <button className="text-sm">+</button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={emptyCart}
        className="w-full max-w-xs my-[1rem] mx-auto px-4 py-3 bg-slate-800 hover:bg-slate-900 transition hover:-translate-y-1 ease-out text-white rounded-sm"
      >
        Empty cart
      </button>
    </div>
  );
};

const ItemCard = (item) => {
  return (
    <div className="flex items-center justify-between px-4 py-4 bg-slate-200 rounded-sm">
      <div className="flex items-center">
        <img src={item.image} className="w-8 h-8" />
        <p className="text-sm">{item.title}</p>
      </div>
      <div className="flex items-center">
        <p className="text-sm">{item.price}</p>
        <button className="text-sm">-</button>
        <p className="text-sm">{item.quantity}</p>
        <button className="text-sm">+</button>
      </div>
    </div>
  );
};

export default Cart;
