import React, { useEffect, useRef } from "react";

function Text({ data }) {
  const TextRef = useRef(null);
  useEffect(() => {
    if (TextRef.current) {
      TextRef.current.innerHTML = data;
    }
    return () => {};
  }, [data]);
  return <div ref={TextRef}>콘텍스트</div>;
}

export default Text;
