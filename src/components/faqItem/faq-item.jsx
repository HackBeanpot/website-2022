import React from 'react';
import PurplePlusSign from '../../images/svg-2022/purple-plus-sign.svg';
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
        <img className="purple-plus-sign" src={PurplePlusSign} alt="plus sign" />
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
