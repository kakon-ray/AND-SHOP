import React from "react";
import "./TopNav.css";

const TopNav = () => {
  return (
    <div className="bg-light">
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <div>
            <p>Special collection already available</p>
          </div>
          <div className="topnav-list ">
            <ul className="d-flex">
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
