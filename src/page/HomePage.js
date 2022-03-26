import React from "react";
import HeaderBanner from "../component/HeaderBanner/HeaderBanner";
import HeaderNav from "../component/Navbar/HeaderNav";
import TopNav from "../component/TopNav/TopNav";

const HomePage = () => {
  return (
    <>
      <TopNav />
      <HeaderNav />
      <HeaderBanner />
    </>
  );
};

export default HomePage;
