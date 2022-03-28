import React from "react";
import HeaderBanner from "../component/HeaderBanner/HeaderBanner";
import HotProducts from "../component/HotProducts/HotProducts";
import HeaderNav from "../component/Navbar/HeaderNav";
import NewCollection from "../component/NewCollection/NewCollection";
import OffCollection from "../component/OffCollection/OffCollection";
import SlickCollection from "../component/SlickCollection/SlickCollection";
import TopNav from "../component/TopNav/TopNav";

const HomePage = () => {
  return (
    <>
      <TopNav />
      <HeaderNav />
      <HeaderBanner />
      <NewCollection />
      <HotProducts />
      <OffCollection />
      <SlickCollection />
    </>
  );
};

export default HomePage;
