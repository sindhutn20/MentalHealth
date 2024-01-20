import React from 'react';
import './Contact.css'; // Make sure to adjust the path to your CSS file

const ContactForm = () => {
  return (
    <div className="contact-container">
      <form action="https://api.web3forms.com/submit" method="POST" className="contact-left">
        <div className="contact-left-title">
          <h2>Contact us here</h2>
          <hr />
        </div>
        <input type="hidden" name="access_key" value="de85d3a6-6f70-4f06-bcae-9852d702b1dc" />
        <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required />
        <input type="email" name="email" placeholder="Your email" className="contact-inputs" required />
        <textarea name="message" placeholder="Your message" className="contact-inputs required"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
