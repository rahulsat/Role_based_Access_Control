import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Login.css"; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "employee", 
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); 
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
  const handleLogin = (e) => {
    e.preventDefault(); 

    const { email, password, role } = formData;

   
    if (!email || !password) {
      setMessage("Please fill out all fields.");
      return;
    }

    
    switch (role.toLowerCase()) {
      case "employee":
        setMessage("Login successful!");
        navigate("/employee-dashboard");
        break;
      case "team leader":
        setMessage("Login successful!");
        navigate("/team-leader-dashboard");
        break;
      case "manager":
        setMessage("Login successful!");
        navigate("/manager-dashboard");
        break;
      case "admin":
        setMessage("Login successful!");
        navigate("/admin-dashboard");
        break;
      default:
        setMessage("Login failed. Role not recognized.");
    }
  };

  const goToSignUp = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        {message && <p className="message">{message}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

       
        <div className="select-group">
          <label htmlFor="role">Select Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="employee">Employee</option>
            <option value="team leader">Team Leader</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit">Login</button>
        <div className="links">
          <a href="/forgot-password">Forgot Password?</a>
          <button type="button" className="link-button" onClick={goToSignUp}>
            Create an account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
