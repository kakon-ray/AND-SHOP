import React from "react";
import { Button, FormControl, InputGroup, Offcanvas } from "react-bootstrap";
import "./OffCanvas.css";

const OffCanvas = ({ onHide, placement, show }) => {
  return (
    <Offcanvas show={show} onHide={onHide} placement={placement}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="text-center mx-auto">
          AND SHOP
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <InputGroup className="mb-3">
          <FormControl
            className="form-control-offcanvas"
            placeholder="Search Your Fevorite Product"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button
            variant="outline-secondary"
            id="button-addon2 "
            className="offcanvas-search-btn"
          >
            Search
          </Button>
        </InputGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffCanvas;
