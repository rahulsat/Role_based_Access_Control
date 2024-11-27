import React from "react";

import software from '../employement/software.png'
import network from '../employement/network.png'
import dataa from '../employement/datanl.png'
const Roles = () => {
  const roles = [
  
    { id: 2, title: "Schedule A Meet", img: software  },
    { id: 3, title: "View Team Members", img: network },
    { id: 4, title: "Assign Tasks", img:dataa},
   
  ];

  return (
    <div className="roles-container">
      <h2 className="text-center mb-4 custom-heading">Manage Your Tasks</h2>
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
