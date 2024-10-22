import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_u0tn6id',
      'template_59agd7g', 
      formData,
      '0UXOikTMuHvWBN0Pu' 
    )
    .then((response) => {
      alert('Email sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      alert('Failed to send email. Please try again later.');
      console.error('Email send error:', error);
    });
  };

  return (
    <div>
      <h2>Contact Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
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
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
