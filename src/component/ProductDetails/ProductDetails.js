import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import StarRatings from "react-star-ratings/build/star-ratings";
import PageBanner from "../PageBanner/PageBanner";
import "./ProductDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { wishListContext } from "../../Contexts/wishListContext";
import { CartContext } from "../../Contexts/CartContext";
import { CompareContext } from "../../Contexts/CompareContext";
import useProducts from "../../Hooks/useProducts";

const ProductDetails = () => {
  const [shopItem, setShopItem] = useProducts();
  const [wishList, setWishList] = useContext(wishListContext);
  const [cartList, setCartList] = useContext(CartContext);
  const [compareList, setCompareList] = useContext(CompareContext);

  let { id } = useParams();

  console.log(id);
  return (
    <>
      <PageBanner />
      <div id="product-details" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Card>
              <div className="row">
                <div className="col-md-5">
                  <img
                    src="https://andshop-react.netlify.app/static/media/product5.65927e42.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-7 ">
                  <div className="mt-3">
                    <h2>Fit-Flare Dress</h2>
                    <div className="d-flex aligen-items-center">
                      <StarRatings
                        className="py-3 "
                        rating={2.5}
                        starDimension="20px"
                        starSpacing="15px"
                        starRatedColor="#f79837"
                      />
                      <span className="mt-1 ms-3">
                        (Total 20 Customar Review)
                      </span>
                    </div>
                    <div className="my-3">
                      <h2>
                        $52.00{" "}
                        <del style={{ color: "#f79837", marginLeft: "40px" }}>
                          $60.00
                        </del>
                      </h2>
                    </div>
                    <div>
                      <p className="text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At, temporibus. Velit earum tenetur corrupti deleniti
                        sed dignissimos, libero non maiores ratione at? Vero,
                        inventore in officiis eos perspiciatis consequatur
                        deleniti commodi cupiditate debitis nostrum neque,
                        possimus suscipit repellendus vel doloremque expedita
                        itaque. Ipsum quae inventore, est neque delectus eaque
                        dolore id nostrum excepturi corporis provident
                        accusantium ad, quos vel illum numquam. Natus temporibus
                        provident incidunt saepe obcaecati ad, quis quisquam
                        cupiditate similique culpa. Necessitatibus dignissimos
                        ab ex, reprehenderit dolor provident quasi deserunt sed
                        ducimus maiores sunt adipisci quia quos. Tempora itaque
                        quos necessitatibus quam id quidem officiis repellendus,
                        iste ipsa.
                      </p>
                    </div>
                    <div>
                      <select
                        className="my-2"
                        name=""
                        id="dress-size"
                        style={{
                          width: "200px",
                          height: "40px",
                          border: "1px solid #f79837",
                        }}
                      >
                        <option value="mediam">Size</option>
                        <option value="xl">XL</option>
                        <option value="small">S</option>
                        <option value="large">L</option>
                      </select>
                    </div>
                    <div className="my-3">
                      <p>
                        <span className="product-details-wishlistz">
                          <FontAwesomeIcon icon={faHeart} size="sm" />
                          Add To Wishlist
                        </span>
                        <span className="ms-4 product-details-wishlistz">
                          <FontAwesomeIcon icon={faCodeCompare} size="sm" />
                          Add To Comparelist
                        </span>
                      </p>
                    </div>
                    <div className="my-2">
                      <Button variant="dark">
                        {" "}
                        Add to Cart
                        <FontAwesomeIcon
                          icon={faShoppingCart}
                          size="sm"
                          className="ms-1"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
