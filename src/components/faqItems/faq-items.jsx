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
  const childElements = FAQs.map((FAQ, index) => [
      <FAQItem
        question={FAQ.question}
        answer={FAQ.answer}
        selectedQuestion={selectedQuestion}
        setSelectedQuestion={setSelectedQuestion}
      />
  ]);

  return (
    <div className="faq-columns-container">
      <div className="faq-column1"> {childElements}</div>
      <div className="faq-column2"> {childElements}</div>
    </div>
  );
};

export default FAQItems;
