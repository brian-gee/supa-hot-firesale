import React from "react";
import Auth from "../../utils/auth";
import { TOGGLE_MODAL } from "../../utils/actions";
import { Link } from "react-router-dom";
import logo from "./../../assets/SHFSW.png"
function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1 nav-li">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login" onClick={TOGGLE_MODAL}>
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
              
        <Link to="/">
        <img alt="logo" className="logo"src={logo}></img>
        </Link>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
