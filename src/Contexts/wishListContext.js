import React, { useState, createContext, useEffect } from "react";

export const wishListContext = createContext();

export const WishListProvider = (props) => {
  const [wishList, setWishList] = useState([
    {
      id: "1",
      name: "Green Dress For Woman",
      price: "$38.00",
      img: "https://andshop-react.netlify.app/static/media/product9.60333e3e.png",
      img2: "https://andshop-react.netlify.app/static/media/product6.f19b14e6.png",
    },
  ]);

  return (
    <wishListContext.Provider value={[wishList, setWishList]}>
      {props.children}
    </wishListContext.Provider>
  );
};
