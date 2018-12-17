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
          <a href="https://www.instagram.com/red_room_rec/" target="blank"><FontAwesomeIcon icon={faInstagram} inverse /></a>
          <a href="https://www.facebook.com/tikken.tikken.3" target="blank"><FontAwesomeIcon icon={faFacebook} inverse /></a>
          </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Полезные ссылки:</h5>
          <ul>
          <li><a class="grey-text text-lighten-3" target="blank" href="http://wikisound.org/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0">Энциклопедия звука - Wikisound</a></li>
          <li><a class="grey-text text-lighten-3" target="blank" href="http://www.xssracademy.com/ru/">Онлайн школа - XSSR Academy</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      Поддержка сайта: <br/>tikken23@gmail.com
      </div>
    </div>
  </footer>
  );
};

export default Footer;
