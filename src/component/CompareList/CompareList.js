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
    } else if (exist) {
      toast.error("Already Added in Cartlist");
    }
  };
  console.log(compareList[1]?.item?.name);
  return (
    <div className="my-5 py-5">
      {compareList.length > 1 ? (
        <Table striped bordered>
          <tbody>
            <TRcard
              title=" Product"
              card1Img={compareList[1].item?.img}
              card2Img={compareList[2].item?.img}
              card1P={compareList[1].item?.price}
              card2P={compareList[2].item?.price}
              card1H4={compareList[1].item?.name}
              card2H4={compareList[2].item?.name}
            />
            <TRtext
              title="Description"
              text1={compareList[0].item?.text}
              text2={compareList[1].item?.text}
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
                  <h5>1000$</h5>
                </div>
              </td>
              <td>
                <div className="py-3 text-center">
                  {" "}
                  <h5>1000$</h5>
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <h4 className="py-3 text-center">Rating</h4>
              </td>
              <td>
                <div className="py-3 text-center">
                  <StarRatings
                    className="py-3 "
                    rating={2.5}
                    starDimension="20px"
                    starSpacing="15px"
                    starRatedColor="#f79837"
                  />
                </div>
              </td>
              <td>
                <div className="py-3 text-center">
                  <StarRatings
                    className="py-3"
                    rating={2.5}
                    starDimension="20px"
                    starSpacing="15px"
                    starRatedColor="#f79837"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <h4 className="py-3">Add To Cart</h4>
              </td>
              <td>
                <div className="py-3 text-center">
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
                </div>
              </td>
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
            </tr>
            <tr>
              <td>
                <h4 className="py-3 text-center">Delete</h4>
              </td>
              <td>
                <div className="py-3 text-center">
                  <FontAwesomeIcon icon={faTrash} size="lg" />
                </div>
              </td>
              <td>
                <div className="py-3 text-center">
                  <FontAwesomeIcon icon={faTrash} size="lg" />
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
