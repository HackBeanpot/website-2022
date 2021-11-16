import React from 'react';
const FAQItem = ({question, answer}) => {
        return (<div>
          <p className="faq-item__question">{question}</p>
          {/* <div
            className="faq-item__answer"
            dangerouslySetInnerHTML={{ __html: answer }}
          /> */}
        </div>
        )
}
  
  export default FAQItem;