import React from "react";
import styles from "./TopNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";
const TopNav = () => {
  return (
    <div className={styles.topnav}>
      <div className="container-fluid">
        <div
          className={`d-flex justify-content-md-between  align-items-center flex-wrap ${styles.topNavContent}`}
        >
          <div
            className={`align-self-center justify-content-center ${styles.topnavText}`}
          >
            <p className="my-0 text-center ">
              Special collection already available
              <span className="readmore">Read More...</span>
            </p>
          </div>
          <div className="topnav-list">
            <ul className="d-flex flex-wrap align-self-center my-0 ps-0">
              <li>
                <Link to="/compare">
                  <Button variant="" className="me-2">
                    <FontAwesomeIcon icon={faCodeCompare} className="me-1" />
                    Compare
                  </Button>
                </Link>
              </li>
              <li>
                <Button variant="" className="me-2">
                  <FontAwesomeIcon icon={faUser} className="me-1" />
                  Login
                </Button>
              </li>
              <li>
                <Button variant="" className="me-2">
                  <FontAwesomeIcon icon={faLock} className="me-1" />
                  Register
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
