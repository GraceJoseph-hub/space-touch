import React from 'react'
import ContactBanner from '../components/contactBanner/ContactBanner';
import ContactForm from '../components/contactForm/ContactForm';

const Contact = () => {
  return <div className="mt-20">
    <ContactBanner />
    <ContactForm />
  </div>;
}

export default Contact