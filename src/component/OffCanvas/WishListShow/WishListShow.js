import React, { useContext } from "react";
import { Button, FormControl, InputGroup, Offcanvas } from "react-bootstrap";
import { wishListContext } from "../../../Contexts/wishListContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const WishListShow = ({ handleClosWishLIst, placement, showWishList }) => {
  const [wishList, setWishList] = useContext(wishListContext);

  const removeItem = (id) => {
    const removeThenCartItem = wishList.filter(
      (listItem) => listItem?.item?.id !== id
    );
    setWishList(removeThenCartItem);
    console.log(removeThenCartItem);
  };

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
        {wishList.map((item) =>
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

export default WishListShow;
