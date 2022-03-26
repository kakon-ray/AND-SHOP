import React from "react";
import { Card, Button } from "react-bootstrap";
import img from "../../assets/Collection/bag.e31a8e04.png";
import img1 from "../../assets/Collection/woman1.b58d4262.png";
import img2 from "../../assets/Collection/woman1.b58d4262.png";
import img3 from "../../assets/Collection/woman4.6c41e1ce.png";
import "./NewCollection.css";

const NewCollection = () => {
  return (
    <div className="container-fluid newcollection my-3">
      <div className="row">
        <div className="col-md-4">
          <Card className="my-3">
            <div className="img-hover-zoom">
              <Card.Img
                variant="top"
                src={img1}
                className="img-fluid "
                style={{ height: "216px" }}
              />
            </div>

            <Card.Body>
              <Card.Title>OUTERWEAR</Card.Title>
              <Card.Text>
                {" "}
                <span className="newCollection">New</span> Collection
              </Card.Text>
              <Button variant="outline-info">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="my-3">
            <div className="img-hover-zoom">
              <Card.Img
                variant="top"
                src={img3}
                className="img-fluid "
                style={{ height: "216px" }}
              />
            </div>
            <Card.Body>
              <Card.Title>OUTERWEAR</Card.Title>
              <Card.Text>
                {" "}
                <span className="newCollection">New</span> Collection
              </Card.Text>
              <Button variant="outline-info">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="my-3">
            <div className="img-hover-zoom">
              <Card.Img
                variant="top"
                src={img}
                className="img-fluid"
                style={{ height: "450px" }}
              />
            </div>
            <Card.Body style={{ top: "65%" }}>
              <Card.Title>OUTERWEAR</Card.Title>
              <Card.Text>
                {" "}
                <span className="newCollection">New</span> Collection
              </Card.Text>
              <Button variant="outline-info">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="my-3">
            <div className="img-hover-zoom">
              <Card.Img
                variant="top"
                src={img2}
                className="img-fluid "
                style={{ height: "216px" }}
              />
            </div>
            <Card.Body>
              <Card.Title>OUTERWEAR</Card.Title>
              <Card.Text>
                {" "}
                <span className="newCollection">New</span> Collection
              </Card.Text>
              <Button variant="outline-info">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="my-3">
            <div className="img-hover-zoom">
              <Card.Img
                variant="top"
                src={img3}
                className="img-fluid "
                style={{ height: "216px" }}
              />
            </div>
            <Card.Body>
              <Card.Title>OUTERWEAR</Card.Title>
              <Card.Text>
                {" "}
                <span className="newCollection">New</span> Collection
              </Card.Text>
              <Button variant="outline-info">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
