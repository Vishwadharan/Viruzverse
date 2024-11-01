import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      
      <div className="about-section">
        <h3>Who We Are</h3>
        <p>
          Viruzverse is driven by the mission to bridge the gap between industry demands and talent. 
          We create impactful technology solutions in web development, AI, cloud computing, IoT, and DevOps, while empowering students 
          to develop critical skills aligned with market needs. Our approach combines real-world problem-solving with expert-led training, 
          setting students up for successful, industry-ready careers.
        </p>
      </div>
      
      <div className="about-section">
        <h3>Our Vision</h3>
        <p>
        To be a catalyst in empowering individuals worldwide with the skills and tools needed to navigate and innovate in a technology-driven world. Viruzverse envisions a future where real-world problems are tackled through technology, with solutions accessible to everyone, creating a truly connected and capable society.

        </p>
      </div>
      
      <div className="about-section">
        <h3>Our Mission</h3>
        <p>
        At Viruzverse, our mission is to make technology accessible and impactful for all. We are committed to bridging the gap between tech enthusiasts and real-world challenges by providing hands-on training, fostering innovation, and delivering solutions in web, cloud, data science, and IoT. By inspiring and equipping a community of problem solvers, we aim to shape a world where technology is a force for good, available and understandable to everyone.
        </p>
      </div>
    </section>
  );
};

export default About;
