import React, { useEffect, useState } from "react";

function Card({
  img,
  category,
  title,
  isopen,
  __changOpen,
  id,
  timestamp,
  __delete,
  __fixnav,
}) {
  const [open, setOpen] = useState(isopen);
  const [isDelete, setIsDelete] = useState(false);
  useEffect(() => {
    setOpen(isopen);

    return () => {};
  }, [isopen]);

  return (
    <div className="card">
      <div className="img-wrapper" style={{ backgroundImage: `url(${img})` }} />
      <div className="category">
        {category === "space"
          ? "주거공간"
          : category === "store"
          ? "상업공간"
          : category === "home"
          ? "주택건축"
          : "관공시설"}
      </div>
      <div className="name">{title}</div>
      <button
        className="fix"
        onClick={() => {
          __fixnav(id, category, timestamp);
        }}
      >
        수정하기
      </button>
      <div
        className={`open ${open ? "active" : ""}`}
        onClick={() => {
          setOpen(!open);
          __changOpen(id, !open);
        }}
      >
        <div className="circle" />
      </div>
      <div
        className="remove"
        onClick={() => {
          setIsDelete(true);
        }}
      >
        <img src="/assets/cancel.svg" alt="" />
      </div>
      <div className={`delete-box ${isDelete ? "active" : ""}`}>
        <div className="title">삭제하시겠습니까?</div>
        <button
          onClick={() => {
            __delete(id);
            setIsDelete(false);
          }}
        >
          삭제하기
        </button>
        <svg
          onClick={() => {
            setIsDelete(false);
          }}
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L19.7136 19.7136"
            stroke="#C4C4C4"
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeLinecap="round"
          />
          <path
            d="M19.7136 1L1 19.7136"
            stroke="#C4C4C4"
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Card;
