import React from 'react';
import image from '../employement/off.jpg';
import Navbar from './Navbar';
import Tasks from './Tasksmang';
import Edits from './Edits';
import Footer from './Footer';
import './teamLeaderDashboard.css'; // Make sure to include this file for updated styles.
import { useNavigate } from 'react-router-dom';

function TeamLeaderDashboard() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleKnowMoreClick = () => {
    navigate("/about"); // Navigate to the About Us page
  };
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="content">
        <div className="image-container">
          <img
            src={image}
            alt="Placeholder"
            className="image"
            width="100%"
            height="475px"
          />
          <div className="overlay-content">
            <h2 className="overlay-text">VRV Security</h2>
            <button 
            className="overlay-button" 
            onClick={handleKnowMoreClick} // Add click handler
          >
            Know More
          </button>
          </div>
        </div>
        <Tasks />
        <Edits />
      </div>
      <Footer />
    </div>
  );
}

export default TeamLeaderDashboard;
