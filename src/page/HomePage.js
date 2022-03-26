import React from "react";
import HeaderBanner from "../component/HeaderBanner/HeaderBanner";
import HeaderNav from "../component/Navbar/HeaderNav";
import NewCollection from "../component/NewCollection/NewCollection";
import TopNav from "../component/TopNav/TopNav";

const HomePage = () => {
  return (
    <>
      <TopNav />
      <HeaderNav />
      <HeaderBanner />
      <NewCollection />
    </>
  );
};

export default HomePage;
