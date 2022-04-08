import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartListProvider = (props) => {
  const [cartList, setCartList] = useState([]);

  return (
    <CartContext.Provider value={[cartList, setCartList]}>
      {props.children}
    </CartContext.Provider>
  );
};
