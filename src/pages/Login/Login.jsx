import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import firebaseApp from "../../config/firebaseApp";
import "./css/index.css";
const Fauth = firebaseApp.auth();
function Login({ setIsLogin }) {
  const IdRef = useRef(null);
  const PasswordRef = useRef(null);
  const dispatch = useDispatch();
  const __login = useCallback(() => {
    Fauth.setPersistence(firebaseApp.auth.Auth.Persistence.SESSION).then(() => {
      return Fauth.signInWithEmailAndPassword(
        `${IdRef.current.value}@viewinterior.com`,
        PasswordRef.current.value
      )
        .then((result) => {
          const {
            user: { uid },
          } = result;
          if (uid === "UltRWNBtl8TgJ2urvfdpxNom51j1") {
            setIsLogin(true);
          } else {
            dispatch({
              type: "@config/toast",
              payload: {
                isactive: true,
                msg: "등록된 관리자가 아닙니다 접근에 주의하세요",
              },
            });
          }
        })
        .catch((err) => {
          if (err.code === "auth/user-not-found") {
            dispatch({
              type: "@config/toast",
              payload: {
                isactive: true,
                msg: "존재하지않는 유저이거나 잘못된 이메일입니다",
              },
            });
          } else if (err.code === "auth/wrong-password") {
            dispatch({
              type: "@config/toast",
              payload: {
                isactive: true,
                msg: "비밀번호가 맞지않습니다",
              },
            });
          }
        });
    });
  }, [IdRef, PasswordRef, dispatch, setIsLogin]);

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
                <input type="text" autoComplete="off" ref={IdRef} />
              </div>
              <div className="card">
                <div className="text">비밀번호</div>
                <input
                  type="password"
                  autoComplete="new-password"
                  ref={PasswordRef}
                />
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
