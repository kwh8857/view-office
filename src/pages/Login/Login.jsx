import React, { useCallback } from "react";
import "./css/index.css";
function Login({ setIsLogin }) {
  const __login = useCallback(() => {
    setIsLogin(true);
  }, [setIsLogin]);

  return (
    <main className="login">
      <div className="wrapper">
        <div className="content-wrapper">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              __login();
            }}
            action=""
          >
            <img src="/assets/logo.svg" alt="" />
            <div className="title">뷰인테리어 관리자 웹</div>
            <div className="list">
              <div className="card">
                <div className="text">아이디</div>
                <input type="text" autoComplete="off" />
              </div>
              <div className="card">
                <div className="text">비밀번호</div>
                <input type="password" autoComplete="new-password" />
              </div>
            </div>
            <button onClick={__login}>로그인</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
