import React from "react";
import "./TopNav.css";

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="container-fluid py-2">
        <div className="d-flex justify-content-between align-items-center ">
          <div className="align-self-center">
            <p className="my-0">Special collection already available</p>
          </div>
          <div className="topnav-list ">
            <ul className="d-flex align-self-center my-0">
              <li>Compare</li>
              <li>Login</li>
              <li>Register</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
