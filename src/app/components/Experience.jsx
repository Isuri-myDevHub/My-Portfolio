// Inside your Experience component
import React from 'react';

const Experience = () => {
  return (
    <section  id="experience">
      <h2  className="text-4xl font-bold text-white mb-4">Experience</h2>
      <div className="experience-item">
        <h3 className="text-pink-500 text-xl font-bold mb-2">Trainee Software Engineer</h3>
        <p className="text-gray-500 mb-2">Jul 2023 - Dec 2023</p>
        <p>IJSE-Institute of Software Engineering, Panadura</p>
        <p>
          I actively contribute to the development of Edupanel at the Institute of Software Engineering (IJSE), with a primary focus on designing and implementing the backend functionalities on efficient management of part-time and full-time lecturers.
        </p>
        <p className="font-bold">Tech stack:</p>
        <p>Java, Spring Web MVC, Lombok, Jackson, Hibernate Validator, MySQL Connector, HikariCP, and Firebase Admin SDK.</p>
        <p className="font-bold">Other skills:</p>
        <p>OOP, Design Patterns</p>
      </div>

      <div className="experience-item">
        <h3 className="text-pink-500 text-xl font-bold mb-2">Trainee QA Engineer</h3>
        <p className="text-gray-500 mb-2">Apr 2022 - Oct 2022</p>
        <p>Flexicare Lanka Pvt Ltd., Bandaragama</p>
        <p>
          Improvement project: chemical safety enhancement for CYC and Acetone mixing. Improvement project on quality control processes in the plant by implementing a Kanban system.
        </p>
      </div>

      {/* Add more experience items as needed */}

      <style jsx>{`
        .experience-item {
          margin-bottom: 2rem;
        }

        .experience-item p {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </section>
  );
};

export default Experience;
