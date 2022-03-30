import React from "react";

export default function PageBanner({ page }) {
  const myStyle = {
    backgroundImage:
      "url('https://andshop-react.netlify.app/static/media/common_bg.7b040441.png')",
    height: "40vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: ".2%",
  };
  const pageStyle = {
    left: "45%",
    top: "50%",
  };
  return (
    <div style={myStyle} className="position-relative mb-5">
      <div className="position-absolute page text-light" style={pageStyle}>
        {" "}
        <h1>{page}</h1>
      </div>
    </div>
  );
}
