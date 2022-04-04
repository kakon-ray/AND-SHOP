import React, { useContext } from "react";
import { Button, FormControl, InputGroup, Offcanvas } from "react-bootstrap";
import { CartContext } from "../../../Contexts/CartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import OffCanvasCard from "../OffCanvasCard/OffCanvasCard";

const CartShow = ({ onHideCart, placement, showCart }) => {
  const [cartList, setCartList] = useContext(CartContext);

  const removeItem = (id) => {
    const removeThenCartItem = cartList.filter(
      (listItem) => listItem?.item?.id !== id
    );
    setCartList(removeThenCartItem);
    // console.log(removeThenCartItem);
  };
  return (
    <Offcanvas show={showCart} onHide={onHideCart} placement={placement}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="text-center mx-auto">
          AND SHOP
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartList.map((item) =>
          item.item ? (
            <OffCanvasCard
              item={item}
              removeItem={removeItem}
              key={item.item.id}
            />
          ) : (
            ""
          )
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartShow;
