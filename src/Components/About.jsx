import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About KTUConnect</h1>
      <p className="about-subtitle">Your study companion for KTU CSE S5 - 2019 Scheme</p>

      <section className="about-section">
        <h2>📘 Purpose</h2>
        <p>
          KTUConnect is a platform designed for KTU (APJ Abdul Kalam Technological University) Computer Science students under the 2019 scheme. It helps students access study materials, question papers, and recommended video tutorials — all in one place.
        </p>
      </section>

      <section className="about-section">
        <h2>👥 Target Audience</h2>
        <ul>
          <li>KTU Computer Science Engineering students</li>
          <li>2019 Academic Scheme</li>
          <li>Primarily Semester 5 (S5)</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>🚀 Features</h2>
        <ul>
          <li>Organized semester-wise notes</li>
          <li>Previous year question papers</li>
          <li>Useful YouTube video links</li>
          <li>Lab manuals and viva questions</li>
          <li>Search and filter options</li>
          <li>Simple, free, and student-friendly</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>💻 Built With</h2>
        <p>
          This website is developed using React.js and CSS as part of a mini project for Full Stack Development in S5 CSE.
        </p>
      </section>
      
    </div>
  );
};

export default About;