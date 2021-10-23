import React from 'react';
import NewsletterSignup from '../components/newsletter-signup';
import DynamicLink from './dynamic-link';
import SocialLinks from 'data/social-links.json';
import Vercel from './vercel';
import LogoIconWhite from '../images/svg-2022/logo-icon-white';
import NavLinks from '../data/nav-links.json';

const Footer = () => (
  <div className="footer__bg">
    <div className="footer">
      <div className="footer__column1">
        <div className="footer__logo">
          <LogoIconWhite />
        </div>
        <p className="footer_registered_text">
          {' '}
          HackBeanpot, Inc. is a registered 501(c)(3) organization.&nbsp;
        </p>
        <DynamicLink className="footer__coc-link" to="/code-of-conduct">
          Code of Conduct
        </DynamicLink>
      </div>
      <div className="footer_column2">
        {NavLinks.slice(0, NavLinks.length - 4).map((link, index) => {
          return (
            <li key={`footer-item-${index}`} className="footer__item">
              <DynamicLink className="footer__link" to={link.path}>
                {link.name}
              </DynamicLink>
            </li>
          );
        })}
      </div>
      <div className="footer_column3">
        {NavLinks.slice(NavLinks.length - 4, NavLinks.length).map(
          (link, index) => {
            return (
              <li key={`footer-item-${index}`} className="footer__item">
                <DynamicLink className="footer__link" to={link.path}>
                  {link.name}
                </DynamicLink>
              </li>
            );
          }
        )}
      </div>
      <div className="footer_column4">
        <NewsletterSignup />
        <ul className="footer__social">
          {SocialLinks.map((item, index) => {
            return (
              <li key={`social-link-${index}`}>
                <DynamicLink to={item.link} className="footer__social-link">
                  <i className={`mdi mdi-36px ${item.iconClass}`} />
                </DynamicLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    <div className="footer__core_team_note" >
      <a>Made with &lt;3 in Beantown</a>
    </div>
  </div>
);

export default Footer;
