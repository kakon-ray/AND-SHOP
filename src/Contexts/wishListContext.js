import React, { useState, createContext, useEffect } from "react";

export const wishListContext = createContext();

export const WishListProvider = (props) => {
  const [wishList, setWishList] = useState([]);

  return (
    <wishListContext.Provider value={[wishList, setWishList]}>
      {props.children}
    </wishListContext.Provider>
  );
};
