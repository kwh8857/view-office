import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
const dummy = [
  { img: "image", type: "IMAGE" },
  { img: "small", type: "SMALL" },
  { img: "half", type: "DOUBLE" },
  { img: "three", type: "THREE" },
  { img: "two", type: "TWO" },
  // { img: "youtube", type: "YOUTUBE" },
];

function Insert({ setIsUp, temKey }) {
  const dispatch = useDispatch();
  const template = useSelector((state) => state.database.editor);
  const __templateInit = useCallback(
    (type) => {
      const arr = template.slice();
      const temp = {
        type: type,
        content:
          type === "IMAGE" || type === "SMALL"
            ? { url: "" }
            : [
                { url: "", resize: "" },
                { url: "", resize: "" },
              ],
        id: `image-${
          new Date().getTime() - Math.floor(Math.random() * (100 - 1 + 1)) + 1
        }`,
      };
      arr.push(temp);
      dispatch({
        type: "@layouts/CHANGE_EDITOR",
        payload: arr,
      });
    },
    [template, dispatch]
  );
  return (
    <div className="insert-wrapper">
      <div className="img-wrapper">
        {dummy.map(({ img, type }, idx) => {
          return (
            <label
              className="test-img"
              key={idx}
              onClick={() => {
                __templateInit(type);
              }}
            >
              <img src={`/assets/editor/${img}.svg`} alt={`${img}`} />
            </label>
          );
        })}
      </div>
      <div className="line" />
      <div
        className="test-img"
        onClick={() => {
          setIsUp({
            type: "YOUTUBE",
            status: true,
          });
        }}
      >
        <img src="/assets/editor/youtube.svg" alt="" />
      </div>
    </div>
  );
}

export default Insert;
