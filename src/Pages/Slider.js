import React from 'react';
import Slider from 'react-slick';

function SliderSection() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true,
      arrows: false
    };
  
    return (
      <section id="slider-section">
        <h2 className="slider-title">Testimonials</h2>
        <Slider {...settings}>
          <div className="slide-item">
            <p className="testimonial-text">"This project was a game-changer for our business. The attention to detail and creativity were outstanding!"</p>
            <p className="author-name">— John Doe</p>
          </div>
          <div className="slide-item">
            <p className="testimonial-text">"Amazing work! Delivered on time and exceeded our expectations. Highly recommend."</p>
            <p className="author-name">— Jane Smith</p>
          </div>
          <div className="slide-item">
            <p className="testimonial-text">"A fantastic experience from start to finish. The quality and professionalism are top-notch!"</p>
            <p className="author-name">— Emily Johnson</p>
          </div>
        </Slider>
      </section>
    );
  }
  
  export default SliderSection;