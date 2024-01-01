// Inside your EducationRoadmap component
import React from 'react';
import './EducationRoadmap.css'; 
const EducationRoadmap = () => {
  return (
    <div className="education-roadmap">
      <h2 className="text-2xl font-bold mb-4">Education</h2>

      <div className="timeline-item" style={{ marginBottom: '1rem', position: 'relative' }}>
        <div className="timeline-line"></div>
        <div className="timeline-date">2019 - 2023</div>
        <div className="timeline-content">
          <p className="font-bold">B.Sc. Engineering</p>
          <p>Specialized in Chemical and Process Engineering</p>
          <p>University of Moratuwa</p>
          <p>GPA: 3.1/4.2</p>
        </div>
      </div>
       <div className="timeline-item" style={{ marginBottom: '1rem', position: 'relative' }}>
        <div className="timeline-line"></div>
        <div className="timeline-date">01/2023 - 10/2023</div>
        <div className="timeline-content">
          <p className="font-bold">Comprehensive Master Java Developer</p>
          <p>IJSE-Institute of Software Engineering, Panadura</p>
        </div>
      </div>

      <div className="timeline-item" style={{ marginBottom: '1rem', position: 'relative' }}>
        <div className="timeline-line"></div>
        <div className="timeline-date">2019</div>
        <div className="timeline-content">
          <p className="font-bold">Diploma in Web Engineering</p>
          <p>ESoft Metro Campus</p>
        </div>
      </div>

     

      <div className="timeline-item" style={{ marginBottom: '1rem', position: 'relative' }}>
        <div className="timeline-line"></div>
        <div className="timeline-date">2017</div>
        <div className="timeline-content">
          <p className="font-bold">G.C.E. A Levels – Physical Science Stream</p>
          <p>Devi Balika Vidyalaya, Colombo</p>
          <p>Maths: ‘A’, Physics: ‘A’, Chemistry: ‘A’, Z Score: 2.1379</p>
        </div>
      </div>
    </div>
  );
};

export default EducationRoadmap;
