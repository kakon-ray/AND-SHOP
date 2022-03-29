import React from "react";

const NewFashon = () => {
  return (
    <div
      id="tranding-new-fashion"
      className="py-5 my-5"
      style={{
        backgroundImage:
          "url(" +
          "https://andshop-react.netlify.app/static/media/offer-banner.b01027d7.png" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <div className="text-center container-fluid w-25 mx-auto py-5">
        <h6 className="text-warning">TRENDING</h6>
        <h1 className="text-light">New Fashion</h1>
        <p className="text-light">
          Consectetur adipisicing elit. Dolores nisi distinctio magni, iure
          deserunt doloribus optio
        </p>
        <button className="btn btn-outline-warning">Shop Now</button>
      </div>
    </div>
  );
};

export default NewFashon;
