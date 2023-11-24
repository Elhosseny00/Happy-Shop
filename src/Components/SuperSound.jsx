import { Link } from "react-router-dom";
import "../Style-files/home.css";
export default function SuperSound() {
  return (
    <div className="super-sound">
      <div className="container">
        <div className="super-wrapper">
          <div className="left-side">
            <div className="text">
              <p>20% off</p>
              <h2>
                Super <br /> Sound
              </h2>
            </div>
            <div className="img-box">
              <img src={require("../Images/super.webp")} alt="img" />
            </div>
          </div>
          <div className="right-side">
            <div className="text">
              <h3>Summer Sale</h3>
              <p>
                Every White Friday of the summer, a 20% discount on headphones
              </p>
              <Link to={"shop"}>Shop</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
