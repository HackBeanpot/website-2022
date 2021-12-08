import React from 'react';
import Layout from '../components/layout';
import Welcome from '../components/sections/welcome';
import ThemeAnnouncement from '../components/sections/theme-announcement';
import FAQ from '../components/sections/faq';
import About from '../components/sections/about';
import CovidPrecautions from '../components/sections/covid-precautions';
import LaunchSequence from '../components/sections/launch-sequence';
import Testimonials from '../components/sections/testimonials';
import Sponsors2022 from '../components/sections/sponsors-2022'

const App = () => {
  return (
    <Layout>
      <div className="home">
        <Welcome />
        <ThemeAnnouncement />
        <About />
        <CovidPrecautions />
        <Sponsors2022 />
        <LaunchSequence />
        {/* <FAQ />
        <FAQ />
        {/* <Testimonials /> */}
        {/*
         <FAQ />
        <Sponsors2021 /> */}
      </div>
    </Layout>
  );
};

export default App;
