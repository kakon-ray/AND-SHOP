import React, { useContext } from "react";
import { Card, Table, Button } from "react-bootstrap";
import StarRatings from "react-star-ratings/build/star-ratings";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./CompareList.css";
import TRcard from "./TRcard";
import TRtext from "./TRtext";
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
  console.log(compareList[1]?.item?.name);
  return (
    <div className="my-5 py-5">
      {compareList.length > 1 ? (
        <Table striped bordered>
          <tbody>
            <TRcard
              title=" Product"
              card1Img={compareList[1]?.item?.img}
              card2Img={compareList[2]?.item?.img}
              card1P={compareList[1]?.item?.price}
              card2P={compareList[2]?.item?.price}
              card1H4={compareList[1]?.item?.name}
              card2H4={compareList[2]?.item?.name}
            />
            <TRtext
              title="Description"
              text1={compareList[0]?.item?.text}
              text2={compareList[1]?.item?.text}
            />

            <tr>
              <td>
                <div className="py-3 text-center">
                  {" "}
                  <h4>Price</h4>
                </div>
              </td>
              <td>
                <div className="py-3 text-center">
                  {" "}
                  <h5>{compareList[1]?.item?.price}</h5>
                </div>
              </td>
              <td>
                <div className="py-3 text-center">
                  {" "}
                  <h5>{compareList[2]?.item?.price}</h5>
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <h4 className="py-3 text-center">Rating</h4>
              </td>
              <td>
                <div className="py-3 text-center">
                  {compareList[1] ? (
                    <StarRatings
                      className="py-3 "
                      rating={2.5}
                      starDimension="20px"
                      starSpacing="15px"
                      starRatedColor="#f79837"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </td>
              <td>
                <div className="py-3 text-center">
                  {compareList[2] ? (
                    <StarRatings
                      className="py-3"
                      rating={2.5}
                      starDimension="20px"
                      starSpacing="15px"
                      starRatedColor="#f79837"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </td>
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
              <td>
                <div className="py-3 text-center">
                  {compareList[2] ? (
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
                  ) : (
                    ""
                  )}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <h4 className="py-3 text-center">Delete</h4>
              </td>
              <td>
                <div className="py-3 text-center">
                  {compareList[1] ? (
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="lg"
                      onClick={() => removeCompareList(compareList[1].item.id)}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </td>
              <td>
                <div className="py-3 text-center">
                  {compareList[2] ? (
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="lg"
                      onClick={() => removeCompareList(compareList[2].item.id)}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </td>
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
