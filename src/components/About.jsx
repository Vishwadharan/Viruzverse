import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      
      <div className="about-section">
        <h3>Who We Are</h3>
        <p>
          Viruzverse is a division of Code Kadai Solutions, driven by the mission to bridge the gap between industry demands and talent. 
          We create impactful technology solutions in web development, AI, cloud computing, IoT, and DevOps, while empowering students 
          to develop critical skills aligned with market needs. Our approach combines real-world problem-solving with expert-led training, 
          setting students up for successful, industry-ready careers.
        </p>
      </div>
      
      <div className="about-section">
        <h3>Our Vision</h3>
        <p>
          We envision a world where innovation is accessible and practical solutions to real-world challenges are within reach. 
          By connecting students with industry experts and integrating hands-on experience with cutting-edge technology, Viruzverse 
          builds both sustainable solutions and skilled professionals for the future.
        </p>
      </div>
      
      <div className="about-section">
        <h3>Our Mission</h3>
        <p>
          To provide students and industry alike with advanced IT solutions, bridging the gap between theoretical knowledge and 
          practical application. We foster skill development through interactive, project-based training designed to meet the latest 
          industry demands.
        </p>
      </div>
    </section>
  );
};

export default About;
