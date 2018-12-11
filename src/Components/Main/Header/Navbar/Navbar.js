import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">
            Red room
          </a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Цены</a>
            </li>
            <li>
              <a href="#">Оборудование</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
