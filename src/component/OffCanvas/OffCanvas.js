import React from "react";
import { Offcanvas } from "react-bootstrap";

const OffCanvas = ({ onHide, placement, show }) => {
  return (
    <Offcanvas show={show} onHide={onHide} placement={placement}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc. Some text as placeholder.
        In real life you can have the elements you have chosen. Like, text,
        images, lists, etc. Some text as placeholder. In real life you can have
        the elements you have chosen. Like, text, images, lists, etc. Some text
        as placeholder. In real life you can have the elements you have chosen.
        Like, text, images, lists, etc. Some text as placeholder. In real life
        you can have the elements you have chosen. Like, text, images, lists,
        etc. Some text as placeholder. In real life you can have the elements
        you have chosen. Like, text, images, lists, etc. Some text as
        placeholder. In real life you can have the elements you have chosen.
        Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffCanvas;
