import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./nav.css" // Import CSS for styling
import image from '../employement/emp.jpg'
const Navbar = () => {
  const [employeeDetails, setEmployeeDetails] = useState(null);
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  // Fetch employee details from backend
  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const token = localStorage.getItem("token"); // Assuming JWT is stored in localStorage
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

  // Toggle profile visibility
  const handleProfileClick = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/homet">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/teammembers">Members</Link>
        <Link to="/empcontact">Contact Us</Link>
      </div>
      <div className="navbar-profile">
        <img
          src={image} // Replace with actual profile image
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
