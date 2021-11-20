import React from 'react';
import PurplePlusSign from '../../images/svg-2022/purple-plus-sign';
const FAQItem = ({
  question,
  answer,
  selectedQuestion,
  setSelectedQuestion
}) => {
  const isSelected = selectedQuestion === question;
  return (
    <div className="faq-item">
      <p className="faq-item__question">
        {question + ' '}
        <PurplePlusSign onClick={() => setSelectedQuestion(question)} />
      </p>
      <div className="purple-line" />
      {isSelected && (
        <div
          className="faq-item__answer"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  );
};

export default FAQItem;
