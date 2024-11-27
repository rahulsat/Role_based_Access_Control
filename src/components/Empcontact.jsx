import React, { useState } from 'react';
import './empcon.css';
import Navbar from '../pages/employement/Navbar';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    role: 'Employee',
    changeFrom: '',
    changeTo: '',
    leaveDays: '',
  });

  const [submissionMessage, setSubmissionMessage] = useState(''); // State for custom alert message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    
    // Set the thank-you message
    setSubmissionMessage('Thank you for your submission! Your request has been sent successfully.');

    // Clear the form
    setFormData({
      name: '',
      role: 'Employee',
      changeFrom: '',
      changeTo: '',
      leaveDays: '',
    });
  };

  return (
    <div className="contact-container">
      <Navbar />
      <h1 className="form-heading">Contact Us - Request Form</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Current Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="Employee">Employee</option>
            <option value="Teamleader">Teamleader</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="changeRole">Request to Change Role</label>
          <select
            id="changeRole"
            name="changeRole"
            value={formData.changeRole || ''}
            onChange={handleChange}
            required
          >
            <option value="">Select a role</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Fullstack Developer">Fullstack Developer</option>
            <option value="Data Analyst">Data Analyst</option>
            <option value="Cloud Engineer">Cloud Engineer</option>
            <option value="Network Engineer">Network Engineer</option>
            <option value="Data Scientist">Data Scientist</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="changeFrom">Change Timings (From)</label>
          <input
            type="time"
            id="changeFrom"
            name="changeFrom"
            value={formData.changeFrom}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="changeTo">Change Timings (To)</label>
          <input
            type="time"
            id="changeTo"
            name="changeTo"
            value={formData.changeTo}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="leaveDays">Number of Leave Days (Optional)</label>
          <input
            type="number"
            id="leaveDays"
            name="leaveDays"
            value={formData.leaveDays}
            onChange={handleChange}
            min="1"
            placeholder="Optional"
          />
        </div>

        <div className="form-group">
          <button type="submit" className="submit-button">
            Submit Request
          </button>
        </div>
      </form>

      {submissionMessage && <p className="thank-you-message">{submissionMessage}</p>} {/* Display custom alert */}
    </div>
  );
}

export default ContactUs;
