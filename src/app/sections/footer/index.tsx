import React from 'react';
import { SiLinkedin } from 'react-icons/si';
import { TbBrandYoutubeFilled } from 'react-icons/tb';
import { FaInstagram } from 'react-icons/fa';
import FooterStyles from './footer.module.scss';

function Footer() {
  return (
    <footer id="Contact" className={FooterStyles.footer}>
      <div className={FooterStyles.social_container}>
        <div className={FooterStyles.social_networks}>
          <p>Social Networks</p>
          <div className={FooterStyles.social_icons_container}>
            <a href="https://www.linkedin.com/in/ayrton-avalos/" target="blank">
              <SiLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@ayrtonfidelavaloscuadrado3870"
              target="blank"
            >
              <TbBrandYoutubeFilled />
            </a>
            <a href="https://www.linkedin.com/in/ayrton-avalos/" target="blank">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className={FooterStyles.contact}>
          <p>Contact</p>
          <p>ayrtonfidel9@gmail.com</p>
          <p>+593 981500751</p>
        </div>
      </div>
      <hr />
      <p className={FooterStyles.reserved}>
        © 2024 Ayrton Fidel Avalos. All right reserved
      </p>
    </footer>
  );
}

export default Footer;
