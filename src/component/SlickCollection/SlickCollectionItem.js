import React from "react";
import ShopCard from "../ShopCard.js/ShopCard";
import img1 from "../../assets/Hot/product3.1d2f5e96 (2).png";
import img2 from "../../assets/Hot/product6.f19b14e6.png";

const SlickCollectionItem = () => {
  return (
    <div className="row">
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
        img={img2}
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
        img={img2}
        img1={img1}
      />
    </div>
  );
};

export default SlickCollectionItem;
