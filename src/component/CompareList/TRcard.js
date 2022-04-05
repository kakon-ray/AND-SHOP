import React from "react";
import { Card } from "react-bootstrap";

const TRcard = ({
  title,
  card1Img,
  card2Img,
  card1P,
  card2P,
  card1H4,
  card2H4,
}) => {
  return (
    <tr>
      <td style={{ width: "200px" }} id="parent">
        <h4 id="child" className="text-center">
          {title}
        </h4>
      </td>
      <td>
        <Card className="text-center">
          <img src={card1Img} alt="" style={{ height: "600px" }} />
          <Card.Body>
            <p>{card1P}</p>
            <h4>{card1H4}</h4>
          </Card.Body>
        </Card>
      </td>
      <td>
        <Card className="text-center">
          <img style={{ height: "600px" }} src={card2Img} alt="" />
          <Card.Body>
            <p>{card2P}</p>
            <h4>{card2H4}</h4>
          </Card.Body>
        </Card>
      </td>
    </tr>
  );
};

export default TRcard;
