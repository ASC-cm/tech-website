import React from "react";
import '../IncubatorProgram.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <span className="subtitle">Get in touch</span>
        <h1>We would like to hear from you.</h1>
        <p>
          We’re here to help! Whether you have questions about our services,
          need support, or want to learn more about joining our network, feel
          free to reach out through any of the options below.
        </p>
      </div>
      <div className="contact-options">
        <div className="contact-card">
          <div className="icon">💬</div>
          <h3>Chat our support</h3>
          <p>We are here to help</p>
          <a href="https://wa.me/+2347034418309" target="_blank" rel="noopener noreferrer">
            Chat on Whatsapp
          </a>
        </div>
        <div className="contact-card">
          <div className="icon">📧</div>
          <h3>Send us a mail</h3>
          <p>Speak to us via mail</p>
          <a href="anisimon755@yahoo.com">anisimon755@yahoo.com</a>
        </div>
        <div className="contact-card">
          <div className="icon">📞</div>
          <h3>Call us</h3>
          <p>Mon-Fri from 8am to 5pm</p>
          <a href="tel:+2347034418309">+234 7034418309</a>
        </div>
        <div className="contact-card">
          <div className="icon">🔗</div>
          <h3>Social Media</h3>
          <p>Connect with us.</p>
          <div className="social-icons">
            <a href="./" target="_blank" rel="noopener noreferrer">
              🌐
            </a>
            <a href="./" target="_blank" rel="noopener noreferrer">
              📸
            </a>
            <a href="./" target="_blank" rel="noopener noreferrer">
              🎵
            </a>
            <a href="./" target="_blank" rel="noopener noreferrer">
              🐦
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
