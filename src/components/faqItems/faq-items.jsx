import React, { useState } from 'react';
import FAQs from 'data/faqs.json';
import FAQItem from '../faqItem/faq-item';

const FAQItems = props => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const firstColumn = FAQs.slice(0,6).map((FAQ, index) => [
    <FAQItem
      question={FAQ.question}
      answer={FAQ.answer}
      selectedQuestion={selectedQuestion}
      setSelectedQuestion={setSelectedQuestion}
    />
  ]);

  const secondColumn = FAQs.slice(6, FAQs.length).map((FAQ, index) => [
    <FAQItem
      question={FAQ.question}
      answer={FAQ.answer}
      selectedQuestion={selectedQuestion}
      setSelectedQuestion={setSelectedQuestion}
    />
  ]);

  return (
    <div>
        <div className="faq-columns-container">
        <div className="faq-column1"> {firstColumn}</div>
        <div className="faq-column2"> {secondColumn}</div>
        </div>
    </div>
  );
};

export default FAQItems;
