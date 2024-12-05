import React from "react";
import '../IncubatorProgram.css';

const DeveloperIncubator = () => {
    return(
      <>
        <div className="container">
          <div className="application-status">
              <span>Application is ongoing</span>
          </div>
          <div className="left-section">
              <h1>Artificial Intelligence / Machine Learning Software Development Incubator</h1>
              <p>In our incubator program, students will build full-scale AI and ML-Powered software solutions
                using the skills below, with the top 3 teams winning $1,000 each for their innovative projects.</p> 
              <p><strong>Pick a course to learn below:</strong></p>
              <div className="courses">
                  <div className="course-card">Front/ Back End Web Development (Full Stack with JavaScript)</div>
                  <div className="course-card">Artificial Intelligence and Machine Learning (Python Programming)</div>
                  <div className="course-card">Android/ iOS App Development (Flutter)</div>
                  <div className="course-card">UIUX Design (Figma User Interface and User Experience Design)</div>
                  <div className="course-card">DevSecOps Engineering (Cyber security and DevOps)</div>
                  <div className="course-card">Data Engineering (Data Analysis for AI and Machine Learning)</div>
              </div>
          </div>      
          <div className="right-section">
              <h2>Get started now</h2>
              <p>Fill in your details to apply now.</p>

              <form>
                  <label htmlFor="fullname">Fullname</label>
                    <input type="text" id="fullname" placeholder="John Doe" />

                  <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="johndoe@gmail.com" />

                  <button type="submit" className="apply-button">Apply Now</button>
              </form>
          </div>
        </div>
        <section className="companies-section1">
            <h3 className="company-text">We Help Companies Like</h3>
            <div className="logo-section1">
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
      </>
    )
    
  };

  
  export default DeveloperIncubator;