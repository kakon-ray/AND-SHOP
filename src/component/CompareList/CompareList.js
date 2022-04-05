import React, { useContext } from "react";
import { Card, Table, Button } from "react-bootstrap";
import StarRatings from "react-star-ratings/build/star-ratings";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./CompareList.css";
import TRcard from "./TRcard";
import { TRtext, TrPrice, StrRating } from "./TRtext";
import { CompareContext } from "../../Contexts/CompareContext";
import { CartContext } from "../../Contexts/CartContext";
import { toast } from "react-toastify";
const CompareList = () => {
  const [compareList, setCompareList] = useContext(CompareContext);
  const [cartList, setCartList] = useContext(CartContext);

  const addTowCard = (item) => {
    const exist = cartList.find((wishItem) => wishItem.item?.id === item.id);
    // console.log(item);
    // console.log(cartList);
    if (!exist) {
      console.log(item);
      setCartList([...cartList, { item }]);
      toast.success(" Added in Cartlist");
    } else if (exist) {
      toast.error("Already Added in Cartlist");
    }
  };

  const removeCompareList = (id) => {
    const newCompareList = compareList.filter(
      (comItem) => comItem?.item?.id !== id
    );
    setCompareList(newCompareList);
  };
  // console.log(compareList[1]?.item?.name);
  return (
    <div className="my-5 py-5 container-fluid">
      {compareList.length > 1 ? (
        <Table striped bordered>
          <tbody>
            <tr>
              <td style={{ width: "200px" }} id="parent">
                <h4 id="child" className="text-center">
                  Product
                </h4>
              </td>
              {compareList[1] ? (
                <TRcard
                  cardImg={compareList[1]?.item?.img}
                  cardP={compareList[1]?.item?.price}
                  cardH4={compareList[1]?.item?.name}
                />
              ) : (
                ""
              )}
              {compareList[2] ? (
                <TRcard
                  cardImg={compareList[2]?.item?.img}
                  cardP={compareList[2]?.item?.price}
                  cardH4={compareList[2]?.item?.name}
                />
              ) : (
                ""
              )}
            </tr>
            <tr>
              <td>
                <h4 className="py-3 text-center">Description</h4>
              </td>
              {compareList[1] ? (
                <TRtext text={compareList[1]?.item?.text} />
              ) : (
                ""
              )}
              {compareList[2] ? (
                <TRtext text={compareList[2]?.item?.text} />
              ) : (
                ""
              )}
            </tr>

            {console.log(compareList[2])}
            <tr>
              <td>
                <div className="py-3 text-center">
                  {" "}
                  <h4>Price</h4>
                </div>
              </td>
              {compareList[1] ? (
                <TrPrice price={compareList[1]?.item?.price} />
              ) : (
                ""
              )}
              {compareList[2] ? (
                <TrPrice price={compareList[2]?.item?.price} />
              ) : (
                ""
              )}
            </tr>
            <tr>
              <td className="text-center">
                <h4 className="py-3 text-center">Rating</h4>
              </td>
              {compareList[1] ? <StrRating ratingNum={2.5} /> : ""}
              {compareList[2] ? <StrRating ratingNum={5} /> : ""}
            </tr>
            <tr>
              <td className="text-center">
                <h4 className="py-3">Add To Cart</h4>
              </td>
              <td>
                <div className="py-3 text-center">
                  {compareList[1] ? (
                    <Button
                      variant="dark"
                      onClick={() => addTowCard(compareList[1].item)}
                    >
                      {" "}
                      Add to Car
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        size="sm"
                        className="ms-1"
                      />
                    </Button>
                  ) : (
                    ""
                  )}
                </div>
              </td>
              {compareList[2] ? (
                <td>
                  <div className="py-3 text-center">
                    <Button
                      variant="dark"
                      onClick={() => addTowCard(compareList[2].item)}
                    >
                      {" "}
                      Add to Cart
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        size="sm"
                        className="ms-1"
                      />
                    </Button>
                  </div>
                </td>
              ) : (
                ""
              )}
            </tr>
            <tr>
              <td>
                <h4 className="py-3 text-center">Delete</h4>
              </td>
              {compareList[1] ? (
                <td>
                  <div className="py-3 text-center">
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="lg"
                      onClick={() => removeCompareList(compareList[1].item.id)}
                    />
                  </div>
                </td>
              ) : (
                ""
              )}
              {compareList[2] ? (
                <td>
                  <div className="py-3 text-center">
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="lg"
                      onClick={() => removeCompareList(compareList[2].item.id)}
                    />
                  </div>
                </td>
              ) : (
                ""
              )}
            </tr>
          </tbody>
        </Table>
      ) : (
        <h1 className="text-center">No Item Add Compare List</h1>
      )}
    </div>
  );
};

export default CompareList;
