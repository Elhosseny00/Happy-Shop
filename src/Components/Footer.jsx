import { Link } from "react-router-dom";
import "../Style-files/footer.css";
export default function Footer() {
  const validate = (e) => {
    e.pereventDefulat();
  };
  return (
    <footer>
      <div className="content">
        <div className="main-info">
          <div className="logo">
            <Link to={"/"}>Happy Shop</Link>
          </div>
          <div className="p-social">
            <p>
              Shopping has another meaning with the happy shop. Visit us and you
              will find what makes you happy.
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
        <div className="quick-links">
          <h4>quick links</h4>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"shop"}>Shop</Link>
            </li>
            <li>
              <Link to={"about"}>About</Link>
            </li>
            <li>
              <Link to={"contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"login"}>Log In</Link>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h4>contact us</h4>
          <ul>
            <li>
              <span>phone:</span>
              <p>00201060155873</p>
            </li>
            <li>
              <span>address:</span>
              <p>14 ST, Cairo EGY</p>
            </li>
          </ul>
        </div>
        <div className="subscribe">
          <h4>subscribe </h4>
          <div className="sub">
            <h3>for latest news & updates</h3>
            <div className="input">
              <input type="email" placeholder="Your Email" />
              <button type="submit" onSubmit={validate}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
