import React from 'react';
import PrimaryCta from '../primary-cta';
import FAQItems from 'components/faqItems/faq-items';

const FAQ = () => (
    <section id="faq" className="faq">
        <div className="faq-container">
            <h2 className="faq__title">FAQ</h2>
            <FAQItems />
            <div className="faq__cta-group">
                <p className="faq__cta-label">Don't see your question? Reach out to us at team@hackbeanpot.com!</p>
                <PrimaryCta link="mailto:team@hackbeanpot.com" textDescription="Contact us" />
            </div>
        </div>
    </section>
);

export default FAQ;