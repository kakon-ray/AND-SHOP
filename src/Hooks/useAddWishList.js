import React, { useContext } from "react";
import { wishListContext } from "../Contexts/wishListContext";
import { toast } from "react-toastify";

const useAddWishList = (item, productDetailsitem) => {
  const [wishList, setWishList] = useContext(wishListContext);
  const addTowishList = () => {
    const exist = wishList.find(
      (wishItem) => wishItem.item?.id === productDetailsitem[0].id
    );
    if (!exist) {
      setWishList([...wishList, { item }]);
      toast.success(" Successfully Added in Wishlist");
    } else if (exist) {
      toast.error("Already Added in Wishlist");
    }
  };
  return { addTowishList };
};

export default useAddWishList;
