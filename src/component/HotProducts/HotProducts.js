import React, { useContext, useEffect, useState } from "react";
import ShopCard from "../ShopCard.js/ShopCard";
import "./HotProducts.css";

import img from "../../assets/Hot/product1.7190443a.png";
import img1 from "../../assets/Hot/product3.1d2f5e96 (2).png";
import img2 from "../../assets/Hot/product6.f19b14e6.png";
import { ShopContext } from "../userContext/ShopContext";
const HotProducts = () => {
  // this hook use get data database
  const [shopItem, setShopItem] = useContext(ShopContext);
  const [shop, setShop] = useState([]);

  useEffect(() => {
    setShop(shopItem.slice(0, 8));
  }, [shopItem]);

  const showMore = () => {
    let shopLength = shop.length + 4;
    setShop(shopItem.slice(0, shopLength));
  };

  return (
    <div id="hot-products" className="container-fluid mt-5 py-4">
      <div className="mx-auto text-center">
        <h1>Hot Products</h1>
        <p className="pt-0 mt-0">
          See What Everyone Is Shopping from Andshop E-Commerce
        </p>
      </div>
      <div className="d-flex mb-3 justify-content-center">
        <ul className="d-flex list-unstyled flex-wrap justify-content-center">
          <li className="hot-menue">NEW ARRIVAL</li>
          <li className="hot-menue">TRENDING</li>
          <li className="hot-menue">BEST SELLERS</li>
          <li className="hot-menue">FEATURED</li>
          <li className="hot-menue">ON SALL</li>
        </ul>
      </div>

      <div className="row g-3">
        {shop.map((item) => (
          <ShopCard
            key={item.id}
            position="Trending"
            title={item.name}
            price={item.price}
            img={item.img}
            img1={item.img2}
          />
        ))}
      </div>
      <div className="text-center mt-5">
        <button className="btn btn-outline-warning" onClick={showMore}>
          Show More
        </button>
      </div>
    </div>
  );
};

export default HotProducts;
