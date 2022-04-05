import React, { useContext } from "react";
import "./CartPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../Contexts/CartContext";

const CartPage = () => {
  const [cartList, setCartList] = useContext(CartContext);

  const total = 5;
  return (
    <div className="my-5 container-fluid cart-page">
      <div className="row">
        <table class="table">
          <tr id="table-tr-bg">
            <th scope="col">Remove</th>
            <th scope="col">Image</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quality</th>
            <th scope="col">Total</th>
          </tr>

          <tbody>
            {cartList.map((item) =>
              item.item ? (
                <tr>
                  <th scope="row">
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="lg"
                      className="text-danger"
                    />
                  </th>

                  <td>
                    <img
                      src={item.item.img}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                  </td>
                  <td>
                    <p>{item.item.name}</p>
                  </td>
                  <td>
                    <p>{item.item.price}</p>
                  </td>
                  <td>
                    <input
                      id="number"
                      type="number"
                      style={{ width: "50px" }}
                    ></input>
                  </td>
                  <td>
                    <p>{total}</p>
                  </td>
                </tr>
              ) : (
                ""
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartPage;
