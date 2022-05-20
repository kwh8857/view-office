import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/index.css";
function Toast() {
  const dispatch = useDispatch();
  const { isactive, msg } = useSelector((state) => state.config.toast);
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    if (isactive) {
      setIsOn(true);
      setTimeout(() => {
        setIsOn(false);
      }, 2000);
      setTimeout(() => {
        dispatch({
          type: "@config/toast",
          payload: {
            isactive: false,
            msg: "",
          },
        });
      }, 3000);
    }
    return () => {};
  }, [isactive, dispatch]);

  return (
    <div className={`toast ${isOn ? "toast-active" : ""}`}>
      <div className="msg">{msg}</div>
    </div>
  );
}

export default Toast;
