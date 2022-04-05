import React from "react";
import { Card, Table, Button } from "react-bootstrap";

const CompareList = () => {
  return (
    <div className="my-5 py-5">
      <Table striped bordered>
        <tbody>
          <tr>
            <td style={{ width: "200px" }}>
              <h4>Product</h4>
            </td>
            <td>
              <Card>
                <img
                  src="https://andshop-react.netlify.app/static/media/product1.7190443a.png"
                  alt=""
                />
                <Card.Body>
                  <p>Fashion</p>
                  <h4>Green Dreass for Woman</h4>
                </Card.Body>
              </Card>
            </td>
            <td>
              <Card>
                <img
                  src="https://andshop-react.netlify.app/static/media/product1.7190443a.png"
                  alt=""
                />
                <Card.Body>
                  <p>Fashion</p>
                  <h4>Green Dreass for Woman</h4>
                </Card.Body>
              </Card>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Description</h4>
            </td>
            <td>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente non expedita molestias at eveniet. Cupiditate accusamus
                soluta iste harum aspernatur?
              </p>
            </td>
            <td>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente non expedita molestias at eveniet. Cupiditate accusamus
                soluta iste harum aspernatur?
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Price</h4>
            </td>
            <td>
              <h5>1000$</h5>
            </td>
            <td>
              <h5>1000$</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Rating</h4>
            </td>
            <td>
              <h5>1000$</h5>
            </td>
            <td>
              <h5>1000$</h5>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CompareList;
