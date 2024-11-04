import React, { useEffect, useState } from 'react';
import '../styles/Highlights.css';

const Highlights = () => {
  const [studentCount, setStudentCount] = useState(0);

  // Counter effect for Students Trained
  useEffect(() => {
    if (studentCount < 60) {
      const interval = setInterval(() => {
        setStudentCount((prevCount) => prevCount + 1);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [studentCount]);

  return (
    <section className="highlights">
      <h2>Driven by Excellence</h2>
      <div className="highlight-cards">
        <div className="highlight-card">
          <h3>{studentCount}+</h3>
          <p>Students Trained</p>
        </div>
        <div className="highlight-card">
          <h3>Industry Experts</h3>
          <p>as Mentors</p>
        </div>
        <div className="highlight-card">
          <h3>Real-World</h3>
          <p>Project Exposure</p>
        </div>
        <div className="highlight-card">
          <h3>Hands-On Labs</h3>
          <p>and Workshops</p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
