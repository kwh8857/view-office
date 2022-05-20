import React, { useState } from "react";
import "./css/core.css";
import Main from "./pages/Main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import Editor from "./pages/Editor/Editor";
import Toast from "./components/Toast/Toast";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Router>
      <Header isLogin={isLogin} type="all" />
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
