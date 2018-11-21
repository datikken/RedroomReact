import React from 'react';

const Navbar = () => {
        return (
           <div className="navbar-fixed"> 
            <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Red Room Rec.</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">На главную</a></li>
                <li><a href="badges.html">Работы</a></li>
                <li><a href="collapsible.html">О нас</a></li>
              </ul>
            </div>
          </nav>
          </div>
        )
    }

export default Navbar;