// EmailSender.js
import emailjs from 'emailjs-com';

export const sendEmail = async (formData) => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;

  try {
    const response = await emailjs.send(serviceId, templateId, formData, userId);
    console.log('Email send response:', response);
    return response;
  } catch (error) {
    throw new Error('Email send error: ' + error.message);
  }
};
