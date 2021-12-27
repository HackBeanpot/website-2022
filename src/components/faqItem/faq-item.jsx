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
      <button className="faq-item__question" onClick={() => isSelected ? setSelectedQuestion(null) : setSelectedQuestion(question)}>
        {question}
        <PurplePlusSign/>
      </button>
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
