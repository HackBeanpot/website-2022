import React from 'react';
import PrimaryCta from '../primary-cta';
import FrequentlyAskedQuestionsItems from 'components/faqItems/faq-items';
import FaqMercury from '../../images/svg-2022/faq-mercury.svg';
import ContactAstronaut from '../../images/svg-2022/contact-astronaut.svg';
import ContactJupiterFaded from '../../images/svg-2022/contact-jupiter-op-50.svg';
import ContactMoonFaded from '../../images/svg-2022/contact-moon-op-50.svg';

const FrequentlyAskedQuestions = () => (
    <section id="faq" className="faq">
        <div className="faq-container">
            <h2 className="faq__title">FAQ</h2>
            <FrequentlyAskedQuestionsItems />
            <div className="faq__cta-group">
                <p className="faq__cta-label">Don't see your question? <br /> Reach out to us at team@hackbeanpot.com!</p>
                <PrimaryCta link="mailto:team@hackbeanpot.com" textDescription="Contact us" />
            </div>
        </div>
        <img className="faq-mercury" src={FaqMercury} alt="planet mercury" />
        <img className="contact-astronaut" src={ContactAstronaut} alt="floating astronaut" />
        <img className="contact-jupiter-faded" src={ContactJupiterFaded} alt="planet jupiter, but a bit faded" />
        <img className="contact-moon-faded" src={ContactMoonFaded} alt="the moon, but a bit faded" />
    </section>
);

export default FrequentlyAskedQuestions;