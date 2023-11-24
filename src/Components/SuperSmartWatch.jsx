import { Link } from "react-router-dom";
import "../Style-files/home.css";
export default function SmartWatch() {
  return (
    <div className="super-watch">
      <div className="container">
        <div className="super-wrapper">
          <div className="left-side">
            <div className="text">
              <p>20% off</p>
              <h2>
                happy <br /> hours
              </h2>
            </div>
            <div className="img-box">
              <img src={require("../Images/samrt-watch-.png")} alt="img" />
            </div>
          </div>
          <div className="right-side">
            <div className="text">
              <h3>Summer Sale</h3>
              <p>
                Every White Friday of the summer, a 20% discount on smartwatch
              </p>
              <Link to={"shop"}>Shop</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
