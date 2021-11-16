import React from 'react';
const FAQItem = ({
  question,
  answer,
  selectedQuestion,
  setSelectedQuestion
}) => {
  const isSelected = selectedQuestion === question;
  return (
    <div className="faq-item">
      <p
        className="faq-item__question"
        onClick={() => setSelectedQuestion(question)}
      >
        {question}
      </p>
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
