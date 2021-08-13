import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div className="start_wrap">
      <Link to="/main">
        {" "}
        <p>START</p>
      </Link>
    </div>
  );
}
