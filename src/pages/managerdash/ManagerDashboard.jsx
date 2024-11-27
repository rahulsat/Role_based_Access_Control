import React from 'react';
import Navbar from './Navbar';
import image from '../employement/off.jpg';
import Manage from '../managerdash/managt';
import Chan from '../managerdash/Chan';
import Footer from './Footer';
import './managedash.css'; // Make sure to include this file for updated styles.
import { useNavigate } from 'react-router-dom';

function ManagerDashboard() {
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
        <Manage />
        <Chan />
      </div>
      <Footer />
    </div>
  );
}

export default ManagerDashboard;
