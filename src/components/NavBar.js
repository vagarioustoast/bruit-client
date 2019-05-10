import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/register">sign up</NavLink>
        </li>
        <li>
          <NavLink to="/login">log in</NavLink>
        </li>
        <li>
          <NavLink to="/logout">log out</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
