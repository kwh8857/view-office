import React, { useCallback, useEffect, useState } from "react";
import "./css/core.css";
import Main from "./pages/Main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import Editor from "./pages/Editor/Editor";
import Toast from "./components/Toast/Toast";
import firebaseApp from "./config/firebaseApp";

const Fauth = firebaseApp.auth();
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const __logout = useCallback(() => {
    Fauth.signOut();
  }, []);

  useEffect(() => {
    Fauth.onAuthStateChanged((user) => {
      if (user && user.uid === "UltRWNBtl8TgJ2urvfdpxNom51j1") {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
    return () => {};
  }, []);

  return (
    <Router>
      <Header isLogin={isLogin} type="all" __logout={__logout} />
      <Routes>
        {isLogin ? (
          <>
            <Route path="/*" exact element={<Main />} />
            <Route path="/editor/*" exact element={<Editor />} />
          </>
        ) : (
          <Route path="/" exact element={<Login setIsLogin={setIsLogin} />} />
        )}
      </Routes>
      <Toast />
    </Router>
  );
}

export default App;
