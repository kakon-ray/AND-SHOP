import React from "react";

const FooterList = ({ title, ...other }) => {
  const footerMenue = [];

  for (let li in other) {
    footerMenue.push(other[li]);
  }

  return (
    <div className="col-md-3 footer-menue">
      <h1>{title}</h1>
      <ul>
        {footerMenue.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
