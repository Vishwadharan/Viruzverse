// IndustryFocus.jsx
import React from 'react';
import '../styles/IndustryFocus.css';
import handIcon from '../images/hand.png';
import healthIcon from '../images/better-health.png';
import educationIcon from '../images/education.png';
import financeIcon from '../images/marketing.png';
import manufacturingIcon from '../images/settings.png';
import logisticsIcon from '../images/truck.png';

const IndustryFocus = () => {
  const industries = [
    { name: "Healthcare", icon: healthIcon },
    { name: "Education", icon: educationIcon },
    { name: "Finance", icon: financeIcon },
    { name: "Manufacturing (IOT)", icon: manufacturingIcon },
    { name: "Transportation & Logistics", icon: logisticsIcon },
    { name: "Real Estate", icon: handIcon },
  ];

  return (
    <div id="industryfocus" className="industry-focus-container">
      <h2>Industry Focus</h2>
      <div className="industry-grid">
        {industries.map((industry, index) => (
          <div key={index} className="industry-box">
            <img src={industry.icon} alt={`${industry.name} icon`} className="industry-icon" />
            <span>{industry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryFocus;
