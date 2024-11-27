import React from "react";
import './style.css'
import Navbar from '../pages/employement/Navbar'
const roles = [
  {
    title: "Software Engineer",
    description: `Software Engineers design and develop software solutions that meet user needs. They write, test, and maintain code for various applications. They collaborate with cross-functional teams to ensure quality. Proficiency in programming languages and algorithms is key. Problem-solving and analytical skills are crucial for success in this role.`,
  },
  {
    title: "Network Engineer",
    description: `Network Engineers ensure reliable and secure network infrastructure. They install, configure, and troubleshoot networks. Expertise in firewalls, routers, and switches is vital. They focus on optimizing performance and scalability. Monitoring and maintaining network security are essential responsibilities.`,
  },
  {
    title: "Frontend Developer",
    description: `Frontend Developers create engaging user interfaces for web applications. They work with technologies like HTML, CSS, and JavaScript. Their designs ensure a seamless user experience. Collaboration with backend developers and designers is frequent. Attention to detail and creativity are key traits.`,
  },
  {
    title: "Backend Developer",
    description: `Backend Developers manage the server-side logic of web applications. They handle databases, APIs, and server architecture. Ensuring secure and efficient data flow is their main task. They often use languages like Python, Java, or Node.js. Scalability and performance are their focus areas.`,
  },
  {
    title: "Cloud Engineer",
    description: `Cloud Engineers design and maintain cloud-based infrastructure. They deploy applications and services in environments like AWS, Azure, or Google Cloud. Managing scalability, reliability, and security is crucial. Automation and scripting skills are highly valued. Expertise in DevOps practices is a plus.`,
  },
  {
    title: "Data Scientist",
    description: `Data Scientists analyze large datasets to derive actionable insights. They build predictive models and use statistical tools. Proficiency in Python, R, and SQL is essential. They often work with machine learning techniques. Their insights drive strategic business decisions.`,
  },
  {
    title: "Data Analyst",
    description: `Data Analysts interpret data to provide business insights. They create reports and dashboards to visualize trends. They use tools like Excel, Tableau, and Power BI. Strong analytical and problem-solving skills are critical. Their findings support operational and strategic goals.`,
  },
  {
    title: "Full Stack Developer",
    description: `Full Stack Developers handle both frontend and backend development. They manage the complete software development lifecycle. Versatility in multiple frameworks and languages is needed. They ensure cohesive integration of UI and server-side logic. Problem-solving across the stack is their strength.`,
  },
];

const Roles = () => {
  return (
    <div className="roles-container">
        <Navbar></Navbar>
      {roles.map((role, index) => (
        <div key={index} className="role-card">
          <h3 className="role-title">{role.title}</h3>
          <p className="role-description">{role.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Roles;
