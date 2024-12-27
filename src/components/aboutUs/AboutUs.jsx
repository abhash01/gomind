import React from "react";
import "./AboutUs.css";
import AboutImage from "../../images/aboutusImg.png"; // Update this with the correct path to your image

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-text">
        <h1>About Us</h1>
        <h4>Empower Your Transition: Bridging Skills for Corporate Success</h4>
        <p>
          Welcome to groMind Academy, your gateway to a successful career. We
          are a passionate team of HR and Technology professionals, united by
          over 15 years of global experience and our mission to empower students
          and professionals with the essential tools and knowledge needed to
          thrive in today's fast-paced job market.
        </p>
        <button className="read-more">Read More</button>
      </div>
      <div className="about-us-image">
        <img src={AboutImage} alt="About Us" />
      </div>
    </section>
  );
};

export default AboutUs;
