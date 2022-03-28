/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Card, Button } from "react-bootstrap";
import img from "../../assets/Hot/product1.7190443a.png";
import img1 from "../../assets/Hot/product3.1d2f5e96 (2).png";
import "./ShopCard.css";

const ShopCard = () => {
  return (
    <div className="col-md-3" id="shop-card">
      <Card className="card-container">
        <div className="img-container">
          <img src={img} className="img-fluid" />

          <img src={img1} className="upper-image img-fluid" />
        </div>

        <Card.Body className="text-center">
          <Card.Text>Green Dress For Woman</Card.Text>
          <h5>$50.00</h5>
        </Card.Body>
        <div className="overly-content">
          <button className="btn btn-light">Add to Cart</button>
        </div>
        <span className="badge-container p-0">
          <span class="badge">Trending</span>
        </span>
      </Card>
    </div>
  );
};

export default ShopCard;
