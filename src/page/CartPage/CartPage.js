import React, { useContext, useState } from "react";
import "./CartPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../Contexts/CartContext";

const CartPage = () => {
  const [value, setValue] = useState("");
  const [cartList, setCartList] = useContext(CartContext);

  const total = 5;

  const removeItem = (id) => {
    const removeThenCartItem = cartList.filter(
      (listItem) => listItem?.item?.id !== id
    );
    setCartList(removeThenCartItem);
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
              <th scope="col">Quality</th>
              <th scope="col">Total</th>
            </tr>
          </thead>

          <tbody className="text-center text-justify">
            {cartList.map(
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
                      <td>
                        <input
                          className="mt-4"
                          id="number"
                          type="number"
                          placeholder="1"
                          style={{ width: "50px" }}
                          onChange={(e) =>
                            handleChangeSinglePost(e.target.value, item.item.id)
                          }
                        ></input>
                      </td>
                      <td>
                        <p className="mt-4">{total}</p>
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

export default CartPage;
