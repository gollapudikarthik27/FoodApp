import { useState } from "react";
import { LOGO_URL } from "./Utils/Constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("login");

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>Cart</li>
          {
            <button
              className="btn-login"
              onClick={() => {
                btnName == "login" ? setbtnName("logout") : setbtnName("login");
              }}
            >
              {btnName}
            </button>
          }
        </ul>
      </div>
    </div>
  );
};
export default Header;
