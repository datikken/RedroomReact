import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faVk
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer fa">
      <footer className="page-footer">
        <h6 className="red-text">Мы в соц. сетях:</h6>
          <ul className="footer__socialMedia">
            <li className="footer__socialMedia__li">
              <a href="https://www.instagram.com/tikkentikken" target="_blank">
                <FontAwesomeIcon icon={faInstagram} inverse />
              </a>
            </li>
            <li className="footer__socialMedia__li">
              <a href="https://www.facebook.com/tikken.tikken.3" target="_blank">
                <FontAwesomeIcon icon={faFacebook} inverse />
              </a>
            </li>
            <li className="footer__socialMedia__li">
              <a href="https://vk.com/datikken" target="_blank">
                <FontAwesomeIcon icon={faVk} inverse />
              </a>
            </li>
          </ul>
      </footer>
    </div>
  );
};

export default Footer;
