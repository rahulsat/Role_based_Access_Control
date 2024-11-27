import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">VRV Security</h1>
     
      <section className="about-section">
        <h3>Introduction to VRV Security</h3>
        <p>
          VRV Security, founded in 2020 in Chennai, Tamil Nadu, is a global powerhouse in AI-driven cybersecurity solutions. 
          With a presence in over 12 countries, we have rapidly expanded to protect digital assets for Fortune 500 companies 
          and government organizations. In 2024, our company valuation soared to $400 million, and we continue to set new 
          benchmarks in cybersecurity. We deliver more than 500,000 hours of proactive threat monitoring annually and have 
          secured over 1 million endpoints worldwide. Trusted by over 200 international clients across 5 continents, our 
          expert team ensures unparalleled security and client satisfaction.
        </p>
      </section>
      <section className="about-section">
        <h3>What We Do</h3>
        <ul>
          <li>
            <strong>AI-Dependent Services and Solutions VAPT:</strong> Leveraging artificial intelligence, we perform comprehensive 
            Vulnerability Assessment and Penetration Testing (VAPT) to identify and mitigate threats efficiently.
          </li>
          <li>
            <strong>Cloud Infrastructure VAPT:</strong> We secure cloud environments by assessing vulnerabilities, ensuring 
            robust defense mechanisms for sensitive data and applications.
          </li>
          <li>
            <strong>Threat Monitoring & SOC:</strong> Our Security Operations Center (SOC) provides 24/7 threat monitoring, 
            incident response, and real-time analytics to safeguard against evolving cyber threats.
          </li>
          <li>
            <strong>Company Infrastructure & Services VAPT:</strong> We specialize in protecting complex enterprise infrastructure 
            with tailor-made security strategies to prevent unauthorized access and data breaches.
          </li>
        </ul>
      </section>
      <section className="about-section">
        <h3>Our Mission</h3>
        <p>
          At VRV Security, our mission is to redefine cybersecurity by delivering adaptive, AI-driven solutions that anticipate and 
          mitigate threats before they materialize. We aim to set the gold standard in proactive threat management and ensure our 
          clients operate in a secure and resilient digital landscape. Our commitment to innovation and excellence has earned us a 
          95% client retention rate, a testament to our reliable and effective security measures. We strive to continue pushing 
          boundaries and staying at the forefront of global cybersecurity.
        </p>
      </section>
    </div>
  );
};

export default About;

