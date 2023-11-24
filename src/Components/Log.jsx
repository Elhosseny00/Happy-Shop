import { Link } from "react-router-dom";
import "../Style-files/logIn.css";
export default function Log() {
  const validateForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <div className="container">
        <div className="parent">
          <div className="log-wrapper">
            <div className="form-side">
              <h4>LogIn</h4>
              <form onSubmit={validateForm}>
                <input type="text" placeholder="Username,Email, Or Phone" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
                <Link>Forgot Password?</Link>
              </form>
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
                    <h4>Welcome back</h4>
                  </div>
                </div>
                <div className="new-acc">
                  <p>Don't have an account</p>
                  <Link to={"/signup"}>SignUp</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
