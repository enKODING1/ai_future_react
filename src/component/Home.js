import "../style/start.css";
import Start from "./start";
import Main from "./main";

import { Route } from "react-router-dom";

export default function Home() {
  return (
    <>
      {" "}
      <div className="modal">
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
