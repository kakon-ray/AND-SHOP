import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import {
  Container,
  NavDropdown,
  Nav,
  Button,
  Offcanvas,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./HeaderNav.css";
import OffCanvas from "../OffCanvas/OffCanvas";

const HeaderNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>

              <NavDropdown title="SHOP" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">SHOP</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="FEATURE" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">FEATURE</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="BLOG" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">BLOG</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="PAGEs" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">PAGE</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="navbar-shop text-center">
              <Button
                variant=""
                className="navbar-icon mt-0 pt-0  position-relative"
              >
                <FontAwesomeIcon icon={faHeart} size="lg" />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                  99+
                  <span class="visually-hidden">unread messages</span>
                </span>
              </Button>
              <Button
                variant=""
                className="navbar-icon mt-0 pt-0  position-relative"
              >
                <FontAwesomeIcon icon={faShoppingBag} size="lg" />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                  99+
                  <span class="visually-hidden">unread messages</span>
                </span>
              </Button>
              <Button
                variant=""
                className="navbar-icon mt-0 pt-0 "
                onClick={handleShow}
              >
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </Button>
              {/* <Button variant="" className="navbar-icon mt-0 pt-0 ">
                <FontAwesomeIcon icon={faBars} size="lg" />
              </Button> */}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* this is offcanvas section */}

      <OffCanvas show={show} onHide={handleClose} placement={"start"} />
    </>
  );
};

export default HeaderNav;
