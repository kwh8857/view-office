import React from "react";
import "./css/index.css";
function DoubleImage({ data, type }) {
  return (
    <div className={`double ${type}`}>
      {Object.values(data).map((item, idx) => {
        return <img src={item.url} alt="" key={idx} />;
      })}
    </div>
  );
}

export default DoubleImage;
