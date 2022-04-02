import React, { useContext, useEffect, useState } from "react";
import FollowUs from "../component/FollowUs/FollowUs";
import HotProducts from "../component/HotProducts/HotProducts";
import LatestBlog from "../component/LatestBlog/LatestBlog";
import HeaderNav from "../component/Navbar/HeaderNav";
import NewFashon from "../component/NewFashon/NewFashon";
import OffCollection from "../component/OffCollection/OffCollection";
import PageBanner from "../component/PageBanner/PageBanner";
import ShopCard from "../component/ShopCard.js/ShopCard";
import SlickCollection from "../component/SlickCollection/SlickCollection";

import useProducts from "../Hooks/useProducts";

const ShopPage = () => {
  // custom hook use and get data
  const [shopItem, setShopItem] = useProducts();
  const [shop, setShop] = useState([]);

  return (
    <>
      <PageBanner page="SHOP" />
      <div className="container-fluid">
        <div className="row g-3">
          {shopItem.map((item) => (
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
      </div>
      <FollowUs />
    </>
  );
};

export default ShopPage;
