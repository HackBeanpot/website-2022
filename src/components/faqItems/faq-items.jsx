import React, { useState } from 'react';
import Masonry from 'react-masonry-component'; // https://github.com/eiriklv/react-masonry-component
import FAQs from 'data/faqs.json';

import LeafNode from 'images/svg/leaf-node.jsx';
import FAQItem from '../faqItem/faq-item';

const masonryOptions = {
  columnWidth: '.faq-sizer',
  gutter: '.faq-gutter-sizer', // Horizontal margin for masonry columns
  itemSelector: '.faq-item',
  percentPosition: true
};

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
      <div className="faq-container">
        <div className="faq-columns-container">
        <div className="faq-column1"> {firstColumn}</div>
        <div className="faq-column2"> {secondColumn}</div>
        </div>
      </div>
    </div>
  );
};

export default FAQItems;
