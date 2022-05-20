import React from "react";
import ReactPlayer from "react-player";
import "./css/index.css";
function Youtube({ data }) {
  return (
    <div className="player">
      <ReactPlayer controls url={data} width={"100%"} height={"100%"} />
    </div>
  );
}

export default Youtube;
