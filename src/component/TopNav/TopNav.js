import React from "react";
import "./TopNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="container-fluid py-2 ">
        <div className="d-flex justify-content-md-between  align-items-center flex-wrap top-nav-conent">
          <div className="align-self-center justify-content-center topnav-text">
            <p className="my-0 text-center ">
              Special collection already available
              <span className="readmore">Read More...</span>
            </p>
          </div>
          <div className="topnav-list">
            <ul className="d-flex flex-wrap align-self-center my-0">
              <li>
                <FontAwesomeIcon icon={faCodeCompare} className="me-1" />
                Compare
              </li>
              <li>
                <FontAwesomeIcon icon={faUser} className="me-1" />
                Login
              </li>
              <li>
                <FontAwesomeIcon icon={faLock} className="me-1" />
                Register
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;