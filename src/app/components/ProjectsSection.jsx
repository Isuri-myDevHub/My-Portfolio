"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag.jsx";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Smart Point of Sale Desktop App",
    description: `The challenging project involved creating a responsive UI with JavaFX,
    and CSS, integrating PostgreSQL for secure data management, and
    implementing advanced features such as Jasper Reports for dynamic
    sales reporting.`,
    image: "/images/projects/1.png",
    tag: ["All", "Desktop"],
    gitUrl: "https://github.com/Isuri-IjseDevHub/SMART_POS.git",
  },
  {
    id: 2,
    title: "Google Search Page Clone",
    description: "This project is a simple clone of the Google Search Page, designed to replicate the look and feel of the iconic Google search engine.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Isuri-IjseDevHub/Google-Search-Page-Clone.git",
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    description: "Implemented WebSockets for seamless communication between front-end and back-end components.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Isuri-IjseDevHub/chat-app.git",
  
  },
  {
    id: 4,
    title: "URL shortener",
    description: "This is a learning project. This presented challenges in adopting Java 17 and integrating Apache Commons Validator.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Isuri-myDevHub/Url-Shortener.git",
 
  },
  {
    id: 5,
    title: "To do list app",
    description: `By creating two frontends for the To-Do List App using Angular and React, this project offers a side-by-side comparison of building intuitive 
    interfaces with distinct architectural approaches while seamlessly integrating both with a Java back end.`,
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Isuri-IjseDevHub/to-do-app-frontend.git",
  
  },
  {
    id: 6,
    title: "Shopping-Cart-Springboot-Microservices",
    description: `This project, a microservices-based shopping cart system implemented
    with Spring Boot and Java 17, presented a challenging yet rewarding
    opportunity to learn and adopt new technologies.`,
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Isuri-myDevHub/Shopping-Cart-Microservices.git",
   
  },
  {
    id: 7,
    title: "WEcolec",
    description:`Decrypt Ideathon 2.0 Pitching Competition  Department of Computer
    Science and Engineering, University of Moratuwa.
    Project was selected for the final round. WEcolec is a waste collection
    project that developed a mobile application for efficient waste
    collection and disposal. The app allows users to schedule waste
    pickups, track waste collection vehicles, receive real-time updates and
    estimates the price of waste.`,
    image: "/images/projects/7.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
  
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Desktop"
          isSelected={tag === "Desktop"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;