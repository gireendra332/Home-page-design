import React, { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Hannah Schmitt",
    role: "Lead designer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
  },
  {
    id: 2,
    name: "Hannah Schmitt",
    role: "Lead designer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis.",
  },
  {
    id: 3,
    name: "Hannah Schmitt",
    role: "Lead designer",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "Faucibus venenatis felis id augue sit cursus pellentesque enim. Sed magna eget nibh in turpis.",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">What Our Students Say</h2>

      <div className="slider-container">
        <button className="arrow left-arrow" onClick={prevSlide}>
          ❮
        </button>

        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${
                index === currentIndex ? "active" : "inactive"
              }`}
            >
              <div className="testimonial-bg"></div>
              <img src={testimonial.image} alt={testimonial.name} className="profile-pic" />
              <h3>{testimonial.name}</h3>
              <p className="role">{testimonial.role}</p>
              <p className="quote">❝</p>
              <p className="text">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <button className="arrow right-arrow" onClick={nextSlide}>
          ❯
        </button>
      </div>

      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
