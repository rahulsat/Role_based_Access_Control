import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    password: "",
    role: "employee", // Default role as "employee"
  });
  const [message, setMessage] = useState(""); // To display success/error messages
  const navigate = useNavigate(); // React Router navigation hook

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission for signup
  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent form reload
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", formData);
      setMessage(response.data.message || "Sign-up successful!");
      if (response.status === 201) {
        alert("Signup successful! Redirecting to login...");
        navigate("/login"); // Redirect to login after successful signup
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Sign-up failed. Please try again.");
    }
  };

  // Navigate to login page
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignUp}>
        <h2>Create an Account</h2>
        {/* Display success or error messages */}
        {message && <p className="message">{message}</p>}

        {/* Input fields */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
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

        {/* Dropdown for selecting role */}
        <div className="select-group">
          <label htmlFor="role">Select Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
            <option value="team leader">Team Leader</option>
            <option value="manager">Manager</option>
          </select>
        </div>

        {/* Submit button */}
        <button type="submit">Sign Up</button>

        {/* Additional links */}
        <div className="links">
          <button type="button" className="link-button" onClick={goToLogin}>
            Already have an account? Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
