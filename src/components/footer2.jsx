import React from 'react';
import NewsletterSignup from '../components/newsletter-signup';
import DynamicLink from './dynamic-link';
import SocialLinks from 'data/social-links.json';
import Vercel from './vercel';
import LogoIconWhite from '../images/svg-2022/logo-icon-white';

const Footer = () => (
  <div className="footer">
    <div className="footer__column1">
      <div className="footer__logo">
        <LogoIconWhite />
      </div>
      <p>HackBeanpot, Inc. is a registered 501(c)(3) organization.&nbsp;</p>
      <DynamicLink className="footer__coc-link" to="/code-of-conduct">
        Code of Conduct
      </DynamicLink>
    </div>
  </div>
);

export default Footer;
