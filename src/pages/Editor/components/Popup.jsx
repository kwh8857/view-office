import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import Youtube from "./Youtube";

function Popup({ isUp: { status }, setIsUp }) {
  const template = useSelector((state) => state.database.editor);
  const __close = useCallback(() => {
    setIsUp({
      status: false,
      type: "",
    });
  }, [setIsUp]);
  return status ? (
    <div className="popup-pack">
      <div className="back-black" />
      <div className="popup-main">
        <Youtube __close={__close} template={template} />
      </div>
    </div>
  ) : (
    <div />
  );
}

export default Popup;
