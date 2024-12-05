import React from 'react';
import useTypingEffect from '../useTypingEffect'; 
import { useNavigate } from "react-router-dom";

const phrases = [
  "Developers can now scale faster.",
  "Startups can now scale faster.",
];

const Home = () => {
  const displayText = useTypingEffect(phrases);
  const navigate = useNavigate(); 

  const goToLogin = () => {
    navigate("/Login");
  };

  return (
    <>
      <section className="hero">
        <div className="text-content">
          <div id="dynamicText">{displayText}</div>
          <h3>Connecting <span className="highlight">Top Developers</span> with Global Projects,<br /> fueling Innovation and Success for all.</h3>
          <div className="buttons">
            <a href='./Developer Incubator' className="btn primary">Developer Incubator</a>
            <button onClick={goToLogin} className="btn secondary">Login</button>
          </div>
        </div>
        <div className="images">
          <img src="images/articial.png" alt="Developer 1" className="circular" />
          <img src="images/TECH class.jpeg" alt="Developer 4" className="pointed pointed-left" />
          <img src="images/DevOps.png" alt="Developer 2" className="pointed pointed-right" />
          <img src="images/machine learning.png" alt="Developer 3" className="circular" />
        </div>
      </section>

      <section className="companies-section">
        <h3 className="company-text">We Help Companies Like</h3>
        <div className="logo-section">
          <div className="logo-container">
            <img src="images/tech.jpeg" alt="Wix" />
            <img src="images/satify icon.png" alt="Airbnb" />
            <img src="images/logo.jpeg" alt="Spotify" />
            <img src="images/Logos.jpg" alt="Sendoso" />
            <img src="images/wedigraf icon.png" alt="Mouseflow" />
            <img src="images/comp.png" alt="Wise" />
            <img src="images/double g.png" alt="Alan" />
            <img src="images/whatsapp.png" alt="Lyft" />
            <img src="images/cyber security.jpeg" alt="Mastercard" />
            <img src="images/bank card.png" alt="Lyft" />
            <img src="images/wedigraf icon.png" alt="Mastercard" />
            <img src="images/mastercard.png" alt="Lyft" />
            <img src="images/unknown card.png" alt="Mastercard" />
          </div>
        </div>
      </section>
      <section className="developer-pool">
        <div className="content">
          <h2>Join Our Developer Pool</h2>
          <p>At Asdin.net, we connect the brightest developers with startups worldwide.</p>
          <a href="./Developer Incubator" className="button">Take our Developer Test</a>
        </div>
        <div className="image">
          <img src="images/tech teach.jpeg" alt="Developer working" />
        </div>
      </section>

      <section className="developer-pool1">
        <div className="image1">
          <img src="images/IT in tech.jpeg" alt="Developer working" />
        </div>
        <div className="Talent-pool">
          <p>Talent Pool</p>
        </div>
        <div className="content1">
          <h2>Top Talent Meets <br />Global Opportunities</h2>
          <p>We bridge the gap between talented developers and companies that need their skills.</p>
          <a href="./About" className="button1">About Us</a>
        </div>
      </section>
      <section className="developer-pool">
        <div className="Talent-pool1">
          <p>Talent Pool</p>
        </div>
        <div className="content">
          <h2>Empower Your Startup <br />with Top Talents</h2>
          <p>Partner with us to access skilled developers who drive success through cost-effective, innovative, and scalable solutions.</p>
          <a href="https://wa.me/+2347034418309" className="button">Hire a Developer</a>
        </div>
        <div className="image">
          <img src="images/tenify.png" alt="Developer working" />
        </div>
      </section>
      <section class="cta-section">
  <div class="cta-container">
    <h1>Empowering Global Tech Talent for Innovation</h1>
    <p>
      Whether you’re joining our talent pool or you are a skilled developer – 
      Frontend Web Development, Backend Web Development, Android App Development, 
      and iOS App Development, we support your growth.
    </p>
    <div class="cta-buttons">
      <a href='./Developer Incubator' class="cta-btn primary">Become a Developer</a>
      <a href='./Developer Incubator' class="cta-btn secondary">Already a Developer</a>
    </div>
  </div>
</section>
<div className="whatsapp-icon">
        <a href="https://wa.me/+2347034418309" target="_blank" rel="noopener noreferrer">
          <img src="/images/whatsapp.png" alt="WhatsApp" />
        </a>
      </div>

    </>
  );
};

export default Home;
