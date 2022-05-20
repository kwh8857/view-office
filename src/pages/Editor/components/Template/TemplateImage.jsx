import React from "react";
import TemplateEmty from "./TemplateEmty";

function TemplateImage({
  data: { resize, url },
  provided,
  setFocus,
  idx,
  template,
  __imageUpdate,
  type,
}) {
  return (
    <>
      {idx === 0 ? <TemplateEmty idx={idx} /> : undefined}
      <div
        className={`template-img ${url ? "isurl" : ""}`}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        onClick={() => {
          setFocus(idx);
        }}
        style={
          type === "SMALL"
            ? {
                width: "578px",
                margin: "20px auto",
              }
            : undefined
        }
      >
        <label>
          <input
            type="file"
            style={{ opacity: 0 }}
            accept="image/x-png,image/gif,image/jpeg"
            onChange={(e) => {
              __imageUpdate(e, type, idx);
            }}
          />
          {url ? (
            <img src={url} alt="이미지" className="url-img" />
          ) : (
            <div className="content">
              <img src="/assets/editor/grey-plus.svg" alt="" />

              <div className="text">
                이미지 업로드 <br /> (jpg / png / gif)
              </div>
            </div>
          )}
        </label>
      </div>
      {!template[idx + 1] || template[idx + 1].type !== "TITLE" ? (
        <TemplateEmty idx={idx + 1} />
      ) : undefined}
    </>
  );
}

export default TemplateImage;
