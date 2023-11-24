import { Link } from "react-router-dom";
import "../Style-files/signup.css";
import { useState } from "react";
export default function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  const [accept, setAccept] = useState(false);

  const hundleValidate = (e) => {
    e.preventDefault();
    setAccept(true);
  };
  return (
    <div className="login">
      <div className="container">
        <div className="parent">
          <div className="log-wrapper">
            <div className="form-side">
              <h4>SignUp</h4>
              <form onSubmit={hundleValidate}>
                <input
                  type="text"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                {accept && (userName === "" || userName.length < 4) && (
                  <p className="error">
                    Usename is required and must be more than 4 letters
                  </p>
                )}
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {accept && email === "" && (
                  <p className="error">Email Is Requaired</p>
                )}
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {accept &&
                  !password.includes(
                    "/^(?=.*[A-Za-z])(?=.*d)(?=.*[@#$%])[A-Za-zd@#$%]{8,}$/"
                  ) && (
                    <p className="error">
                      Password must be 8 characters with one uppercase, one
                      lowercase, and one special character.
                    </p>
                  )}
                <input
                  type="password"
                  placeholder="Repeat Password "
                  onChange={(e) => setRPassword(e.target.value)}
                />
                {accept && password !== rPassword && (
                  <p className="error">Password dose't match</p>
                )}
                <button type="submit">SignUp</button>
              </form>
              <div className="other">
                <div className="or">OR</div>
                <ul>
                  <li>
                    <Link>
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <i className="fa-brands fa-google"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-side">
              <div className="content">
                <div className="text">
                  <div className="logo">
                    <p>
                      Happy <br /> Shop
                    </p>
                  </div>
                  <div className="message">
                    <h4>Join us now</h4>
                  </div>
                </div>
                <div className="new-acc">
                  <p>already have an account?</p>
                  <Link to={"/login"}>LogIn</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
