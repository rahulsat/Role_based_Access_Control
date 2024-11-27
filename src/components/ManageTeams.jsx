import React, { useState } from 'react';
import './ManageTeams.css';

const ManageTeams = () => {
  // Static data for teams
  const [teams, setTeams] = useState([
    { id: 1, name: 'Alpha Team', members: 'John, Jane, Mike', stream: 'Development', timings: '09:00 AM - 05:00 PM' },
    { id: 2, name: 'Beta Team', members: 'Sarah, David, Emma', stream: 'Testing', timings: '10:00 AM - 06:00 PM' },
    { id: 3, name: 'Gamma Team', members: 'James, Olivia, Liam', stream: 'Development', timings: '11:00 AM - 07:00 PM' },
    { id: 4, name: 'Delta Team', members: 'Sophia, Noah, Isabella', stream: 'Testing', timings: '08:00 AM - 04:00 PM' },
    { id: 5, name: 'Epsilon Team', members: 'Ethan, Mia, Ava', stream: 'Development', timings: '09:30 AM - 05:30 PM' },
    { id: 6, name: 'Zeta Team', members: 'Elijah, Emily, Lucas', stream: 'Testing', timings: '10:00 AM - 06:00 PM' },
    { id: 7, name: 'Eta Team', members: 'Amelia, Alexander, Emma', stream: 'Development', timings: '08:00 AM - 04:00 PM' },
    { id: 8, name: 'Theta Team', members: 'John, David, Sophia', stream: 'Testing', timings: '09:00 AM - 05:00 PM' },
    { id: 9, name: 'Iota Team', members: 'Liam, Mia, Olivia', stream: 'Development', timings: '10:00 AM - 06:00 PM' },
    { id: 10, name: 'Kappa Team', members: 'Sophia, Ethan, Sarah', stream: 'Testing', timings: '11:00 AM - 07:00 PM' },
    { id: 11, name: 'Lambda Team', members: 'James, Isabella, Emily', stream: 'Development', timings: '08:00 AM - 04:00 PM' },
    { id: 12, name: 'Mu Team', members: 'Elijah, Mia, Ava', stream: 'Testing', timings: '09:30 AM - 05:30 PM' },
    { id: 13, name: 'Nu Team', members: 'Olivia, Emma, Amelia', stream: 'Development', timings: '10:00 AM - 06:00 PM' },
    { id: 14, name: 'Xi Team', members: 'David, Noah, Sophia', stream: 'Testing', timings: '08:00 AM - 04:00 PM' },
    { id: 15, name: 'Omicron Team', members: 'Liam, Isabella, Lucas', stream: 'Development', timings: '09:00 AM - 05:00 PM' },
    { id: 16, name: 'Pi Team', members: 'Emily, James, Ethan', stream: 'Testing', timings: '10:00 AM - 06:00 PM' },
    { id: 17, name: 'Rho Team', members: 'Mia, Sophia, Sarah', stream: 'Development', timings: '11:00 AM - 07:00 PM' },
    { id: 18, name: 'Sigma Team', members: 'Ava, Emma, Amelia', stream: 'Testing', timings: '08:00 AM - 04:00 PM' },
    { id: 19, name: 'Tau Team', members: 'John, Liam, Olivia', stream: 'Development', timings: '09:30 AM - 05:30 PM' },
    { id: 20, name: 'Upsilon Team', members: 'Elijah, Alexander, Emily', stream: 'Testing', timings: '10:00 AM - 06:00 PM' },
  ]);

  // Handle stream change
  const handleStreamChange = (id, newStream) => {
    setTeams((prev) =>
      prev.map((team) =>
        team.id === id ? { ...team, stream: newStream } : team
      )
    );
  };

  // Handle team deletion
  const handleDelete = (id) => {
    setTeams((prev) => prev.filter((team) => team.id !== id));
  };

  // Handle meet action
  const handleMeet = (teamName) => {
    alert(`Initiating a meeting for ${teamName}`);
  };

  return (
    <div className="manage-teams-container">
      <h1>Manage Teams</h1>
      <table className="teams-table">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Team Members</th>
            <th>Stream</th>
            <th>Timings</th>
            <th>Change Stream</th>
            <th>Delete Team</th>
            <th>Meet</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.name}</td>
              <td>{team.members}</td>
              <td>{team.stream}</td>
              <td>{team.timings}</td>
              <td>
                <select
                  value={team.stream}
                  onChange={(e) =>
                    handleStreamChange(team.id, e.target.value)
                  }
                >
                  <option value="Testing">Testing</option>
                  <option value="Development">Development</option>
                </select>
              </td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(team.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="meet-button"
                  onClick={() => handleMeet(team.name)}
                >
                  📞
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageTeams;
