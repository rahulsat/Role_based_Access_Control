import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './change.css';
import Image from './imageper.png';

function Changer() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle button click and navigate to contacts page
  const handleClick = () => {
    navigate('/empcontact'); // Navigate to the contacts page
  };

  return (
    <div>
      <h1 className="custom-heading">Want to Change your role</h1>
      <div className="fl">
        <div>
          <img src={Image} alt="person" height="500px" className="imgp" />
        </div>
        <div>
          <h1 className="custom">Are you Looking Forward!!!</h1>
          <p className="pp">
            You can change your role at any time. You can convert your role as
            Software Engineer, Frontend Developer, Backend Developer, Network
            Engineer, Cloud Engineer, Full Stack Developer, Data Scientist, and
            Data Analyst.
          </p>
          <div className="button-container">
            <button
              type="button"
              className="request-admin-button"
              onClick={handleClick} // Trigger navigate function on click
            >
              Request Admin To Change The Role
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Changer;
