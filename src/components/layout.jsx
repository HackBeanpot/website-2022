import React, { useState } from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/footer';
import Nav from '../components/nav';
import NavMobile from '../components/nav-mobile';
import favicon from '../pages/favicon.png';
import '../../node_modules/@mdi/font/css/materialdesignicons.min.css';
import 'styles/main.scss';

// Shows the header and footer on every page
const Layout = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  
  return <div className={`parent ${isDarkTheme ? "" : "light"}`}>
    <Helmet
      title="HackBeanpot 2021"
      meta={[
        {
          name: 'description',
          content:
            'An independently-run Boston hackathon for curious students, hackers, makers, and beginners.'
        },
        {
          name: 'keywords',
          content: 'hackbeanpot, hackathon, boston, 2021, students, hackers, makers, beginners, hack, beanpot, virtual, online, free, learning, learn, computer science, programming, program, coding, code, projects, technical, makeathon, coding, java, python, react, college, high school, tech scene, technology, tech, stem, education, engineering, software engineer, diversity in tech, technical skills, conference, workshops, tech industry, professionals'
        },
        {
          name: 'theme-color',
          content: '#A4DBE8'
        },
        {
          property: 'og:title',
          content: 'HackBeanpot 2022'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:image',
          content: 'https://hackbeanpot.com/website-preview'
        },
        {
          property: 'og:url',
          content: 'https://hackbeanpot.com/'
        }
      ]}
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
    />
    <Nav setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
    <NavMobile />
    <main>{children}</main>
    <Footer />
  </div>
};

export default Layout;
