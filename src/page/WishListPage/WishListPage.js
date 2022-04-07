import React, { useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { wishListContext } from "../../Contexts/wishListContext";

const WishListPage = () => {
  const [value, setValue] = useState("");
  const [wishList, setWishList] = useContext(wishListContext);

  const total = 5;

  const removeItem = (id) => {
    const removeThenCartItem = wishList.filter(
      (listItem) => listItem?.item?.id !== id
    );
    setWishList(removeThenCartItem);
    // console.log(removeThenCartItem);
  };

  const handleChangeSinglePost = (value, id) => {
    console.log("value>>>", value);
    console.log("id>>>", id);
  };

  return (
    <div className="my-5 container-fluid cart-page">
      <div className="row table-responsive">
        <table className="table">
          <thead>
            <tr id="table-tr-bg">
              <th scope="col">Remove</th>
              <th scope="col">Image</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
            </tr>
          </thead>

          <tbody className="text-center text-justify">
            {wishList.map(
              (item) =>
                item.item && (
                  <React.Fragment key={item?.item?.id}>
                    <tr key={item.item.id}>
                      <th scope="row">
                        <FontAwesomeIcon
                          icon={faTrash}
                          size="lg"
                          className="text-danger pt-4"
                          onClick={() => removeItem(item.item.id)}
                        />
                      </th>

                      <td>
                        <img
                          src={item.item.img}
                          alt=""
                          style={{ width: "80px", height: "80px" }}
                        />
                      </td>
                      <td>
                        <p className="mt-4">{item.item.name}</p>
                      </td>
                      <td>
                        <p className="mt-4">{item.item.price}</p>
                      </td>
                    </tr>
                  </React.Fragment>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishListPage;
