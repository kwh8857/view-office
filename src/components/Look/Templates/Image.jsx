import React from "react";
import "./css/index.css";
function Image({ data, type }) {
  return (
    <div className={`img-wrapper ${type}`}>
      <img src={data.url} alt="" />
    </div>
  );
}

export default Image;
