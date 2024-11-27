import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Navbar.css" 
import image from '../employement/emp.jpg'
const Navbar = () => {
  const [employeeDetails, setEmployeeDetails] = useState(null);
  const [isProfileVisible, setIsProfileVisible] = useState(false);

 
  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/user/details", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEmployeeDetails(response.data);
      } catch (error) {
        
      }
    };
    fetchEmployeeDetails();
  }, []);

 
  const handleProfileClick = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/homem">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/manageteams">Teams</Link>
       
      </div>
      <div className="navbar-profile">
        <img
          src={image} 
          alt="Profile"
          className="profile-image"
          onClick={handleProfileClick}
        />
        {isProfileVisible && employeeDetails && (
          <div className="profile-details">
            <p><strong>Name:</strong> {employeeDetails.name}</p>
            <p><strong>Email:</strong> {employeeDetails.email}</p>
            <p><strong>Role:</strong> {employeeDetails.role}</p>
            <p><strong>Phone:</strong> {employeeDetails.mobile}</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
