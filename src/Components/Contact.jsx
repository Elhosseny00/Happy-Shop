import { Link } from "react-router-dom";
import "../Style-files/contact.css";
import ScrollBtn from "./ScrollBtn";

export default function Contact() {
  const hundleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <ScrollBtn />
      <div className="contact">
        <div className="container">
          <div className="intro">
            <div className="text">
              <h2>Contact happy shop</h2>
              <p>
                Contact us and share your ideas and any problem you face. Just
                contact us and we will be happy
              </p>
            </div>
          </div>
          <div className="ourinfo">
            <ul>
              <li>
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>
                <p>Phone</p>
                <Link>00201060155873</Link>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <p>Address</p>
                <Link>14 ST, Cairo EGY</Link>
              </li>
              <li>
                <span>
                  <i className="fa-brands fa-instagram"></i>
                </span>
                <p>instagram</p>
                <Link>follow us</Link>
              </li>
              <li>
                <span>
                  <i className="fa-brands fa-linkedin-in"></i>
                </span>
                <p>linkedIn</p>
                <Link>follow us</Link>
              </li>
              <li>
                <span>
                  <i className="fa-brands fa-facebook-f"></i>
                </span>
                <p>facebook</p>
                <Link>follow us</Link>
              </li>
              <li>
                <span>
                  <i className="fa-brands fa-x-twitter"></i>
                </span>
                <p>twitter</p>
                <Link>follow us</Link>
              </li>
            </ul>
          </div>
          <div className="form">
            <h4>get in touch!</h4>
            <form onSubmit={hundleOnSubmit}>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
