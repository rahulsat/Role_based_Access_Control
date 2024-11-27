import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./rolesemp.css"; // Import CSS for styling
import frontend from "../employement/frontend.png";
import software from "../employement/software.png";
import backend from "../employement/bacjend.png";
import fullstack from "../employement/fullstack.png";
import datascientist from "../employement/ds.png";
import cloud from "../employement/cloud.png";
import network from "../employement/network.png";
import dataa from "../employement/datanl.png";

const Roles = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const roles = [
    { id: 1, title: "Software Engineer", img: frontend },
    { id: 2, title: "Frontend Developer", img: software },
    { id: 3, title: "Backend Developer", img: backend },
    { id: 4, title: "Fullstack Developer", img: fullstack },
    { id: 5, title: "Data Analyst", img: dataa },
    { id: 6, title: "Cloud Engineer", img: cloud },
    { id: 9, title: "Ethical Hacker", img:dataa},
    { id: 7, title: "Network Engineer", img: network },
    { id: 8, title: "Data Scientist", img: datascientist },
  ];

  // Function to handle card click and navigate to the roles page
  const handleCardClick = () => {
    navigate("/rolese"); // Navigate to the rolese page
  };

  return (
    <div className="roles-container">
      <h2 className="custom-heading">Explore The Roles</h2>
      <div className="roles-row">
        {roles.map((role) => (
          <div
            className="role-card"
            key={role.id}
            onClick={handleCardClick} // Trigger the navigate function on click
          >
            <img src={role.img} className="role-card-img" alt={role.title} />
            <h5 className="role-card-title">{role.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roles;
