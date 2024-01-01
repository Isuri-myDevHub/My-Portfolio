// Inside your Certifications component
import React from 'react';

const Certifications = () => {
  return (
    <section id="certifications" >
      <h2 className="text-2xl font-bold mb-4">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

      <div className="certification-item border border-pink-500 p-4 rounded-lg mb-4 mx-4 w-full md:w-3/5 ">
      <a href="https://www.coursera.org/account/accomplishments/verify/4V8PZGZ6ZDAH" target="_blank" rel="noopener noreferrer" className="font-bold">
            Google Cloud Fundamentals
          </a>
        <p>Google Cloud Training Online</p>
        <p>Issue Year: 2020</p>
      </div>
      <div className="certification-item border border-pink-500 p-4 rounded-lg mb-4 mx-4 w-full md:w-3/5 ">
      <a href="https://university.atlassian.com/student/award/DcmPLpxiGv1jHfN6T7vMpup3" target="_blank" rel="noopener noreferrer" className="font-bold">
      Jira Fundamentals Badge
          </a>
        <p>Atlassian University</p>
        <p>Issue Year: 2023</p>
      </div>
      <div className="certification-item border border-pink-500 p-4 rounded-lg mb-4 mx-4 w-full md:w-3/5 ">
      <a href="https://www.coursera.org/account/accomplishments/certificate/GGDG45FBFCK3" target="_blank" rel="noopener noreferrer" className="font-bold">
      R Programming
          </a>
        <p>Johns Hopkins University</p>
        <p>Issue Year: 2020</p>
      </div>
      <div className="certification-item border border-pink-500 p-4 rounded-lg mb-4 mx-4 w-full md:w-3/5">
      <a href="https://www.coursera.org/account/accomplishments/certificate/NSE2QE4FU7E2" target="_blank" rel="noopener noreferrer" className="font-bold">
      AI For Everyone
          </a>
        <p>DeepLearning.AI</p>
        <p>Issue Year: 2020</p>
      </div>
      <div className="certification-item border border-pink-500 p-4 rounded-lg mb-4 mx-4 w-full md:w-3/5 ">
      <a href="https://www.coursera.org/account/accomplishments/certificate/UYFX6GRZD2LC" target="_blank" rel="noopener noreferrer" className="font-bold">
      Introduction to Programming with MATLAB
          </a>
        <p>Vanderbilt University</p>
        <p>Issue Year: 2021</p>
      </div>

      <div className="certification-item border border-pink-500 p-4 rounded-lg mb-4 mx-4 w-full md:w-3/5 ">
      <a href="https://www.coursera.org/account/accomplishments/certificate/HVPF2DWNCPFQ" target="_blank" rel="noopener noreferrer" className="font-bold">
      Python for Genomic Data Science
          </a>
        <p>The Johns Hopkins University</p>
        <p>Issue Year: 2021</p>
      </div>
      </div>
    </section>
  );
};

export default Certifications;
