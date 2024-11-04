import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const handleServiceClick = (formType) => {
    const forms = {
      trainee: "https://forms.gle/Nv8mumDXQwz8bG6L7",
      professionals: "https://forms.gle/WYdzUCdc19YQ46t48",
    };

    const url = forms[formType];
    if (url) {
      window.open(url, '_blank');
    } else {
      console.error(`No form URL found for ${formType}`);
    }
  };

  return (
    <section id="services" className="services">
      <h2>Welcome to Viruzverse Culture</h2>
      <div className="services-container">
        <div className="service-box" onClick={() => handleServiceClick('trainee')}>
          <div className="service-left">
            <i className="fas fa-user-graduate icon"></i>
            <h3>Trainee</h3>
          </div>
          <div className="service-right">
            <ul>
              <li>Hands-on industry experience</li>
              <li>Guidance from seasoned mentors</li>
              <li>Exposure to real-world projects</li>
              <li>Skill-building workshops and bootcamps</li>
              <li>Opportunities to network with professionals</li>
            </ul>
          </div>
        </div>
        <div className="service-box" onClick={() => handleServiceClick('professionals')}>
          <div className="service-left">
            <i className="fas fa-briefcase icon"></i>
            <h3>Professional</h3>
          </div>
          <div className="service-right">
            <ul>
              <li>Lead and oversee projects</li>
              <li>Mentor aspiring trainees</li>
              <li>Collaborate on cutting-edge tech solutions</li>
              <li>Expand professional and industry networks</li>
              <li>Access exclusive training resources</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
