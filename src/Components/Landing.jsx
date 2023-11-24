import { Link } from "react-router-dom";
import "../Style-files/home.css";
export default function Landing() {
  return (
    <div className="land">
      <div className="img">
        <img src={require("../Images/land.png")} alt="img" />
      </div>
      <div className="text">
        <h3>wireless</h3>
        <h1>HEADPHONE</h1>
        <Link to={"shop"}>Explore</Link>
      </div>
    </div>
  );
}
