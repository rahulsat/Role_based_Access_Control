import React from "react";
import "./managt.css"; 
import frontend from '../employement/frontend.png'
import software from '../employement/software.png'

const Roles = () => {
  const roles = [
    { id: 1, title: "Software Engineers", img: frontend },
    { id: 2, title: "Software Developers", img: software  },
    { id: 1, title: "Total Teams", img: frontend },
   
  
  ];

  return (
    <div className="roles-container">
      <h2 className="text-center mb-4 custom-heading">Teams Based on Roles</h2>
      <div className="roles-row">
        {roles.map((role) => (
          <div className="role-card" key={role.id}>
            <img src={role.img} className="role-card-img" alt={role.title} />
            <h5 className="role-card-title">{role.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roles;
