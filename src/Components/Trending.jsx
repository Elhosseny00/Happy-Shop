import { Link } from "react-router-dom";
import "../Style-files/home.css";

export default function Trending() {
  return (
    <div className="trending">
      <div id="item-0">
        <div className="img">
          <img src={require("../Images/T-shirt.webp")} alt="img" />
        </div>
        <div className="text">
          <h4>enjoy</h4>
          <h3>With</h3>
          <h2>Clothes</h2>
          <Link to={'shop'}>Explore</Link>
        </div>
      </div>
      <div id="item-1">
        <div className="img">
          <img src={require("../Images/Smart-Watch.webp")} alt="img" />
        </div>
        <div className="text">
          <h4>Now</h4>
          <h3>Wear</h3>
          <h2>Watch</h2>
          <Link to={'shop'}>Explore</Link>
        </div>
      </div>
      <div id="item-2">
        <div className="img">
          <img src={require("../Images/Laptop.webp")} alt="img" />
        </div>
        <div className="text">
          <h4>trend</h4>
          <h3>devices</h3>
          <h2>laptop</h2>
          <Link to={'shop'}>Explore</Link>
        </div>
      </div>
      <div id="item-3">
        <div className="img">
          <img src={require("../Images/Playstation.webp")} alt="img" />
        </div>
        <div className="text">
          <h4>Best</h4>
          <h3>gaming</h3>
          <h2>console</h2>
          <Link to={'shop'}>Explore</Link>
        </div>
      </div>
      <div id="item-4">
        <div className="img">
          <img src={require("../Images/Speaker.webp")} alt="img" />
        </div>
        <div className="text">
          <h4>new</h4>
          <h3>JBL</h3>
          <h2>Speaker</h2>
          <Link to={'shop'}>Explore</Link>
        </div>
      </div>
      <div id="item-5">
        <div className="img">
          <img src={require("../Images/smart-TV.webp")} alt="img" />
        </div>
        <div className="text">
          <h4>enjoy</h4>
          <h3>with</h3>
          <h2>smart</h2>
          <Link to={'shop'}>Explore</Link>
        </div>
      </div>
    </div>
  );
}
