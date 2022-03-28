import React from "react";
import ShopCard from "../ShopCard.js/ShopCard";
import "./HotProducts.css";
const HotProducts = () => {
  return (
    <div id="hot-products" className="container-fluid mt-5">
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

      <div className="row">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>
    </div>
  );
};

export default HotProducts;
