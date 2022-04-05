import React, { useContext } from "react";
import { Button, FormControl, InputGroup, Offcanvas } from "react-bootstrap";
import { wishListContext } from "../../../Contexts/wishListContext";

import OffCanvasCard from "../OffCanvasCard/OffCanvasCard";

const WishListShow = ({ handleClosWishLIst, placement, showWishList }) => {
  const [wishList, setWishList] = useContext(wishListContext);

  const removeItem = (id) => {
    const removeThenCartItem = wishList.filter(
      (listItem) => listItem?.item?.id !== id
    );
    setWishList(removeThenCartItem);
    // console.log(removeThenCartItem);
  };

  return (
    <Offcanvas
      show={showWishList}
      onHide={handleClosWishLIst}
      placement={placement}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="text-center mx-auto textwarning">
          AND SHOP
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {wishList.map((item) =>
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

        {wishList.length <= 1 ? (
          <h6 className="text-center">No Item in the Wish List</h6>
        ) : (
          ""
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default WishListShow;
