import React, { useState, createContext, useEffect } from "react";

export const ShopContext = createContext();

export const ShopProvider = (props) => {
  const [shopData, setShopData] = useState([]);

  return (
    <ShopContext.Provider value={[shopData, setShopData]}>
      {props.children}
    </ShopContext.Provider>
  );
};
