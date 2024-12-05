import React from "react";
import "./About.css";

const About = () => {
  return (
    <div style={styles.container}>
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>About Us</h1>
        <p style={styles.heroSubtitle}>
          Empowering Individuals. Bridging Opportunities.
        </p>
      </section>

      <section style={styles.contentSection}>
        <div style={styles.contentBlock}>
          <h2 style={styles.sectionTitle}>Who We Are</h2>
          <p style={styles.sectionText}>
            We are a technology-driven company dedicated to equipping
            individuals with the skills they need to thrive in the tech
            industry. Our mission is to bridge the gap between talent and
            opportunity by providing cutting-edge training and connecting
            skilled professionals with companies that value their expertise.
          </p>
        </div>

        <div style={styles.contentBlock}>
          <h2 style={styles.sectionTitle}>What We Do</h2>
          <p style={styles.sectionText}>
            - <strong>Upskilling Talent:</strong> We provide world-class training
            programs in fields like web development, data science, UI/UX design,
            and more.  
            <br />
            - <strong>Job Placement:</strong> Our network of industry partners allows
            us to connect trained professionals to companies in need of their
            expertise.  
            <br />
            - <strong>Ongoing Support:</strong> We continue to support our
            graduates even after placement to ensure their success.
          </p>
        </div>

        <div style={styles.contentBlock}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.sectionText}>
            To empower the next generation of tech professionals and foster
            innovation by closing the gap between skill and demand in the
            technology industry.
          </p>
        </div>

        <div style={styles.contentBlock}>
          <h2 style={styles.sectionTitle}>Our Vision</h2>
          <p style={styles.sectionText}>
            To be a global leader in talent development and placement,
            revolutionizing how companies find skilled professionals while
            shaping the future of tech careers.
          </p>
        </div>
      </section>

      <section style={styles.callToAction}>
        <h3 style={styles.ctaTitle}>Ready to Start Your Tech Journey?</h3>
        <a href="./Developer Incubator" style={styles.ctaButton}>Join Us Today</a>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    padding: "20px",
    maxWidth: "1200px",
    margin: "30px auto",
  },
  heroSection: {
    textAlign: "center",
    marginBottom: "50px",
  },
  heroTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center", // Center-align the main title
  },
  heroSubtitle: {
    fontSize: "18px",
    color: "#666",
    textAlign: "center", // Center-align the subtitle
  },
  contentSection: {
    marginBottom: "40px",
  },
  contentBlock: {
    marginBottom: "30px",
  },
  sectionTitle: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "10px",
    textAlign: "center", // Center-align all section titles
  },
  sectionText: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
    textAlign: "center", // Optionally, center-align the text
  },
  callToAction: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
  },
  ctaTitle: {
    fontSize: "20px",
    marginBottom: "20px",
    textAlign: "center", // Center-align the CTA title
  },
  ctaButton: {
    padding: "10px 20px",
    textDecoration: "none",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default About;
