import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Style-files/nav.css";
import { useSelector } from "react-redux";
export default function Nav() {
  const cart = useSelector((state) => state.cart);
  const links = [
    { name: "Home", to: "/" },
    { name: "Shop", to: "shop" },
    { name: "About", to: "about" },
    { name: "Contact", to: "contact" },
  ];
  const [activeLink, setActiveLink] = useState("Home");
  const hundleActiveLinks = (link) => {
    setActiveLink(link);
    setNavOpen(false);
  };

  const [navOpen, setNavOpen] = useState(false);
  const burgerIcon = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const clickOutSide = (e) => {
      if (navOpen) {
        if (!e.target.closest(".nav-links") && !e.target.closest(".btn")) {
          setNavOpen(false);
        }
      }
    };
    window.addEventListener("click", clickOutSide);
    return () => {
      window.removeEventListener("click", clickOutSide);
    };
  }, [navOpen]);

  return (
    <header>
      <div className="left-side">
        <div className="logo">
          <Link to={"/"}>Happy Shop</Link>
        </div>
        <nav>
          <div className={`nav-links ${navOpen ? "showme" : ""}`}>
            <ul className="mainlinks">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className={activeLink === link.name ? "active" : ""}
                    onClick={() => hundleActiveLinks(link.name)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div className="right-btns">
        <div className="login-and-cart">
          <Link to={"login"} className="login">
            Log in
          </Link>
          <Link to={"cart"} className="cart">
            {cart.length >= 1 ? <span className="cart-active"></span> : null}
            <i className="fa-solid fa-bag-shopping"></i>
          </Link>
        </div>
        <div className={`btn ${navOpen ? "burger" : ""}`} onClick={burgerIcon}>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
      </div>
    </header>
  );
}
