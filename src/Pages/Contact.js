const handleSubmit = (e) => {
  e.preventDefault();

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;

  emailjs.send(serviceId, templateId, formData, userId)
    .then((response) => {
      alert('Email sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      alert('Failed to send email. Please try again later.');
      console.error('Email send error:', error);
    });
};