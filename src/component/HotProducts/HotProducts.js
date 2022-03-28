import React from "react";
import ShopCard from "../ShopCard.js/ShopCard";
import "./HotProducts.css";

import img from "../../assets/Hot/product1.7190443a.png";
import img1 from "../../assets/Hot/product3.1d2f5e96 (2).png";
import img2 from "../../assets/Hot/product6.f19b14e6.png";
const HotProducts = () => {
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
        <ShopCard
          position="Trending"
          title="Green Dress For Woman"
          price="$50.00"
          img={img}
          img1={img1}
        />
        <ShopCard
          position="Trending"
          title="Green Dress For Woman"
          price="$50.00"
          img={img2}
          img1={img1}
        />
        <ShopCard
          position="Trending"
          title="Green Dress For Woman"
          price="$50.00"
          img={img}
          img1={img1}
        />
        <ShopCard
          position="Trending"
          title="Green Dress For Woman"
          price="$50.00"
          img={img2}
          img1={img1}
        />
        <ShopCard
          position="Trending"
          title="Green Dress For Woman"
          price="$50.00"
          img={img1}
          img1={img2}
        />
        <ShopCard
          position="Trending"
          title="Green Dress For Woman"
          price="$50.00"
          img={img}
          img1={img1}
        />
      </div>
    </div>
  );
};

export default HotProducts;
