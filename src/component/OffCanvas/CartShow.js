import React from "react";
import { Button, FormControl, InputGroup, Offcanvas } from "react-bootstrap";
import "./OffCanvas.css";

const CartShow = ({ onHideCart, placement, showCart }) => {
  return (
    <Offcanvas show={showCart} onHide={onHideCart} placement={placement}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="text-center mx-auto">
          AND SHOP
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <h1>This is Cart Show</h1>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartShow;
