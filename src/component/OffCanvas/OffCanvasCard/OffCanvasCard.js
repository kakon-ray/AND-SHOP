import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const OffCanvasCard = ({ item, removeItem }) => {
  return (
    <div
      className="d-flex gap-3 my-2 align-items-center justify-content-between"
      key={item.item.id}
    >
      <div className="d-flex gap-3 my-2">
        <div>
          <img
            src={item.item.img}
            alt=""
            className="img-fluid"
            style={{ width: "50px", height: "50px", border: "none" }}
          />
        </div>
        <div>
          <h6>{item.item.name}</h6>
          <p>Price: {item.item.price}</p>
        </div>
      </div>
      {/* <Button variant="" className="navbar-icon pb-0 "></Button> */}
      <FontAwesomeIcon
        icon={faTrash}
        size="lg"
        onClick={() => removeItem(item.item.id)}
      />
    </div>
  );
};

export default OffCanvasCard;
