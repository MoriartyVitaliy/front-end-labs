import React, { useEffect, useRef, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { handleCardMouseMove, handleCardMouseLeave } from '../Utils/MouseInteraction';

function About() {
  const counters = useRef([]);
  const [cardTransforms, setCardTransforms] = useState([]);

  const cardData = [
    { icon: 'user', color: 'white', count: 11, description: 'Partners' },
    { icon: 'check', color: 'green', count: 24, description: 'Projects' },
    { icon: 'smile', color: 'yellow', count: 32, description: 'Happy Clients' },
    { icon: 'coffee', color: 'white', count: 100, description: 'Meetings' },
  ];

  useEffect(() => {
    setCardTransforms(Array(cardData.length).fill({ x: 0, y: 0 }));
    const options = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const countTo = parseInt(target.getAttribute('data-count'), 10);
          const duration = 8000;
          let start = 0;
          const increment = countTo / (duration / 14);

          const animateCount = () => {
            start += increment;
            if (start < countTo) {
              target.innerText = `${Math.floor(start)}+`;
              requestAnimationFrame(animateCount);
            } else {
              target.innerText = `${countTo}+`;
            }
          };

          animateCount();
          observer.unobserve(target);
        }
      });
    }, options);

    counters.current.forEach((counter) => observer.observe(counter));
    return () => observer.disconnect();
  }, [cardData.length]);

  const handleCardMove = (e, index) => {
    const newTransform = handleCardMouseMove(e);
    setCardTransforms((prevTransforms) =>
      prevTransforms.map((transform, i) => (i === index ? newTransform : transform))
    );
  };

  const handleCardLeave = (index) => {
    setCardTransforms((prevTransforms) =>
      prevTransforms.map((transform, i) => (i === index ? handleCardMouseLeave() : transform))
    );
  };

  return (
    <section id="about">
      <div className="row">
        {cardData.map((card, index) => (
          <div className="column" key={index}>
            <div
              className="card"
              onMouseMove={(e) => handleCardMove(e, index)}
              onMouseLeave={() => handleCardLeave(index)}
              style={{
                transform: `rotateX(${cardTransforms[index]?.x}deg) rotateY(${cardTransforms[index]?.y}deg)`,
                transition: 'transform 0.1s ease',
              }}
            >
              <p><i style={{color:`${card.color}`}} className={`fa fa-${card.icon}`}></i></p>
              <h3 ref={(el) => (counters.current[index] = el)} data-count={card.count} style={{ fontSize: '40px', margin: '0' }}>0</h3>
              <p className="description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
