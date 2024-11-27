import React, { useState } from 'react';
import './TeamMember.css';

const TeamMember = () => {
  // Static data for employees
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', role: 'Frontend Developer', timings: '09:00 AM - 05:00 PM' },
    { id: 2, name: 'Jane Smith', role: 'Backend Developer', timings: '10:00 AM - 06:00 PM' },
    { id: 3, name: 'Mike Johnson', role: 'Data Scientist', timings: '11:00 AM - 07:00 PM' },
    { id: 4, name: 'Sarah Williams', role: 'Cloud Engineer', timings: '08:00 AM - 04:00 PM' },
    { id: 5, name: 'David Brown', role: 'Network Engineer', timings: '09:30 AM - 05:30 PM' },
    { id: 6, name: 'Emma Wilson', role: 'Fullstack Developer', timings: '10:00 AM - 06:00 PM' },
    { id: 7, name: 'James Miller', role: 'Data Analyst', timings: '08:00 AM - 04:00 PM' },
    { id: 8, name: 'Olivia Davis', role: 'Software Engineer', timings: '09:00 AM - 05:00 PM' },
    { id: 9, name: 'Liam Anderson', role: 'Frontend Developer', timings: '10:00 AM - 06:00 PM' },
    { id: 10, name: 'Sophia Martinez', role: 'Backend Developer', timings: '11:00 AM - 07:00 PM' },
    { id: 11, name: 'Noah Garcia', role: 'Cloud Engineer', timings: '08:00 AM - 04:00 PM' },
    { id: 12, name: 'Isabella Thomas', role: 'Network Engineer', timings: '09:30 AM - 05:30 PM' },
    { id: 13, name: 'Ethan Jackson', role: 'Data Analyst', timings: '10:00 AM - 06:00 PM' },
    { id: 14, name: 'Mia White', role: 'Fullstack Developer', timings: '08:00 AM - 04:00 PM' },
    { id: 15, name: 'Ava Harris', role: 'Software Engineer', timings: '09:00 AM - 05:00 PM' },
    { id: 16, name: 'Elijah Martin', role: 'Frontend Developer', timings: '10:00 AM - 06:00 PM' },
    { id: 17, name: 'Emily Thompson', role: 'Backend Developer', timings: '11:00 AM - 07:00 PM' },
    { id: 18, name: 'Lucas Taylor', role: 'Cloud Engineer', timings: '08:00 AM - 04:00 PM' },
    { id: 19, name: 'Amelia Lee', role: 'Network Engineer', timings: '09:30 AM - 05:30 PM' },
    { id: 20, name: 'Alexander Moore', role: 'Data Scientist', timings: '10:00 AM - 06:00 PM' },
  ]);

  const handleRoleChange = (id, newRole) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id ? { ...emp, role: newRole } : emp
      )
    );
  };

  const handleFileUpload = (id) => {
    alert(`File uploaded for employee with ID: ${id}`);
  };

  return (
    <div className="team-member-container">
      <h1>Team Members</h1>
      <table className="team-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Role</th>
            <th>Timings</th>
            <th>Change Role</th>
            <th>Upload Task</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>{employee.timings}</td>
              <td>
                <select
                  value={employee.role}
                  onChange={(e) => handleRoleChange(employee.id, e.target.value)}
                >
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Fullstack Developer">Fullstack Developer</option>
                  <option value="Data Scientist">Data Scientist</option>
                  <option value="Cloud Engineer">Cloud Engineer</option>
                  <option value="Network Engineer">Network Engineer</option>
                  <option value="Data Analyst">Data Analyst</option>
                  <option value="Software Engineer">Software Engineer</option>
                </select>
              </td>
              <td>
                <button onClick={() => handleFileUpload(employee.id)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamMember;
