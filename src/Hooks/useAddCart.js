import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { wishListContext } from "../Contexts/wishListContext";
import { toast } from "react-toastify";

const useAddCart = (item) => {
  const [cartList, setCartList] = useContext(CartContext);

  const addTowCard = () => {
    const exist = cartList.find((wishItem) => wishItem?.id === item.id);

    if (!exist) {
      setCartList([
        ...cartList,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          text: item.text,
          img: item.img,
          img2: item.img2,
        },
      ]);
      toast.success(" Successfully Added in Cartlist");
    } else if (exist) {
      toast.error("Already Added in Cartlist");
    }
  };

  return { addTowCard };
};

export default useAddCart;
