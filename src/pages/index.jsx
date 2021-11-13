import React from 'react';
import Layout from '../components/layout';
import Welcome from '../components/sections/welcome';
import ThemeAnnouncement from '../components/sections/theme-announcement';
import FAQ from '../components/sections/faq';
import About from '../components/sections/about';
import Sponsors2021 from 'components/sponsors-2021';
import CovidPrecautions from '../components/sections/covid-precautions';

const App = () => {
  return (
    <Layout>
      <div className="home">
        <Welcome />
        <ThemeAnnouncement />
        {/* <About /> */}
        <CovidPrecautions />
        {/* <FAQ />
        <Sponsors2021 /> */}
      </div>
    </Layout>
  );
};

export default App;
