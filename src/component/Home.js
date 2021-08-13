import "../style/start.css";
import Start from "./start";
import Main from "./main";

import { Route, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  let modalRef = useRef();
  let [height, setHeight] = useState(0);

  const location = useLocation();

  useEffect(() => {
    setHeight((window.innerHeight * 60) / 100);

    if (location.pathname === "/main") {
      modalRef.current.style.height = "70vh";
    } else if (location.pathname === "/ai_future_react") {
      modalRef.current.style.height = `${height}px`;
    }
  });
  return (
    <>
      {" "}
      <div ref={modalRef} className="modal">
        {" "}
        <div>
          {" "}
          <div className="status-bar">
            {" "}
            <div className="item-1"></div>
            <div className="item-2"></div>
            <div className="item-3"></div>
          </div>
          <Route path="/" exact={true} component={Start} />
          <Route path="/main" component={Main} />
        </div>
      </div>
    </>
  );
}

// const modalRef = useCallback((node) => {
//   if (node !== null) {
//     setHeight(node.getBoundingClientRect().height);
//     setEl(node);
//   }
// }, []);

// useEffect(() => {
//   const timer = setTimeout(() => {
//     modalRef.current.style.display = "block";
//   }, sec * 1000);
//   return () => clearTimeout(timer);
// }, []);

// const h = modalRef.current.clientHeight / 8;
