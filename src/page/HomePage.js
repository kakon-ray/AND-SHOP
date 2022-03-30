import React from "react";
import FollowUs from "../component/FollowUs/FollowUs";
import HeaderBanner from "../component/HeaderBanner/HeaderBanner";
import HotProducts from "../component/HotProducts/HotProducts";
import LatestBlog from "../component/LatestBlog/LatestBlog";

import NewCollection from "../component/NewCollection/NewCollection";
import NewFashon from "../component/NewFashon/NewFashon";
import OffCollection from "../component/OffCollection/OffCollection";
import SlickCollection from "../component/SlickCollection/SlickCollection";

const HomePage = () => {
  return (
    <>
      <HeaderBanner />
      <NewCollection />
      <HotProducts />
      <OffCollection />
      <SlickCollection />
      <NewFashon />
      <LatestBlog />
      <FollowUs />
    </>
  );
};

export default HomePage;
