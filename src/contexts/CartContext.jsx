import React, { useState, useEffect, createContext } from "react";

  export const CartContext = createContext({
    cart: [],
});

export const Provider = (props) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
