import React, { useState, createContext, useEffect } from "react";

export const ShopContext = createContext();

export const ShopProvider = (props) => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    fetch("shop.json")
      .then((response) => response.json())
      .then((data) => setShopData(data));
  }, []);

  return (
    <ShopContext.Provider value={[shopData, setShopData]}>
      {props.children}
    </ShopContext.Provider>
  );
};
