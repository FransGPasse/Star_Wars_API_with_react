import { NavLink } from "react-router-dom";
import logo from "../images/Star_Wars_logo.png";

function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink to="/">
        <a href="">
          <img src={logo} alt="Star Wars-logo" className="logo" />
        </a>
      </NavLink>

      <div className="nav-link-wrapper">
        <NavLink to="/people" className="link">
          List of all characters
        </NavLink>
        <NavLink to="/films" className="link">
          List of all films
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
