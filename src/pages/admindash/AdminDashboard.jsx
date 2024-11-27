import React, { useEffect, useState } from 'react';

import image from '../employement/off.jpg';
import './admin.css';
import Footer from './Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [requests, setRequests] = useState({
    managers: [],
    teamLeaders: [],
    employees: [],
  });

  
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/requests');
        setRequests(response.data); // Assuming the API returns { managers: [], teamLeaders: [], employees: [] }
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);
  const navigate = useNavigate(); 

  const handleKnowMoreClick = () => {
    navigate('/about'); 
  };

  const handleAcceptRequest = (type, id) => {
    alert(`Accepted ${type} request with ID: ${id}`);
   
  };

  return (
    <div>
     
      <div>
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
              onClick={handleKnowMoreClick} 
            >
              Know More
            </button>
          </div>
        </div>
        <h1 align="center">Approve Requests</h1>

      
        <div>
          <h2 className="reqs">Requests from Employees</h2>
          <hr style={{ border: '1px solid black', width: '95%', margin: '14px auto' }} />
          <ul>
            {requests.employees.map((employee, index) => (
              <li key={index}>{employee.name} - {employee.request}</li>
            ))}
          </ul>
          <table className="requests-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role Change Request</th>
                <th>Timing Change Request</th>
                <th>Number of Leave Days</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array(20).fill().map((_, index) => (
                <tr key={index}>
                  <td>Employee {index + 1}</td>
                  <td>Change to Role {index % 5 === 0 ? 'Developer' : 'Tester'}</td>
                  <td>08:00 AM - 04:00 PM</td>
                  <td>{index % 4 + 1} Days</td>
                  <td>
                    <button onClick={() => handleAcceptRequest('Employee', index + 1)}>Accept</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      
        <div>
          <h2 className="reqs">Requests from Team Leaders</h2>
          <hr style={{ border: '1px solid black', width: '95%', margin: '14px auto' }} />
          <ul>
            {requests.teamLeaders.map((leader, index) => (
              <li key={index}>{leader.name} - {leader.request}</li>
            ))}
          </ul>
          <table className="requests-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Team Size Change Request</th>
                <th>Role Change Request</th>
                <th>Timing</th>
                <th>Salary Adjustment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array(10).fill().map((_, index) => (
                <tr key={index}>
                  <td>Team Leader {index + 1}</td>
                  <td>Increase by {index % 3 + 2} members</td>
                  <td>Change to Role {index % 2 === 0 ? 'Manager' : 'Supervisor'}</td>
                  <td>09:00 AM - 05:00 PM</td>
                  <td>Increase by ₹{10000 + index * 2000}</td>
                  <td>
                    <button onClick={() => handleAcceptRequest('Team Leader', index + 1)}>Accept</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="reqs">Requests from Managers</h2>
          <hr style={{ border: '1px solid black', width: '95%', margin: '14px auto' }} />
          <ul>
            {requests.managers.map((manager, index) => (
              <li key={index}>{manager.name} - {manager.request}</li>
            ))}
          </ul>
          <table className="requests-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Salary Increment</th>
                <th>Role Change Request</th>
                <th>Additional Request</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array(5).fill().map((_, index) => (
                <tr key={index}>
                  <td>Manager {index + 1}</td>
                  <td>Increase by ₹{20000 + index * 5000}</td>
                  <td>Change to Role {index % 3 === 0 ? 'Senior Manager' : 'Director'}</td>
                  <td>{index % 2 === 0 ? 'New Equipment' : 'Additional Resources'}</td>
                  <td>
                    <button onClick={() => handleAcceptRequest('Manager', index + 1)}>Accept</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
