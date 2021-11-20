import React from 'react';
import PrimaryCta from '../primary-cta';
import FAQItems from 'components/faqItems/faq-items';
import FaqMercury from '../../images/svg-2022/faq-mercury';
import FaqUranusFaded from '../../images/svg-2022/faq-uranus-faded';
import ContactAstronaut from '../../images/svg-2022/contact-astronaut';
import ContactJupiterFaded from '../../images/svg-2022/contact-jupiter-faded';
import ContactMoonFaded from '../../images/svg-2022/contact-moon-faded';

const FAQ = () => (
    <section id="faq" className="faq">
  
        <div className="faq-container">
            <h2 className="faq__title">FAQ</h2>
            <FAQItems />
            <div className="faq__cta-group">
                <p className="faq__cta-label">Don't see your question? <br /> Reach out to us at team@hackbeanpot.com!</p>
                <PrimaryCta link="mailto:team@hackbeanpot.com" textDescription="Contact us" />
            </div>
        </div>
        <FaqMercury />
        <ContactAstronaut />
        <ContactJupiterFaded />
        <ContactMoonFaded />
    </section>
);

export default FAQ;