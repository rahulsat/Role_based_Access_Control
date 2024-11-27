// Inside EmployeeDashboard.js or any other layout component
import React from "react";
import "./footer.css"; // Import the footer CSS file

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 VRV Security. All rights reserved.</p>
      <p>
        <a href="https://www.example.com/privacy-policy">Privacy Policy</a> |{" "}
        <a href="https://www.example.com/terms-of-service">Terms of Service</a>
      </p>
    </div>
  );
};

export default Footer;
