// import React, { useState } from 'react';
// import '../styles/Programme.css';

// const Programme = () => {
//   const [hoveredProgram, setHoveredProgram] = useState(null);

//   const toolsData = {
//     'Web Development': [
//       { name: 'HTML', icon: 'fab fa-html5' },
//       { name: 'CSS', icon: 'fab fa-css3-alt' },
//       { name: 'JavaScript', icon: 'fab fa-js' },
//       { name: 'React', icon: 'fab fa-react' },
//       { name: 'Node.js', icon: 'fab fa-node-js' },
//     ],
//     'Artificial Intelligence & Machine Learning': [
//       { name: 'Python', icon: 'fab fa-python' },
//       { name: 'TensorFlow', icon: 'fas fa-brain' },
//       { name: 'Keras', icon: 'fas fa-project-diagram' },
//       { name: 'PyTorch', icon: 'fas fa-fire-alt' },
//     ],
//     'Internet of Things (IoT)': [
//       { name: 'Arduino', icon: 'fas fa-microchip' },
//       { name: 'Raspberry Pi', icon: 'fas fa-microchip' },
//       { name: 'MQTT', icon: 'fas fa-signal' },
//     ],
//     'Cloud Computing': [
//       { name: 'AWS', icon: 'fab fa-aws' },
//       { name: 'Azure', icon: 'fab fa-microsoft' },
//       { name: 'GCP', icon: 'fab fa-google' },
//     ],
//     'DevOps': [
//       { name: 'Docker', icon: 'fab fa-docker' },
//       { name: 'Kubernetes', icon: 'fas fa-network-wired' },
//       { name: 'CI/CD', icon: 'fas fa-code-branch' },
//       { name: 'Jenkins', icon: 'fab fa-jenkins' },
//       { name: 'Git', icon: 'fab fa-git' },
//     ],
//     'UI/UX Design': [
//       { name: 'Figma', icon: 'fab fa-figma' },
//       { name: 'Sketch', icon: 'fab fa-sketch' },
//       { name: 'Adobe XD', icon: 'fas fa-palette' },
//     ],
//   };

//   const descriptions = {
//     'Web Development': 'Master both front-end and back-end technologies through practical projects and real-world applications in web development.',
//     'Artificial Intelligence & Machine Learning': 'Dive into the world of AI and ML, learning tools and techniques to build data-driven, intelligent solutions.',
//     'Internet of Things (IoT)': 'Gain hands-on experience with IoT systems, developing connected devices that bring smart solutions to life.',
//     'Cloud Computing': 'Harness the power of cloud technology, focusing on scalable applications that can transform industries.',
//     'DevOps': 'Learn DevOps practices for efficient management of development and operations, leading to high-quality, consistent delivery.',
//     'UI/UX Design': 'Understand user-centered design principles and develop skills to create engaging, seamless user experiences.',
//   };

//   return (
//     <section id="programme" className="programme">
//       <h2>Our Programs</h2>
//       <div className="programme-container">
//         {Object.keys(toolsData).map((program, index) => (
//           <div
//             key={index}
//             className={`programme-box ${hoveredProgram === program ? 'active' : ''}`}
//             onMouseEnter={() => setHoveredProgram(program)}
//             onMouseLeave={() => setHoveredProgram(null)}
//           >
//             <div className="n3c">
//               <div className="icon">
//                 <i className={`fas ${index === 0 ? 'fa-code' : index === 1 ? 'fa-robot' : index === 2 ? 'fa-sitemap' : index === 3 ? 'fa-cloud' : index === 4 ? 'fa-cogs' : 'fa-paint-brush'}`}></i>
//               </div>
//               <h3>{program}</h3>
//             </div>
//             {hoveredProgram !== program && <p>{descriptions[program]}</p>}
//             {hoveredProgram === program && (
//               <div className="tools-display">
//                 <ul>
//                   {toolsData[program].map((tool, idx) => (
//                     <li key={idx} className="tool-item">
//                       <i className={tool.icon}></i> {tool.name}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Programme;


import React, { useState } from 'react';
import '../styles/Programme.css';

const Programme = () => {
  const [hoveredProgram, setHoveredProgram] = useState(null);

  const toolsData = {
    'Web Development': [
      { name: 'HTML', icon: 'fab fa-html5' },
      { name: 'CSS', icon: 'fab fa-css3-alt' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'React', icon: 'fab fa-react' },
      { name: 'Node.js', icon: 'fab fa-node-js' },
    ],
    'Artificial Intelligence & Machine Learning': [
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'TensorFlow', icon: 'fas fa-brain' },
      { name: 'Keras', icon: 'fas fa-project-diagram' },
      { name: 'PyTorch', icon: 'fas fa-fire-alt' },
    ],
    'Internet of Things (IoT)': [
      { name: 'Arduino', icon: 'fas fa-microchip' },
      { name: 'Raspberry Pi', icon: 'fas fa-microchip' },
      { name: 'MQTT', icon: 'fas fa-signal' },
    ],
    'Cloud Computing': [
      { name: 'AWS', icon: 'fab fa-aws' },
      { name: 'Azure', icon: 'fab fa-microsoft' },
      { name: 'GCP', icon: 'fab fa-google' },
    ],
    'DevOps': [
      { name: 'Docker', icon: 'fab fa-docker' },
      { name: 'Kubernetes', icon: 'fas fa-network-wired' },
      { name: 'CI/CD', icon: 'fas fa-code-branch' },
      { name: 'Jenkins', icon: 'fab fa-jenkins' },
      { name: 'Git', icon: 'fab fa-git' },
    ],
    'UI/UX Design': [
      { name: 'Figma', icon: 'fab fa-figma' },
      { name: 'Sketch', icon: 'fab fa-sketch' },
      { name: 'Adobe XD', icon: 'fas fa-palette' },
    ],
  };

  const descriptions = {
    'Web Development': 'Master both front-end and back-end technologies through practical projects and real-world applications in web development.',
    'Artificial Intelligence & Machine Learning': 'Dive into the world of AI and ML, learning tools and techniques to build data-driven, intelligent solutions.',
    'Internet of Things (IoT)': 'Gain hands-on experience with IoT systems, developing connected devices that bring smart solutions to life.',
    'Cloud Computing': 'Harness the power of cloud technology, focusing on scalable applications that can transform industries.',
    'DevOps': 'Learn DevOps practices for efficient management of development and operations, leading to high-quality, consistent delivery.',
    'UI/UX Design': 'Understand user-centered design principles and develop skills to create engaging, seamless user experiences.',
  };

  return (
    <section id="programme" className="programme">
      <h2>Our Programs</h2>
      <div className="programme-container">
        {Object.keys(toolsData).map((program, index) => (
          <div
            key={index}
            className={`programme-box ${hoveredProgram === program ? 'active' : ''}`}
            onMouseEnter={() => setHoveredProgram(program)}
            onMouseLeave={() => setHoveredProgram(null)}
          >
            <div className="n3c">
              <div className="icon">
                <i className={`fas ${index === 0 ? 'fa-code' : index === 1 ? 'fa-robot' : index === 2 ? 'fa-sitemap' : index === 3 ? 'fa-cloud' : index === 4 ? 'fa-cogs' : 'fa-paint-brush'}`}></i>
              </div>
              <h3>{program}</h3>
            </div>
            {hoveredProgram !== program && <p>{descriptions[program]}</p>}
            {hoveredProgram === program && (
              <div className="tools-display">
                <ul>
                  {toolsData[program].map((tool, idx) => (
                    <li key={idx} className="tool-item">
                      <i className={tool.icon}></i> {tool.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programme;
