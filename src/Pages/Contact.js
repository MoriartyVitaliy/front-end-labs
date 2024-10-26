import React, { useState } from 'react';
import styles from '../Style/Contact.module.css'; // Подключаем модуль стилей
import { handleCardMouseMove, handleCardMouseLeave } from '../Utils/MouseInteraction';
import { sendEmail } from '../Utils/EmailSender';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [cardTransform, setCardTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const newTransform = handleCardMouseMove(e);
    setCardTransform(newTransform);
  };

  const handleMouseLeave = () => {
    setCardTransform(handleCardMouseLeave());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     try{
        await sendEmail(formData);
        alert('Email sent successfully');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
     } catch (error) {
       alert('Failde to send email. Please try again later', error);
       console.log('Error:', error);
     }
  };

  return (
    <section id="contact">
      <div className={styles.contactContainer}>
        <div className={styles.contactFormSection}>
          <h2>Contact Page</h2>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ minWidth: '300px', maxWidth: '600px' }}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ minWidth: '300px', maxWidth: '600px' }}
              />
            </div>
            <div>
              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ height: '300px', minWidth: '300px', maxWidth: '600px' }}
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
        <div
          className={styles.contactImageSection}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `rotateX(${cardTransform.x}deg) rotateY(${cardTransform.y}deg)`,
            transition: 'transform 0.1s ease',
          }}
        >
          <div className={styles.card}>
            <img src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg" alt="Your Photo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
