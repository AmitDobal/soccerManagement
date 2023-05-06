import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper  purple lighten-1">
          <a href="/" className="brand-logo">
            Soccer Management
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
