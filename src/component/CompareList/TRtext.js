import React from "react";

const TRtext = ({ title, text1, text2 }) => {
  return (
    <tr>
      <td>
        <h4 className="py-3 text-center">{title}</h4>
      </td>
      <td>
        <p className="py-3 text-center">{text1}</p>
      </td>
      <td>
        <p className="py-3 text-center">{text2}</p>
      </td>
    </tr>
  );
};

export default TRtext;
