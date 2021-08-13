import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div
      onClick={() => {
        console.log("hello");
      }}
      className="start_wrap"
    >
      <Link to="/main">
        {" "}
        <p>START</p>
      </Link>
    </div>
  );
}
