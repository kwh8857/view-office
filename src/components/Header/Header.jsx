import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/index.css";
function Header({ isLogin, type, __insert, setIsLook, __logout }) {
  const location = useLocation();

  return (
    <header
      className={`${
        type === "all" && location.pathname === "/editor" ? "none" : ""
      }`}
    >
      <div className="wrapper">
        <div className="left">
          <img src="/assets/header/logo.svg" alt="" />
          <div className="title">관리자용</div>
          {type === "all" && (
            <div className="link-wrapper">
              <Link to={"/"}>포트폴리오 관리</Link>
              <Link to={"/question"}>문의 관리</Link>
            </div>
          )}
        </div>
        {type === "all" ? (
          <button
            className={`right ${isLogin ? "" : "none"}`}
            onClick={__logout}
          >
            로그아웃
          </button>
        ) : (
          <div className="button-wrapper">
            <button
              className="look"
              onClick={() => {
                setIsLook(true);
              }}
            >
              미리보기
            </button>
            <button className="insert" onClick={__insert}>
              등록하기
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
