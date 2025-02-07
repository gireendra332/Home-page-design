import React, { useRef } from 'react'
import './ScrollText.css'
import leftIcon from './assets/Vector (Stroke) (1).png'
import rightIcon from './assets/Vector (Stroke).png'

const ScrollText = () => {
  const scrollRef = useRef(null)
  const scroll = direction => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += direction === 'left' ? -100 : 100
    }
  }
  return (
    <div className="trending-section">
      <div className="trending-topics-wrapper">
        <button className="scroll-arrow left" onClick={() => scroll('left')}>
          <img src={leftIcon} alt="Left Arrow" />
        </button>
        <div className="trending-topics" ref={scrollRef}>
          <span>Trending Now</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Python</span>
          <span>Bootstrap</span>
          <span>Java</span>
          <span>C</span>
          <span>C++</span>
          <span>React Js</span>
          <span>Node Js</span>
          <span>Web Development</span>
          <span>Practice Problem</span>
          <span>Test</span>
        </div>
        <button className="scroll-arrow right" onClick={() => scroll('right')}>
          <img src={rightIcon} alt="Right Arrow" />
        </button>
      </div>
    </div>
  )
}

export default ScrollText
