// src/pages/EmployeeDashboard.js
import React from "react";
import Navbar from './Navbar';
import './employee.css';
import image from '../employement/off.jpg';
import Rolesemp from './Rolesemp';
import Changerole from './Changer';
import Footer from "./Footer";

const EmployeeDashboard = () => {
  return (
    <div className="employee-dashboard section">
      <Navbar />
      <div className="image-container">
        <img
          src={image}
          alt="Placeholder"
          className="image"
        />
        <div className="overlay-content">
          <h2 className="overlay-text">VRV Security</h2>
          <button className="overlay-button">Know More</button>
        </div>
      </div>
      <div className="content-container">
        <div className="roles-section">
          <h2>Want to Change Your Role?</h2>
          <Rolesemp />
        </div>
        <div className="changerole-section">
          <Changerole />
        </div>
       
      </div>
      <Footer />
    </div>
  );
};

export default EmployeeDashboard;
