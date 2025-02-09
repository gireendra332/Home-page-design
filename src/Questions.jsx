import React, { useState } from "react";
import "./Questions.css";
import vector from './assets/VectorArc.png'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    { question: "Can I change my plan later?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    { question: "What is your cancellation policy?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    { question: "Can other info be added to an invoice?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    { question: "How does billing work?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    { question: "How do I change my account email?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
  ];

  return (
    <div className="faq-container">
        <div className="faq-title-container">
      <h2 className="faq-title">Frequently asked questions</h2>
      <img src={vector} alt="vecto arc" className="Vector"/>
        </div>
      <p className="faq-subtitle">
        Answers to Your Burning Questions: Unveiling the FAQ Section for
        Inquisitive Minds
      </p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className="faq-text">{faq.question}</span>
              <span className="faq-icon">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && faq.answer && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      {/* <div className="faq-image">
        <img src="" alt="" />
      </div> */}
    </div>
  );
};

export default FAQSection;
