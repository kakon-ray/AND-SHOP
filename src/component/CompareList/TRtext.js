import React from "react";
import StarRatings from "react-star-ratings/build/star-ratings";

const TRtext = ({ text }) => {
  return (
    <td>
      <p className="py-3 text-center">{text}</p>
    </td>
  );
};
const TrPrice = ({ price }) => {
  return (
    <td>
      <div className="py-3 text-center">
        <h5>{price}</h5>
      </div>
    </td>
  );
};
const StrRating = ({ ratingNum }) => {
  return (
    <td>
      <div className="py-3 text-center">
        <StarRatings
          className="py-3 "
          rating={ratingNum}
          starDimension="20px"
          starSpacing="15px"
          starRatedColor="#f79837"
        />
      </div>
    </td>
  );
};

export { TRtext, TrPrice, StrRating };
