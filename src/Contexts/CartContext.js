import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartListProvider = (props) => {
  const [cartList, setCartList] = useState([
    {
      id: "1",
      name: "Green Dress For Woman",
      price: "$38.00",
      img: "https://andshop-react.netlify.app/static/media/product9.60333e3e.png",
      img2: "https://andshop-react.netlify.app/static/media/product6.f19b14e6.png",
    },
  ]);

  return (
    <CartContext.Provider value={[cartList, setCartList]}>
      {props.children}
    </CartContext.Provider>
  );
};
