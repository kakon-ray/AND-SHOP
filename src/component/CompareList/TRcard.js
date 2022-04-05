import React from "react";
import { Card } from "react-bootstrap";

const TRcard = ({ cardImg, cardP, cardH4 }) => {
  return (
    <td>
      <Card className="text-center">
        <img src={cardImg} alt="" style={{ height: "600px" }} />
        <Card.Body>
          <p>{cardP}</p>
          <h4>{cardH4}</h4>
        </Card.Body>
      </Card>
    </td>
  );
};

export default TRcard;
