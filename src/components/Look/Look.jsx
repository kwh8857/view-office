import React from "react";
import Navigation from "./components/Navigation";
import "./css/index.css";
import DoubleImage from "./Templates/DoubleImage";
import Image from "./Templates/Image";
import Text from "./Templates/Text";
import Youtube from "./Templates/Youtube";
function Look({ isLook, title, sub, category,price ,template, setIsLook }) {
  return (
    <div className={`look-wrapper ${isLook ? "on" : ""}`}>
      <img
        src="/assets/cancel.svg"
        alt=""
        className="cancel"
        onClick={() => {
          setIsLook(false);
        }}
      />
      <div className="top">
        <Navigation top={90} />
        <div className="title">VIEW PORTFOLIO</div>
      </div>
      <div className="bottom">
        <div className="wrapper">
          <div className="title-section">
            <div className="title">{title}</div>
            <div className="subject">
              <div className="category">
                {category === "space"
                  ? "주거공간"
                  : category === "store"
                  ? "상업공간"
                  : category === "home"
                  ? "주택건축"
                  : "관공시설"}
              </div>
              <div className="sub">{sub}</div>
                        {price && (
                  <div className="price-section">
                    <div className="price-title">견적</div>
                    <div className="price-content">{price}</div>
                  </div>
                )}
            </div>
          </div>
          <div className="template-wrapper">
            {template.map(({ type, content }, idx) => {
              if (type === "TITLE") {
                return <Text key={idx} data={content} />;
              } else if (type === "YOUTUBE") {
                return <Youtube key={idx} data={content} />;
              } else if (type === "IMAGE" || type === "SMALL") {
                return <Image key={idx} data={content} type={type} />;
              } else {
                return <DoubleImage key={idx} data={content} type={type} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Look;
