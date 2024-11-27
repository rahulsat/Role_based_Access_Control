import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import EmployeeDashboard from "./pages/employement/EmployeeDashboard";
import TeamLeaderDashboard from "./pages/teamleader/TeamLeaderDashboard";
import ManagerDashboard from "./pages/managerdash/ManagerDashboard";
import AdminDashboard from "./pages/admindash/AdminDashboard";
import About from "./components/About"
import Rolese from "./components/Rolese";
import Empcontact from "./components/Empcontact";
import TeamMember from "./components/TeamMembers";
import ManageTeams from "./components/ManageTeams";
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<SignUp />} />
      <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      <Route path="/team-leader-dashboard" element={<TeamLeaderDashboard />} />
      <Route path="/manager-dashboard" element={<ManagerDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/home" element={<EmployeeDashboard />} />
      <Route path="/homem" element={<ManagerDashboard />} />
      <Route path="/homet" element={<TeamLeaderDashboard />} />
      <Route path="/homea" element={<AdminDashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/rolese" element={<Rolese />} />
      <Route path="/empcontact" element={<Empcontact />} />
      <Route path="/teammembers" element={<TeamMember />} />
      <Route path="/manageteams" element={<ManageTeams />} />
    </Routes>
  );
};

export default App;
