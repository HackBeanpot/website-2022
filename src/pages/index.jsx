import React, {useState} from 'react';

import Layout from '../components/layout';
import Welcome from '../components/sections/welcome';
import ThemeAnnouncement from '../components/sections/theme-announcement';
import FAQ from '../components/sections/faq';
import AboutItem from '../components/aboutItem/about-item';
import Sponsors2021 from 'components/sponsors-2021';

export default () => (
  <Layout>
    <App />
  </Layout>
);

const App = () => {

  const [isDarkTheme, updateIsDarkTheme] = useState(true);

  return (
    <div>
      <div className={isDarkTheme ? "home" : "home light"}>
        <Welcome isDarkTheme={isDarkTheme} updateIsDarkTheme={updateIsDarkTheme} />
        <ThemeAnnouncement /> 
        <AboutItem/>
        <FAQ />
        <Sponsors2021 />
      </div>
    </div>
  );
};
