import { Link } from "react-router-dom";
import "../Style-files/about.css";
import ScrollBtn from "./ScrollBtn";

export default function About() {
  return (
    <>
      <ScrollBtn />
      <div className="about">
        <div className="container">
          <div className="intro">
            <div className="text">
              <h2>About us</h2>
              <p>A full services about e-commerce since 2015</p>
              <Link>cal(01050166891)</Link>
            </div>
          </div>
          <div className="ourinfo">
            <div className="imgs-side">
              <div className="img-box">
                <img src={require("../Images/about1.webp")} alt="img" />
              </div>
              <div className="img-box">
                <img src={require("../Images/about2.webp")} alt="img" />
              </div>
              <div className="img-box">
                <img src={require("../Images/about3.webp")} alt="img" />
              </div>
              <div className="img-box">
                <img src={require("../Images/about4.webp")} alt="img" />
              </div>
            </div>
            <div className="text-side">
              <h3>we are a full services e-commerce shop</h3>
              <p>
                Welcome to happy shop. We have been specializing in the world of
                e-commerce since 2015. We have the largest e-commerce website in
                the Middle East and Europe. We offer you attractive prices
                for high quality.
              </p>
              <h4>our goal</h4>
              <p>
                Our goal is to make you happy by ordering a product without the
                hassle of going down to order it or buying it from a store. You
                can browse any product you want through us. We guarantee you the
                safety of the product, the price, and speed of delivery.
              </p>
              <ul>
                <li>
                  <Link>
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i className="fa-brands fa-x-twitter"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="services">
            <div className="header">
              <h3>what we do?</h3>
            </div>
            <div className="cards">
              <div className="card">
                <div className="img-box">
                  <img src={require("../Images/free-shipping.png")} alt="img" />
                </div>
                <h4>free shipping</h4>
              </div>
              <div className="card">
                <div className="img-box">
                  <img src={require("../Images/discount.png")} alt="img" />
                </div>
                <h4>offers & discounts throughout the year</h4>
              </div>
              <div className="card">
                <div className="img-box">
                  <img
                    src={require("../Images/customer-service.png")}
                    alt="img"
                  />
                </div>
                <h4>customer service & receiving orders throughout the day</h4>
              </div>
              <div className="card">
                <div className="img-box">
                  <img src={require("../Images/secure.png")} alt="img" />
                </div>
                <h4>information security in electronic payment</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
