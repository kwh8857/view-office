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
  ispin,
  __changePin,
}) {
  const [open, setOpen] = useState(isopen);
  const [isDelete, setIsDelete] = useState(false);
  useEffect(() => {
    setOpen(isopen);

    return () => {};
  }, [isopen]);

  return (
    <div className="card">
      <div className="img-wrapper">
        <img src={img} alt="" />
      </div>
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
        className={`pin ${isopen ? (ispin ? "pinactive" : "") : "blur"}`}
        onClick={() => {
          __changePin(id, !ispin, isopen);
        }}
      >
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.957 13.5079L3.11716 8.98337C2.16846 8.39955 0.927851 8.70189 0.35446 9.65059C-0.229356 10.5993 0.072977 11.8399 1.02168 12.4133C1.05295 12.4341 1.08423 12.4446 1.10508 12.4654L8.93447 16.99C9.90402 17.5321 11.1238 17.1776 11.6659 16.2081C12.1872 15.2594 11.8744 14.0709 10.9466 13.5184L10.957 13.5079ZM4.4933 8.61848L10.5817 12.1318L12.6563 6.36662L8.44448 3.93753L4.48287 8.61848H4.4933ZM0 23.4328L5.82774 16.354L3.22141 14.8424L0 23.4328ZM15.1792 3.17648L9.95615 0.163577C9.21595 -0.211734 8.30895 0.0801744 7.92322 0.82037C7.56876 1.50844 7.79812 2.35289 8.44448 2.7699L13.6676 5.78281C14.366 6.24152 15.2939 6.04344 15.7526 5.34494C16.2113 4.64645 16.0132 3.7186 15.3147 3.25989C15.273 3.22861 15.2209 3.19734 15.1688 3.17648H15.1792Z"
            fill="#DBDBDB"
          />
        </svg>
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
