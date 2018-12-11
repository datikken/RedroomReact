import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faVk
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Мы в соц. сетях:</h5>
          <a href="https://vk.com/datikken" target="blank"><FontAwesomeIcon icon={faVk} inverse /></a>
          <a href="https://www.instagram.com/tikkentikken/" target="blank"><FontAwesomeIcon icon={faInstagram} inverse /></a>
          <a href="https://www.facebook.com/tikken.tikken.3" target="blank"><FontAwesomeIcon icon={faFacebook} inverse /></a>
          </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Ссылки:</h5>
          <ul>
            <li><a class="grey-text text-lighten-3" href="#!">1 2 3</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      © 2018 Copyright Text
      </div>
    </div>
  </footer>
  );
};

export default Footer;
