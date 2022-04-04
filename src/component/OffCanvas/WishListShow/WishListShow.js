import React from "react";
import { Button, FormControl, InputGroup, Offcanvas } from "react-bootstrap";

const WishListShow = ({
  handleClosWishLIst,
  placement,
  showWishList,
  wishList,
}) => {
  // console.log(wishList);
  return (
    <Offcanvas
      show={showWishList}
      onHide={handleClosWishLIst}
      placement={placement}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="text-center mx-auto">
          AND SHOP
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <h1>This is show wishlist</h1>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default WishListShow;
