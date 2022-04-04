import React, { useContext } from "react";
import { Button, FormControl, InputGroup, Offcanvas } from "react-bootstrap";
import { CartContext } from "../../../Contexts/CartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartShow = ({ onHideCart, placement, showCart }) => {
  const [cartList, setCartList] = useContext(CartContext);

  const removeItem = (id) => {
    const removeThenCartItem = cartList.filter(
      (listItem) => listItem?.item?.id !== id
    );
    setCartList(removeThenCartItem);
    console.log(removeThenCartItem);
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
            <div className="d-flex gap-3 my-2 align-items-center justify-content-between">
              <div className="d-flex gap-3 my-2">
                <div>
                  <img
                    src={item.item.img}
                    alt=""
                    className="img-fluid"
                    style={{ width: "50px", height: "50px", border: "none" }}
                  />
                </div>
                <div>
                  <h6>{item.item.name}</h6>
                  <p>Price: {item.item.price}</p>
                </div>
              </div>
              {/* <Button variant="" className="navbar-icon pb-0 "></Button> */}
              <FontAwesomeIcon
                icon={faTrash}
                size="lg"
                onClick={() => removeItem(item.item.id)}
              />
            </div>
          ) : (
            ""
          )
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartShow;
