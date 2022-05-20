import React from "react";
import TemplateEmty from "./TemplateEmty";

function TemplateDouble({
  provided,
  setFocus,
  idx,
  template,
  __imageUpdate,
  type,
  data,
}) {
  return (
    <>
      {idx === 0 ? <TemplateEmty idx={idx} /> : undefined}
      <div
        className={`template-doubleimg ${type}`}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        onClick={() => {
          setFocus(idx);
        }}
      >
        <label className={data[0].url ? "isurl" : ""}>
          <input
            type="file"
            style={{ opacity: 0 }}
            accept="image/x-png,image/gif,image/jpeg"
            onChange={(e) => {
              __imageUpdate(e, type, idx, 0);
            }}
          />
          {data[0].url ? (
            <img src={data[0].url} alt="이미지" className="url-img" />
          ) : (
            <div className="content">
              <img src="/assets/editor/grey-plus.svg" alt="" />
              <div className="text">
                이미지 업로드 <br /> (jpg / png / gif)
              </div>
            </div>
          )}
          {/* {url ? <img src={url} alt="이미지" /> : undefined} */}
        </label>{" "}
        <label className={data[1].url ? "isurl" : ""}>
          <input
            type="file"
            style={{ opacity: 0 }}
            accept="image/x-png,image/gif,image/jpeg"
            onChange={(e) => {
              __imageUpdate(e, type, idx, 1);
            }}
          />
          {data[1].url ? (
            <img src={data[1].url} alt="이미지" className="url-img" />
          ) : (
            <div className="content">
              <img src="/assets/editor/grey-plus.svg" alt="" />
              <div className="text">
                이미지 업로드 <br /> (jpg / png / gif)
              </div>
            </div>
          )}
          {/* {url ? <img src={url} alt="이미지" /> : undefined} */}
        </label>
      </div>
      {!template[idx + 1] || template[idx + 1].type !== "TITLE" ? (
        <TemplateEmty idx={idx + 1} />
      ) : undefined}
    </>
  );
}

export default TemplateDouble;
