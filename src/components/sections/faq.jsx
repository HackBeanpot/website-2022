import React from 'react';
import PrimaryCta from '../primary-cta';
import FAQItems from 'components/faqItems/faq-items';
import FourFootsteps from 'images/svg/four-footsteps';

const FAQ = () => (
    <section id="faq" className="faq">
        <div className="faq__footsteps">
            <FourFootsteps />
        </div>
        <div className="container">
            <h2 className="faq__title">FAQ</h2>
            <FAQItems />
            <div className="faq__cta-group">
                <p className="faq__cta-label">Don't see your question?</p>
                <PrimaryCta link="mailto:team@hackbeanpot.com" textDescription="Let us know!" />
            </div>
        </div>
    </section>
);

export default FAQ;