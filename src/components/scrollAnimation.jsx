import React, { useEffect, useRef } from 'react';
import 'animate.css'; // Import animate.css for animations

const ScrollAnimation = ({ children }) => {
  const observer = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;

          if (element.tagName === 'H1') {
            console.log('Animating H1', element); // Debugging
            element.classList.add('animate__animated', 'animate__slideInRight', 'animate__slow');
          } else if (element.tagName === 'H2') {
            element.classList.add('animate__animated', 'animate__slideInLeft', 'animate__slower');
          } else if (element.tagName === 'P') {
            element.classList.add('animate__animated', 'animate__slideInRight', 'animate__slower');
          } else if (element.tagName === 'A') {
            element.classList.add('animate__animated', 'animate__zoomIn', 'animate__slow');
          }

          // Stop observing the element after animation is triggered
          observer.current.unobserve(element);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.3, // Trigger animation when 30% of the element is visible
    });

    // Select elements
    const titleText = document.querySelector('h1');
    const headings = document.querySelectorAll('h2');
    const paragraphs = document.querySelectorAll('p');
    const button = document.querySelector('a');

    if (titleText) observer.current.observe(titleText);
    headings.forEach((heading) => observer.current.observe(heading));
    paragraphs.forEach((paragraph) => observer.current.observe(paragraph));
    if (button) observer.current.observe(button);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default ScrollAnimation;
