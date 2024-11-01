import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Home.css';
import homeImage from '../images/home.png';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-txt">
        <h1>Empowering Tomorrow's Innovators, Solving Today’s Challenge</h1>
        <p>
          At Viruzverse, we blend technology and innovation to build solutions for real-world problems, while nurturing the next generation of IT leaders. Join us to shape the future together.
        </p>
        <Link to="/#programme" smooth={true} duration={500}>
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
      <div className="home-img">
        <img src={homeImage} alt="Technology" />
      </div>
    </section>
  );
};

export default Home;
