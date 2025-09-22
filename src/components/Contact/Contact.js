import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram,FaFacebook} from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaF } from "react-icons/fa6";

export default function Contact() {
 const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5r01vhl', 'template_xkra9ir', form.current, {
        publicKey: 'JePfsed_J1dDGCxsV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
            alert('Message sent successfully!');
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            alert('Failed to send message. Please try again.');
            console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">
        Feel free to reach out for collaborations or just a friendly hello 👋
      </p>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="icon" /> saad004ahmad@gmail.com
          </div>
          <div className="info-item">
            <FaPhone className="icon" /> +92 301 6439786
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" /> Gujranwala, Pakistan
          </div>
          <div className="social-links">
            <a href="https://github.com/Saaad-Ahmad" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/saad-ahmad-21ab6b357/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
             <a href="https://www.facebook.com/saad.ahmad.833994" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/s.aa.d_ahmad/?hl=en" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
